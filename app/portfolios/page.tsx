import type { Metadata } from "next"
import { Portfolio } from "@/components/Portfolio"

export const metadata: Metadata = {
    title: "Portfolio | Web & Mobile Projects",
    description: "Browse AMS IT Services' portfolio of 185+ custom websites, mobile apps, and e-commerce stores built for clients worldwide.",
    keywords: ["web development portfolio", "IT services portfolio", "website designs", "mobile app projects", "e-commerce builds"],
    alternates: { canonical: "https://amsitservices.com/portfolios" },
    openGraph: {
        title: "Our Portfolio | AMS IT Services",
        description: "Explore 185+ professional websites, mobile apps, and digital projects delivered by AMS IT Services.",
        url: "https://amsitservices.com/portfolios",
        images: [{ url: "/portfolio-og.jpg", width: 1200, height: 630, alt: "AMS IT Services Portfolio" }],
    },
    twitter: { card: "summary_large_image", images: ["/portfolio-og.jpg"] },
}

export default function PortfoliosPage() {
    return (
        <div>
            {/* Hero */}
            <section className="relative text-white py-24 px-4 overflow-hidden min-h-[300px] flex items-center">
                <div className="absolute inset-0">
                    <img src="/portfolio-og.jpg" alt="AMS IT Services Portfolio" className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,13,26,0.82) 0%, rgba(12,26,53,0.72) 50%, rgba(7,15,34,0.82) 100%)' }} />
                </div>
                <div className="container mx-auto relative z-10 text-center space-y-4">
                    <div className="inline-block px-5 py-2 text-xs font-bold tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-2">
                        185+ Projects Delivered
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Portfolio</h1>
                    <p className="text-xl text-white/75 max-w-2xl mx-auto">
                        Websites, mobile apps, and e-commerce stores built for clients across the globe.
                    </p>
                </div>
            </section>

            <div className="py-16">
                <Portfolio />
            </div>
        </div>
    )
}
