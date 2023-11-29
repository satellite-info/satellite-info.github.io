import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo, useState, useEffect } from 'react';

const Rhythm = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const [satelliteRotation, setSatelliteRotation] = useState(0);

    useEffect(() => {
        // 일정 간격으로 회전 각도 업데이트
        const intervalId = setInterval(() => {
            // 회전 각도를 일정량씩 증가 (예시: 0.1 라디안)
            setSatelliteRotation((prevRotation) => prevRotation + 0.1);
        }, 100);

        // 컴포넌트가 언마운트되면 interval 정리
        return () => clearInterval(intervalId);
    }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return (
        <Container width={viewportWidth} height={viewportHeight}>
        <Stage width={viewportWidth} height={viewportHeight} options={{ resizeTo: window }}>
            <Sprite
                image="../../public/images/satellite.png"
                width={50}
                height={50}
                x={400}
                y={270}
                anchor={{ x: 0.5, y: 0.5 }}
                rotation={satelliteRotation}
            />
        </Stage>
        </Container>
    );
};

export default Rhythm;
