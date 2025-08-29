
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Environment } from '@react-three/drei'

// 3D Floating Dumbbells Component
function FloatingDumbbell({ position, rotation, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry args={[0.3, 0.3, 2, 8]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
        {/* Dumbbell ends */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
    </Float>
  )
}

// 3D Text Component
function Floating3DText() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[-2, 0, 0]}
        rotation={[0, 0.2, 0]}
      >
        LIFT
        <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.4} />
      </Text3D>
    </Float>
  )
}

// Particle System Component
function ParticleSystem() {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ]}>
        <sphereGeometry args={[0.02, 4, 4]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  ))

  return <>{particles}</>
}

// 3D Scene Component
export default function Scene3D() {
  return (
    <Canvas 
      className="absolute inset-0 z-0" 
      camera={{ position: [0, 0, 10] }}
      onCreated={() => console.log('3D Scene loaded successfully')}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
      
      <Environment preset="night" />
      
      {/* Floating Dumbbells */}
      <FloatingDumbbell position={[-4, 2, -3]} rotation={[0.5, 0.3, 0]} scale={0.8} />
      <FloatingDumbbell position={[5, -1, -2]} rotation={[-0.3, 0.8, 0.2]} scale={0.6} />
      <FloatingDumbbell position={[2, 3, -4]} rotation={[0.2, -0.5, 0.1]} scale={0.7} />
      
      {/* 3D Text */}
      <Floating3DText />
      
      {/* Particle System */}
      <ParticleSystem />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={2 * Math.PI / 3}
      />
    </Canvas>
  )
}
