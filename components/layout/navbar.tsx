"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const services = [
        { name: "Mobile App Design", href: "/services/mobile-app-design" },
        { name: "Website", href: "/services/custom-web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "SEO Marketing", href: "/services/seo-optimization" },
        { name: "CRM", href: "/services/crm" },
        { name: "Content Writing", href: "/services/content-writing" },
        { name: "Web Content", href: "/services/web-content" },
        { name: "Articles", href: "/services/articles" },
        { name: "Blog Posts", href: "/services/blog-posts" }
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.jpg"
                        alt="AMS IT Services"
                        width={40}
                        height={40}
                        className="rounded-md"
                    />
                    <span className="text-xl font-bold text-primary">AMS IT Services</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-semibold text-foreground/70 hover:text-[#BB290E] transition-colors">Home</Link>

                    <div className="relative group/dropdown py-4">
                        <button className="flex items-center gap-1 text-sm font-semibold text-foreground/70 group-hover/dropdown:text-[#BB290E] transition-colors">
                            Service
                            <ChevronDown className="h-4 w-4 transition-transform group-hover/dropdown:rotate-180" />
                        </button>

                        <div className="absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-2xl rounded-sm py-0 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 z-[100] overflow-hidden">
                            {services.map((item) => (
                                <Link
                                    key={item.href + item.name}
                                    href={item.href}
                                    className="block px-6 py-3.5 text-[15px] font-semibold text-gray-800 hover:bg-[#BB290E]/5 hover:text-[#BB290E] transition-all border-b border-gray-50 last:border-0"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/portfolios" className="text-sm font-semibold text-foreground/70 hover:text-[#BB290E] transition-colors">Portfolios</Link>
                    <Link href="/blog" className="text-sm font-semibold text-foreground/70 hover:text-[#BB290E] transition-colors underline decoration-[#BB290E]/30 underline-offset-4">Blog</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button asChild variant="default">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground/70 hover:text-[#BB290E]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background/95 backdrop-blur py-4 animate-in slide-in-from-top-2 duration-300">
                    <nav className="container flex flex-col gap-1">
                        <Link
                            href="/"
                            className="px-4 py-3 text-sm font-bold text-foreground/70 hover:text-[#BB290E] transition-colors hover:bg-[#BB290E]/5 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <div>
                            <button
                                className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-foreground/70 hover:text-[#BB290E] transition-colors hover:bg-[#BB290E]/5 rounded-md"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isServicesOpen && (
                                <div className="pl-6 bg-accent/5 border-l-2 border-primary/20 ml-6 my-1">
                                    {services.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm font-semibold text-foreground/60 hover:text-[#BB290E] transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolios"
                            className="px-4 py-3 text-sm font-bold text-foreground/70 hover:text-[#BB290E] transition-colors hover:bg-[#BB290E]/5 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portfolios
                        </Link>
                        <Link
                            href="/blog"
                            className="px-4 py-3 text-sm font-bold text-foreground/70 hover:text-[#BB290E] transition-colors hover:bg-[#BB290E]/5 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <div className="px-4 py-4 border-t mt-4">
                            <Button asChild variant="default" className="w-full">
                                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
