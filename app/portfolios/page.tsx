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
        <div className="py-20">
            <h1 className="text-4xl font-bold text-center mb-12">Our Portfolios</h1>
            <Portfolio />
        </div>
    )
}
