import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
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
                <nav className="hidden md:flex items-center gap-8">
                    {/* Home Link (Optional based on image, but keeping for UX unless image implies otherwise. Image doesn't show Home explicitly, but it's common. I'll add Portfolios, Packages, Combo Package) */}
                    <Link href="/" className="text-sm font-semibold text-foreground/70 hover:text-[#BB290E] transition-colors">Home</Link>

                    {/* Services Dropdown */}
                    <div className="relative group/dropdown py-4">
                        <button className="flex items-center gap-1 text-sm font-semibold text-foreground/70 group-hover/dropdown:text-[#BB290E] transition-colors">
                            Service
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/dropdown:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                        </button>

                        {/* Dropdown Menu - Narrow & Tall matching the image */}
                        <div className="absolute top-full left-0 w-72 bg-white border border-gray-100 shadow-2xl rounded-sm py-0 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 z-[100] overflow-hidden">
                            {[
                                { name: "Mobile App Design", href: "/services/mobile-app-design" },
                                { name: "Website", href: "/services/custom-web-development" },
                                { name: "Mobile App Development", href: "/services/mobile-app-development" },
                                { name: "Digital Marketing", href: "/services/digital-marketing" },
                                { name: "SEO Marketing", href: "/services/seo-optimization" },
                                { name: "PPC Marketing", href: "/services/ppc-marketing" },
                                { name: "SMM Marketing", href: "/services/smm-marketing" },
                                { name: "CRM", href: "/services/crm" },
                                { name: "LMS", href: "/services/lms" },
                                { name: "Content Writing", href: "/services/content-writing" },
                                { name: "Web Content", href: "/services/web-content" },
                                { name: "Amazon Automation", href: "/services/amazon-automation" },
                                { name: "Articles", href: "/services/articles" },
                                { name: "Blogs", href: "/services/blogs" }
                            ].map((item) => (
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
                    <Button asChild variant="default">
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
