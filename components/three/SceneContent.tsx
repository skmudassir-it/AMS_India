'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import GrowthRocket from './GrowthRocket'
import ProductionRocket from './ProductionRocket'
import Planet from './Planet'
import StarField from './StarField'

export default function SceneContent() {
  const sunRef = useRef<THREE.Mesh>(null)
  const glowRingRef = useRef<THREE.Mesh>(null)
  const techOrbitalsRef = useRef<THREE.Group>(null)

  // Orbital tech cubes
  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.8 + Math.random() * 0.5
      return {
        angle,
        radius,
        size: 0.06 + Math.random() * 0.06,
        speed: 0.08 + Math.random() * 0.04,
        yOffset: (Math.random() - 0.5) * 0.5,
        color: i % 2 === 0 ? '#4488ff' : '#BB290E',
      }
    })
  }, [])

  useFrame(({ clock }) => {
    if (sunRef.current) {
      sunRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
      sunRef.current.rotation.y += 0.003
    }
    if (glowRingRef.current) {
      glowRingRef.current.rotation.z = clock.getElapsedTime() * 0.02
    }
    if (techOrbitalsRef.current) {
      techOrbitalsRef.current.children.forEach((child, i) => {
        if (i < cubes.length) {
          const cube = cubes[i]
          const t = clock.getElapsedTime() * cube.speed + cube.angle
          child.position.x = Math.cos(t) * cube.radius
          child.position.z = Math.sin(t) * cube.radius
          child.position.y = cube.yOffset + Math.sin(t * 2) * 0.3
          child.rotation.x += 0.02
          child.rotation.y += 0.03
        }
      })
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-3, -2, -3]} intensity={0.4} color="#4488ff" />
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#ff6622" />
      <pointLight position={[-4, 1, -2]} intensity={0.3} color="#4488ff" />

      {/* Background glow from below */}
      <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#050d1a" />
      </mesh>

      {/* Star field */}
      <StarField />

      {/* Central glowing sun/energy sphere */}
      <mesh ref={sunRef} position={[-3.5, 1.5, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#ff6622"
          emissive="#ff4400"
          emissiveIntensity={0.6}
          metalness={0.1}
          roughness={0.3}
        />
      </mesh>

      {/* Sun glow */}
      <mesh position={[-3.5, 1.5, -2]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#ff4400" transparent opacity={0.08} />
      </mesh>

      {/* Outer glow ring */}
      <mesh ref={glowRingRef} position={[-3.5, 1.5, -2]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2.5, 48]} />
        <meshBasicMaterial color="#ff6622" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>

      {/* Main Planet - central, large */}
      <Planet
        position={[3.5, 0.5, -3]}
        color="#4488cc"
        ringColor="#66aaff"
        size={1.3}
        emissive="#224488"
        emissiveIntensity={0.15}
        rotationSpeed={0.08}
      />

      {/* Small planet - far */}
      <Planet
        position={[-2, -1.5, -6]}
        color="#aa66cc"
        ringColor="#cc88ee"
        size={0.7}
        emissive="#6622aa"
        emissiveIntensity={0.1}
        rotationSpeed={0.15}
      />

      {/* Small planet - top right */}
      <Planet
        position={[5, 3, -4]}
        color="#44cc88"
        ringColor="#66eebb"
        size={0.5}
        emissive="#228866"
        emissiveIntensity={0.1}
        rotationSpeed={0.2}
      />

      {/* Orbiting tech cubes */}
      <group ref={techOrbitalsRef}>
        {cubes.map((cube, i) => (
          <mesh key={i}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.2}
              metalness={0.6}
              roughness={0.3}
              transparent
              opacity={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Floating torus knot - tech accent */}
      <mesh position={[0.5, 1.8, -2]} rotation={[0.5, 0.3, 0]}>
        <torusKnotGeometry args={[0.35, 0.12, 64, 8]} />
        <meshStandardMaterial
          color="#4488ff"
          emissive="#4488ff"
          emissiveIntensity={0.1}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Growth Rocket - flies upward */}
      <GrowthRocket speed={0.12} height={1.5} />

      {/* Production Rocket - orbits */}
      <ProductionRocket />

      {/* Camera is configured on Canvas */}
    </>
  )
}
