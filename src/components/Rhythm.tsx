import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'


function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}


const Rhythm = () => {
    return (
        // <div id="canvas-container">
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        // </div>
    );
};

export default Rhythm;
