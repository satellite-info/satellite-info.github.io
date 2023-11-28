import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

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
        <>
            <mesh position={[8, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#78D481" />
            </mesh>
            <Ecliptic xRadius={8} zRadius={4} />
        </>
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

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }
    points.push(points[0]);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
    );
}

export default Oa;
