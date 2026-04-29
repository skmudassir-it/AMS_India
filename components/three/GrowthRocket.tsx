'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GrowthRocketProps {
  position?: [number, number, number]
  speed?: number
  height?: number
}

export default function GrowthRocket({ position = [0, 0, 0], speed = 0.15, height = 1.8 }: GrowthRocketProps) {
  const groupRef = useRef<THREE.Group>(null)
  const flameRef = useRef<THREE.Mesh>(null)
  const time = useRef(Math.random() * 100)

  // Pre-compute the flight path (a smooth upward helix)
  const pathPoints = useMemo(() => {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= 100; i++) {
      const t = i / 100
      const angle = t * Math.PI * 4
      const x = Math.sin(angle) * 1.8 * (1 - t * 0.7)
      const y = t * 6 - 0.5
      const z = Math.cos(angle) * 1.2 * (1 - t * 0.5)
      pts.push(new THREE.Vector3(x, y, z))
    }
    return pts
  }, [])

  // Create a CatmullRom curve for smooth motion
  const curve = useMemo(() => new THREE.CatmullRomCurve3(pathPoints), [pathPoints])

  useFrame((_, delta) => {
    if (!groupRef.current || !flameRef.current) return
    time.current += delta * speed

    // Wrap progress 0→1→0
    const t = (time.current % 2) / 2
    const progress = t < 0.5 ? t * 2 : 2 - t * 2

    const point = curve.getPoint(progress)
    const tangent = curve.getTangent(progress)

    groupRef.current.position.copy(point)
    // Look in direction of travel
    const lookTarget = new THREE.Vector3().copy(point).add(tangent)
    groupRef.current.lookAt(lookTarget)

    // Flame flicker
    flameRef.current.scale.x = 0.6 + Math.random() * 0.4
    flameRef.current.scale.z = 0.6 + Math.random() * 0.4
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Rocket Body - Main cylinder */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.28, height * 0.55, 16]} />
        <meshStandardMaterial
          color="#e0e0e0"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Rocket Nose Cone */}
      <mesh position={[0, height * 0.38, 0]}>
        <coneGeometry args={[0.2, height * 0.25, 16]} />
        <meshStandardMaterial
          color="#BB290E"
          metalness={0.5}
          roughness={0.3}
          emissive="#BB290E"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Window */}
      <mesh position={[0, height * 0.1, 0.22]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#88ccff" emissive="#4488ff" emissiveIntensity={0.3} />
      </mesh>

      {/* Left Fin */}
      <mesh position={[-0.28, -height * 0.15, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.08, height * 0.2, 0.04]} />
        <meshStandardMaterial color="#BB290E" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Right Fin */}
      <mesh position={[0.28, -height * 0.15, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.08, height * 0.2, 0.04]} />
        <meshStandardMaterial color="#BB290E" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Back Fin */}
      <mesh position={[0, -height * 0.15, -0.28]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.04, height * 0.2, 0.08]} />
        <meshStandardMaterial color="#BB290E" metalness={0.4} roughness={0.4} />
      </mesh>

      {/* Engine Flame */}
      <mesh ref={flameRef} position={[0, -height * 0.35, 0]}>
        <coneGeometry args={[0.1, 0.35, 8]} />
        <meshStandardMaterial
          color="#ff6600"
          emissive="#ff4400"
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner flame */}
      <mesh position={[0, -height * 0.38, 0]}>
        <coneGeometry args={[0.05, 0.25, 8]} />
        <meshStandardMaterial
          color="#ffdd00"
          emissive="#ffaa00"
          emissiveIntensity={2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Glow ring near flame */}
      <mesh position={[0, -height * 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.3, 16]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}
