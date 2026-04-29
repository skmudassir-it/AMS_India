'use client'

import { Suspense, lazy } from 'react'

// Dynamic import with ssr:false so Three.js only loads on client
const ThreeCanvas = lazy(() => import('./ThreeCanvas'))

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full z-[1]">
      <Suspense fallback={null}>
        <ThreeCanvas />
      </Suspense>
    </div>
  )
}
