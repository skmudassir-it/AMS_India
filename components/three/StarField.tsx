'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function StarField() {
  const ref = useRef<THREE.Points>(null)
  const count = 2000

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const dist = 20 + Math.random() * 60
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = dist * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = dist * Math.cos(phi) * (Math.random() * 0.4 + 0.3)
      pos[i * 3 + 2] = dist * Math.sin(phi) * Math.sin(theta)

      siz[i] = 0.5 + Math.random() * 2

      const brightness = 0.3 + Math.random() * 0.7
      const tint = Math.random()
      if (tint < 0.1) {
        col[i * 3] = brightness * 0.6
        col[i * 3 + 1] = brightness * 0.7
        col[i * 3 + 2] = brightness
      } else if (tint < 0.2) {
        col[i * 3] = brightness
        col[i * 3 + 1] = brightness * 0.7
        col[i * 3 + 2] = brightness * 0.4
      } else {
        col[i * 3] = brightness
        col[i * 3 + 1] = brightness
        col[i * 3 + 2] = brightness
      }
    }

    return { positions: pos, colors: col, sizes: siz }
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const mat = ref.current.material as THREE.PointsMaterial
    mat.opacity = 0.7 + Math.sin(clock.getElapsedTime() * 0.3) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.8}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
