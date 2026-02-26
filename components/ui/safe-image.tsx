"use client"

import Image, { ImageProps } from "next/image"
import { useState, useEffect } from "react"

/**
 * A wrapper around next/image that falls back to a standard <img> tag
 * if the hostname is not configured in next.config.ts, preventing runtime crashes.
 */
export function SafeImage({ src, alt, ...props }: ImageProps) {
    const [useStandardImg, setUseStandardImg] = useState(false)

    // Trusted hosts that are configured in next.config.ts
    const trustedHosts = [
        '18.226.187.11',
        'huggingface.co',
        'cdn-thumbnails.huggingface.co',
        'images.unsplash.com'
    ]

    useEffect(() => {
        if (typeof src === 'string' && src.startsWith('http')) {
            try {
                const url = new URL(src)
                const isTrusted = trustedHosts.some(host => url.hostname === host)
                if (!isTrusted) {
                    setUseStandardImg(true)
                }
            } catch (e) {
                // If URL parsing fails, stick to Image and let it handle/error if needed
                console.error("Failed to parse image URL:", src)
            }
        }
    }, [src])

    if (useStandardImg && typeof src === 'string') {
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
