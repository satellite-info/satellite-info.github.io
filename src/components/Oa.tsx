import { Canvas } from '@react-three/fiber';

const Oa = () => {

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#E1DC59" />
            </mesh>
        </Canvas>
    );
};

export default Oa;
