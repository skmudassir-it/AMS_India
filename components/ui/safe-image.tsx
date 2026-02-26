"use client"

import Image, { ImageProps } from "next/image"
import { useState, useEffect } from "react"

/**
 * A wrapper around next/image that falls back to a standard <img> tag
 * if the hostname is not configured in next.config.ts, preventing runtime crashes.
 */
export function SafeImage({ src, alt, ...props }: ImageProps) {
    const [useStandardImg, setUseStandardImg] = useState(false)

    // Calculate trusted status synchronously to prevent first-render crashes
    const isTrusted = (() => {
        if (typeof src !== 'string' || !src.startsWith('http')) return true;
        try {
            const url = new URL(src);
            const trustedHosts = [
                '18.226.187.11',
                'images.unsplash.com'
            ];

            // Check explicit trusted hosts
            if (trustedHosts.some(host => url.hostname === host)) return true;

            // Regex for all huggingface.co subdomains
            if (/^(.+\.)?huggingface\.co$/.test(url.hostname)) return true;

            return false;
        } catch (e) {
            return true; // If parsing fails, let standard Image try (might be relative or blob)
        }
    })();

    if (!isTrusted && typeof src === 'string') {
        // Fallback to standard img for unconfigured hosts
        // We replicate some of the basic classes/styles Next.js Image would apply
        const { fill, className, ...rest } = props as any

        return (
            <img
                src={src}
                alt={alt as string}
                className={`${className} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
                {...rest}
            />
        )
    }

    return <Image src={src} alt={alt} {...props} />
}
