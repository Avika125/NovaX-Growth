import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ theme }) => {
    const ref = useRef();

    // Generating random points for particles
    const particles = useMemo(() => {
        const temp = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Subtle mouse interaction
        const mouseX = state.mouse.x * 0.2;
        const mouseY = state.mouse.y * 0.2;
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouseX, 0.1);
        ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouseY, 0.1);
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={theme === 'dark' ? "#854F6C" : "#522B5B"}
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending}
                />
            </Points>
        </group>
    );
};

const HeroBackground = ({ theme }) => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ParticleField theme={theme} />
            </Canvas>
        </div>
    );
};

export default HeroBackground;
