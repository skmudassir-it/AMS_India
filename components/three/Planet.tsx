'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface PlanetProps {
  position?: [number, number, number]
  color?: string
  size?: number
  ringColor?: string
  rotationSpeed?: number
  orbitSpeed?: number
  emissive?: string
  emissiveIntensity?: number
}

export default function Planet({
  position = [0, 0, 0],
  color = '#4488cc',
  size = 1.2,
  ringColor = '#66aaff',
  rotationSpeed = 0.1,
  emissive = '#224488',
  emissiveIntensity = 0.15,
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3
      ringRef.current.rotation.z += delta * rotationSpeed * 0.5
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = Math.PI / 3
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Atmospheric glow */}
      <mesh>
        <sphereGeometry args={[size * 1.3, 32, 32]} />
        <meshBasicMaterial
          color={emissive}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Planet body */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.7}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* Planet ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[size * 1.4, size * 2.3, 48]} />
        <meshStandardMaterial
          color={ringColor}
          side={THREE.DoubleSide}
          transparent
          opacity={0.3}
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>

      {/* Thin inner ring */}
      <mesh ref={glowRef}>
        <ringGeometry args={[size * 1.2, size * 1.3, 32]} />
        <meshBasicMaterial
          color={emissive}
          side={THREE.DoubleSide}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  )
}
