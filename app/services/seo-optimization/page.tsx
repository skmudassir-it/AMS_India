import { Button } from "@/components/ui/button"
import { Search, CheckCircle, BarChart, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function SEOPage() {
    const steps = [
        { title: "Technical Audit", desc: "We analyze your site structure, speed, and overall health." },
        { title: "Keyword Research", desc: "Finding the most impactful search terms for your industry." },
        { title: "On-Page SEO", desc: "Optimizing content, meta tags, and internal linking." },
        { title: "Off-Page Strategy", desc: "Building authority through high-quality backlinks." },
        { title: "Analytics & Reporting", desc: "Continuous monitoring and data-driven adjustments." }
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
                <div className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-sm font-semibold uppercase tracking-wider">
                    Rank Higher, Grow Faster
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                    SEO <span className="text-foreground">Optimization</span>
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Drive organic traffic, increase visibility, and dominate search results with our results-oriented SEO strategies.
                </p>
                <Button size="lg" asChild>
                    <Link href="/contact">Get My Free Audit</Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/20 space-y-4">
                    <BarChart className="h-10 w-10 text-primary" />
                    <h3 className="font-bold text-xl">Traffic Growth</h3>
                    <p className="text-sm text-foreground/60">Consistent increase in organic visitors month over month.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/20 space-y-4">
                    <Users className="h-10 w-10 text-primary" />
                    <h3 className="font-bold text-xl">Targeted Audience</h3>
                    <p className="text-sm text-foreground/60">Attract users who are actively searching for what you offer.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/20 space-y-4">
                    <Globe className="h-10 w-10 text-primary" />
                    <h3 className="font-bold text-xl">Global Reach</h3>
                    <p className="text-sm text-foreground/60">Expand your business presence beyond local boundaries.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-secondary/20 space-y-4">
                    <Search className="h-10 w-10 text-primary" />
                    <h3 className="font-bold text-xl">Higher ROI</h3>
                    <p className="text-sm text-foreground/60">SEO provides long-term value compared to paid advertising.</p>
                </div>
            </div>

            <div className="bg-secondary/10 rounded-3xl p-8 md:p-12 mb-20">
                <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Optimization Roadmap</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center space-y-4">
                            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                {idx + 1}
                            </div>
                            <h4 className="font-bold">{step.title}</h4>
                            <p className="text-xs text-foreground/60">{step.desc}</p>
                        </div>
                    ))}
                    <div className="absolute top-6 left-0 right-0 h-0.5 bg-primary/20 hidden md:block -z-1" />
                </div>
            </div>
        </div>
    )
}
