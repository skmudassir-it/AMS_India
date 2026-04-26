'use client';

import { useRef, useState } from 'react';

export default function HeroVideoBackground({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {/* Dark overlay while video loads */}
            {!loaded && (
                <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #050d1a 0%, #0c1a35 50%, #070f22 100%)' }} />
            )}
            <video
                ref={videoRef}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease' }}
            />
            {/* Dark overlay on top of video for text readability */}
            <div
                className="absolute inset-0 z-[1]"
                style={{ background: 'linear-gradient(135deg, rgba(5,13,26,0.75) 0%, rgba(12,26,53,0.65) 50%, rgba(7,15,34,0.75) 100%)' }}
            />
        </>
    );
}
