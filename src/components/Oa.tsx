import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Oa = () => {

    return (
        <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
            <Sun />
            <Planet />
            <Lights />
            <OrbitControls />
        </Canvas>
    );
};

function Sun() {
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial color="#E1DC59" />
        </mesh>
    );
}
function Planet() {
    return (
        <mesh position={[8, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#78D481" />
        </mesh>
    );
}
function Lights() {
    return (
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
        </>
    );
}

export default Oa;
