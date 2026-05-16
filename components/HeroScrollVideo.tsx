'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-driven hero video — maps scroll position to video playback.
 * As the user scrolls down the hero section, the video plays forward.
 * Scrolling back up reverses the video. Cinematic sites effect.
 */
export default function HeroScrollVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameCache = useRef<number | null>(null);
  const isSafari = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Detect Safari — needs different approach (use requestAnimationFrame)
    isSafari.current = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Wait for video metadata to load
    const handleLoaded = () => {
      // Seek to first frame and pause — we control playback via scroll
      video.currentTime = 0;
      video.pause();
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    if (video.readyState >= 1) handleLoaded();

    const handleScroll = () => {
      if (!video || video.readyState < 1) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far through the hero we've scrolled (0 to 1)
      // 0 = hero fully in view, 1 = hero fully scrolled past
      const scrollStart = 0; // start when hero top hits viewport top
      const scrollEnd = sectionHeight; // end when hero bottom hits viewport top

      let progress = (-sectionTop) / (scrollEnd - viewportHeight);
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to video time
      const targetTime = progress * video.duration;

      // Debounce — only update if time changed significantly
      if (frameCache.current === null || Math.abs(targetTime - frameCache.current) > 0.05) {
        frameCache.current = targetTime;
        video.currentTime = targetTime;
      }
    };

    // For Safari, use requestAnimationFrame for smoother scrubbing
    let rafId: number;
    const safariScroll = () => {
      handleScroll();
      rafId = requestAnimationFrame(safariScroll);
    };

    if (isSafari.current) {
      rafId = requestAnimationFrame(safariScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Initial call
    handleScroll();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      window.removeEventListener('scroll', handleScroll);
      if (isSafari.current) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 overflow-hidden"
      style={{ height: '200vh' }} // Extra height so user can scroll through
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(5,13,26,0.7) 0%, rgba(12,26,53,0.55) 50%, rgba(7,15,34,0.7) 100%)',
          }}
        />
      </div>
    </div>
  );
}
