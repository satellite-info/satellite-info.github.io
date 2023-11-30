import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite } from '@pixi/react';
import { useMemo, useState, useEffect } from 'react';
import { sound } from '@pixi/sound';

const Rhythm = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const [satelliteRotation, setSatelliteRotation] = useState(0);
    const [satelliteScale, setSatelliteScale] = useState(1);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setSatelliteRotation((prevRotation) => prevRotation + 0.003);
        }, 100);

        // 이미 등록된 사운드인지 확인
        if (!sound.exists('buk_2')) {
            console.log("add sound")
            sound.add('buk_2', 'sound/buk_2.wav');
        }

        return () => {
            clearInterval(intervalId);

            // 사운드가 필요 없을 때 제거
            sound.remove('buk_2');
        }
    }, []);


    const handleStageTouchStart = () => {
        console.log("handleStageTouchStart");
        sound.play('buk_2');
        setSatelliteScale((prevScale) => prevScale * 1.2);
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
