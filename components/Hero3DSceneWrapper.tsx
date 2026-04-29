'use client'

import dynamic from 'next/dynamic'

const Hero3DSceneInner = dynamic(() => import('@/components/three/Hero3DScene'), { ssr: false })

export default function Hero3DSceneWrapper() {
  return <Hero3DSceneInner />
}
