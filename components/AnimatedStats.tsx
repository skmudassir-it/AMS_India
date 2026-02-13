'use client';

import React, { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * value);

            if (currentCount !== countRef.current) {
                setCount(currentCount);
                countRef.current = currentCount;
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [value, duration, isVisible]);

    return <span ref={elementRef}>{count}</span>;
};

const stats = [
    { label: 'Websites developed', value: 185, suffix: '+' },
    { label: 'Logo design', value: 850, suffix: '+' },
    { label: 'Mobile application developed', value: 21, suffix: '+' },
    { label: 'Ecommerce website developed', value: 235, suffix: '+' },
];

const AnimatedStats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl mx-auto px-4 py-12">
            {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                    <div className="text-5xl md:text-6xl font-extrabold text-[#BB290E] mb-2 tabular-nums">
                        <AnimatedNumber value={stat.value} />
                        {stat.suffix}
                    </div>
                    <p className="text-sm md:text-base font-bold text-foreground/80 leading-snug uppercase tracking-tight">
                        {stat.label.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word}
                                {i % 2 === 1 ? <br /> : ' '}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AnimatedStats;
