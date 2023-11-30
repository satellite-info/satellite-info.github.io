import { Stage, Container, Sprite } from '@pixi/react';
import { useState, useEffect } from 'react';
import { sound } from '@pixi/sound';

const Rhythm = () => {
    const [satelliteRotation, setSatelliteRotation] = useState(0);
    const [satelliteScale, setSatelliteScale] = useState(1);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setSatelliteRotation((prevRotation) => prevRotation + 0.003);
        }, 100);

        // 이미 등록된 사운드인지 확인
        const soundList = ['buk_1', 'buk_2', 'buk_3'];

        soundList.forEach(soundName => {
            if (!sound.exists(soundName)) {
                console.log(`add sound - ${soundName}`);
                sound.add(soundName, `sound/${soundName}.wav`);
            }
        });

        return () => {
            clearInterval(intervalId);

            // 사운드가 필요 없을 때 제거
            sound.remove('buk_1');
            sound.remove('buk_2');
            sound.remove('buk_3');
        }
    }, []);


    const handleStageTouchStart = (event) => {
        const clientX: number = event.clientX;
        const innerWidth: number = window.innerWidth;
        const touchPositionRatio: number = clientX / innerWidth;

        console.log("handleStageTouchStart(event.clientX):" + event.clientX);
        console.log("handleStageTouchStart(window.innerWidth):" + window.innerWidth);
        console.log("handleStageTouchStart(touchPositionRatio):" + touchPositionRatio);

        if (touchPositionRatio < 1/3) {
            sound.play('buk_1')
        } else if (touchPositionRatio > 2/3 ) {
            sound.play('buk_3')
        } else {
            sound.play('buk_2');
        }

        setSatelliteScale((prevScale) => prevScale * (1.0 + touchPositionRatio/2));
    };

    const handleStageTouchEnd = () => {
        setSatelliteScale(1); // 손가락을 뗄 때 기존 크기로 되돌리기
    };

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return (
        <Stage
            width={viewportWidth}
            height={viewportHeight}
            options={{ resizeTo: window }}
            onPointerDown={handleStageTouchStart}
            onPointerUp={handleStageTouchEnd}
        >
            <Container>
                <Sprite
                    image="images/buk.png"
                    width={200 * satelliteScale}
                    height={200 * satelliteScale}
                    x={viewportWidth / 2}
                    y={viewportHeight / 2}
                    anchor={{ x: 0.5, y: 0.5 }}
                    rotation={satelliteRotation}
                />
            </Container>
        </Stage>
    );
};

export default Rhythm;
