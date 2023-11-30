import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite } from '@pixi/react';
import { useMemo, useState, useEffect } from 'react';

const Rhythm = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const [satelliteRotation, setSatelliteRotation] = useState(0);
    const [satelliteScale, setSatelliteScale] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSatelliteRotation((prevRotation) => prevRotation + 0.003);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);


    const handleStageTouchStart = () => {
        console.log("handleStageTouchStart");
        setSatelliteScale((prevScale) => prevScale * 2);
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
                    image="images/satellite.png"
                    width={50 * satelliteScale}
                    height={50 * satelliteScale}
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
