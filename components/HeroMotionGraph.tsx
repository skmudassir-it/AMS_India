'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    pulse: number;
    pulseSpeed: number;
}

export default function HeroMotionGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        const particles: Particle[] = [];
        const PARTICLE_COUNT = 70;
        const MAX_DISTANCE = 130;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += p.pulseSpeed;

                if (p.x < 0) { p.x = canvas.width; }
                if (p.x > canvas.width) { p.x = 0; }
                if (p.y < 0) { p.y = canvas.height; }
                if (p.y > canvas.height) { p.y = 0; }

                const glowAlpha = 0.3 + 0.2 * Math.sin(p.pulse);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(96, 165, 250, ${glowAlpha})`;
                ctx.fill();

                // Outer glow ring on some nodes
                if (p.radius > 2) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius + 2, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${glowAlpha * 0.4})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DISTANCE) {
                        const alpha = (1 - dist / MAX_DISTANCE) * 0.25;
                        const gradient = ctx.createLinearGradient(
                            particles[i].x, particles[i].y,
                            particles[j].x, particles[j].y
                        );
                        gradient.addColorStop(0, `rgba(96, 165, 250, ${alpha})`);
                        gradient.addColorStop(0.5, `rgba(187, 41, 14, ${alpha * 0.5})`);
                        gradient.addColorStop(1, `rgba(96, 165, 250, ${alpha})`);

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60"
            aria-hidden="true"
        />
    );
}
