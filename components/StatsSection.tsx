'use client';

import React from 'react';
import Image from 'next/image';

const logos = [
    { name: 'Wordpress', src: '/logos/wordpress.svg' },
    { name: 'Amazon', src: '/logos/amazon.svg' },
    { name: 'GoDaddy', src: '/logos/godaddy.svg' },
    { name: 'Shopify', src: '/logos/shopify.svg' },
    { name: 'Squarespace', src: '/logos/squarespace.svg' },
    { name: 'Wix', src: '/logos/wix.svg' },
    { name: 'Hostinger', src: '/logos/hostinger.svg' },
    { name: 'n8n', src: '/logos/n8n.svg' },
    { name: 'AWS', src: '/logos/aws.svg' },
    { name: 'Docker', src: '/logos/docker.svg' },
    { name: 'JavaScript', src: '/logos/javascript.svg' },
    { name: 'Google DeepMind', src: '/logos/google-deepmind.svg' },
];

const stats = [
    { label: 'Website Developed', value: '987+' },
    { label: 'Logo Design', value: '3487+' },
    { label: 'Mobile Application Developed', value: '74+' },
    { label: 'Ecommerce Website Developed', value: '878+' },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Logo Marquee */}
                <div className="relative mb-16">
                    <div className="flex overflow-hidden group">
                        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="mx-8 w-32 h-12 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>

                {/* Trust Bar */}
                <div className="text-center mb-20">
                    <p className="text-lg text-gray-700 font-medium">
                        We rated <span className="font-bold underline decoration-primary decoration-2">4.7 out of 5</span>{' '}
                        <span className="text-yellow-400">★★★★★</span>{' '}
                        served <span className="font-bold">1200+</span> satisfied customers.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-5xl md:text-6xl font-bold text-[#b42106] mb-3 transition-transform duration-300 group-hover:scale-110">
                                {stat.value}
                            </div>
                            <p className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                                {stat.label.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {word}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default StatsSection;
