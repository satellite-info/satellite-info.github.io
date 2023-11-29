import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite } from '@pixi/react';
import { useMemo, useState, useEffect } from 'react';

const Rhythm = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const [satelliteRotation, setSatelliteRotation] = useState(0);
    const [satelliteScale, setSatelliteScale] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSatelliteRotation((prevRotation) => prevRotation + 0.1);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    const handleTouch = () => {
        setSatelliteScale((prevScale) => prevScale * 2);
    };

    const handleRelease = () => {
        setSatelliteScale(1); // 손가락을 뗄 때 기존 크기로 되돌리기
    };

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return (
        <Stage width={viewportWidth} height={viewportHeight} options={{ resizeTo: window }}>
            <Container interactive={true} pointerdown={handleTouch} pointerup={handleRelease}>
                <Sprite
                    image="../../public/images/satellite.png"
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
