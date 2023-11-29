import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

const Rhythm = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);

    return (
        <Stage>
            <Sprite
                image="../../public/images/satellite.png"
                width={50}
                height={50}
                x={400}
                y={270}
                anchor={{ x: 0.5, y: 0.5 }}
            />

            <Container x={400} y={330}>
                <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
            </Container>
        </Stage>
    );
};

export default Rhythm;
