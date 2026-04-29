'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ProductionRocket() {
  const groupRef = useRef<THREE.Group>(null)
  const flameRef = useRef<THREE.Group>(null)
  const orbitAngle = useRef(0)
  const orbitRadius = 3.2
  const orbitSpeed = 0.12

  useFrame((_, delta) => {
    if (!groupRef.current || !flameRef.current) return
    orbitAngle.current += delta * orbitSpeed

    // Orbit motion
    const x = Math.cos(orbitAngle.current) * orbitRadius
    const z = Math.sin(orbitAngle.current) * orbitRadius
    const y = 1.2 + Math.sin(orbitAngle.current * 1.5) * 0.5

    groupRef.current.position.set(x, y, z)

    // Face direction of orbit
    const angle = orbitAngle.current + Math.PI / 2
    groupRef.current.rotation.y = -angle
    groupRef.current.rotation.z = Math.sin(orbitAngle.current * 1.5) * 0.05

    // Flame animation
    flameRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh
      mesh.scale.x = 0.7 + Math.random() * 0.3
      mesh.scale.z = 0.7 + Math.random() * 0.3
    })
  })

  return (
    <group ref={groupRef}>
      {/* Orbit trail glow */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.1, orbitRadius + 0.1, 64]} />
        <meshBasicMaterial color="#4488ff" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {/* Rocket Body - slightly larger, different color scheme */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 1.4, 16]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Nose Cone - gold/bronze */}
      <mesh position={[0, 0.95, 0]}>
        <coneGeometry args={[0.25, 0.5, 16]} />
        <meshStandardMaterial
          color="#d4a017"
          metalness={0.8}
          roughness={0.2}
          emissive="#d4a017"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Gold stripe */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.06, 16]} />
        <meshStandardMaterial color="#d4a017" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Window */}
      <mesh position={[0, 0.1, 0.28]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color="#88ccff" emissive="#4488ff" emissiveIntensity={0.2} />
      </mesh>

      {/* Fins */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * 0.36, -0.5, Math.cos(angle) * 0.36]}
            rotation={[0, -angle, 0.3]}
          >
            <boxGeometry args={[0.06, 0.25, 0.04]} />
            <meshStandardMaterial color="#d4a017" metalness={0.6} roughness={0.3} />
          </mesh>
        )
      })}

      {/* Flame group */}
      <group ref={flameRef} position={[0, -0.85, 0]}>
        <mesh>
          <coneGeometry args={[0.12, 0.4, 8]} />
          <meshStandardMaterial color="#00aaff" emissive="#0088ff" emissiveIntensity={1.5} transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <coneGeometry args={[0.06, 0.3, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#44ccff" emissiveIntensity={2} transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  )
}
