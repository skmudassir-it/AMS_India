"use client"

import Image, { ImageProps } from "next/image"
import { useState, useEffect } from "react"

/**
 * A wrapper around next/image that falls back to a standard <img> tag
 * if the hostname is not configured in next.config.ts, preventing runtime crashes.
 */
export function SafeImage({ src, alt, ...props }: ImageProps) {
    // Only use Next.js Image for local images and our trusted file server
    const isNextImageAllowed = (() => {
        if (typeof src !== 'string') return true; // Static imports
        if (!src.startsWith('http')) return true; // Relative paths

        try {
            const url = new URL(src);
            // ONLY trust our own local server for Next.js optimization
            // Everything else uses standard <img> to avoid constant config issues
            return url.hostname === '18.226.187.11';
        } catch (e) {
            return true;
        }
    })();

    if (!isNextImageAllowed && typeof src === 'string') {
        const { fill, className, ...rest } = props as any

        return (
            <img
                src={src}
                alt={alt as string}
                className={`${className || ''} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
                {...rest}
            />
        )
    }

    return <Image src={src} alt={alt} {...props} />
}
