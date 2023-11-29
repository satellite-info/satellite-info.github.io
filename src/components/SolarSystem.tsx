import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";
import planetData from './planetData'
import "../../public/solar_system.css"

const SolarSystem = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
                <Sun />
                {planetData.map((planet) => (
                    <Planet planet={planet} key={planet.id} />
                ))}
                <Lights />
                <OrbitControls />
            </Canvas>
            <a
                href="#/earth"
                className="article-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Solar System
            </a>
        </>
    );
};


function Sun() {
    return (
        <mesh>
            <sphereGeometry args={[0.555, 32, 32]} />
            <meshStandardMaterial color="#E1DC59" />
        </mesh>
    );
}
function Planet({ planet: { color, xRadius, zRadius, size } }) {
    return (
        <>
            <mesh position={[xRadius, 0, 0]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
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


export default SolarSystem;
