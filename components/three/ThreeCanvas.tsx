'use client'

import { Canvas } from '@react-three/fiber'
import SceneContent from './SceneContent'

export default function ThreeCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      camera={{ position: [0, 1, 8], fov: 50 }}
    >
      <SceneContent />
    </Canvas>
  )
}
