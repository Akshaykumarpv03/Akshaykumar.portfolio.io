import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
    const ref = useRef()
    const positions = useMemo(() => {
        const pos = new Float32Array(3000)
        for (let i = 0; i < 3000; i++) {
            pos[i] = (Math.random() - 0.5) * 12
        }
        return pos
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.02
            ref.current.rotation.y -= delta * 0.015
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#8b5cf6" size={0.015} sizeAttenuation depthWrite={false} opacity={0.5} />
        </Points>
    )
}

function WireframeIcosahedron() {
    const ref = useRef()
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.15
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.2
        }
    })

    return (
        <mesh ref={ref} position={[2.2, 0.3, -1.5]} scale={1.2}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color="#a855f7"
                wireframe
                transparent
                opacity={0.15}
                emissive="#a855f7"
                emissiveIntensity={0.3}
            />
        </mesh>
    )
}

function GlowingSphere() {
    const ref = useRef()
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3
            ref.current.rotation.z = clock.getElapsedTime() * 0.1
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <mesh ref={ref} position={[-2.5, -0.5, -2]} scale={0.8}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color="#3b82f6"
                    emissive="#3b82f6"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.12}
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    )
}

function FloatingTorus() {
    const ref = useRef()
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * 0.3
            ref.current.rotation.y = clock.getElapsedTime() * 0.2
            ref.current.position.y = 1.5 + Math.sin(clock.getElapsedTime() * 0.4) * 0.2
        }
    })

    return (
        <mesh ref={ref} position={[0, 1.5, -3]} scale={0.6}>
            <torusGeometry args={[1, 0.3, 16, 50]} />
            <meshStandardMaterial
                color="#ec4899"
                wireframe
                transparent
                opacity={0.12}
                emissive="#ec4899"
                emissiveIntensity={0.3}
            />
        </mesh>
    )
}

function FloatingOctahedron() {
    const ref = useRef()
    useFrame(({ clock }) => {
        if (ref.current) {
            ref.current.rotation.x = clock.getElapsedTime() * 0.25
            ref.current.rotation.z = clock.getElapsedTime() * 0.15
            ref.current.position.y = -1 + Math.cos(clock.getElapsedTime() * 0.6) * 0.3
        }
    })

    return (
        <mesh ref={ref} position={[3, -1, -2.5]} scale={0.5}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#06b6d4"
                wireframe
                transparent
                opacity={0.15}
                emissive="#06b6d4"
                emissiveIntensity={0.3}
            />
        </mesh>
    )
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                dpr={[1, 1.5]}
                style={{ background: 'transparent' }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={0.6} color="#a855f7" />
                <pointLight position={[-5, -5, 3]} intensity={0.4} color="#3b82f6" />
                <pointLight position={[0, 3, 2]} intensity={0.3} color="#ec4899" />
                <StarField />
                <WireframeIcosahedron />
                <GlowingSphere />
                <FloatingTorus />
                <FloatingOctahedron />
            </Canvas>
        </div>
    )
}
