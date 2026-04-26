import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Server, Code, CheckCircle, Cpu, Shield, BarChart, FileJson, Database, RefreshCw, Smartphone, Search, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "IT Services | Web, Mobile, SEO & Cloud Solutions",
    description: "Full-cycle IT services: custom web development, mobile apps, e-commerce, SEO, digital marketing, AWS cloud, CRM, and backend automation. Based in India & USA.",
    keywords: ["IT services", "web development services", "mobile app services", "SEO services", "cloud services India", "e-commerce development", "digital marketing agency"],
    alternates: { canonical: "https://amsitservices.com/services" },
    openGraph: {
        title: "AMS IT Services | Complete IT Solutions",
        description: "From web development to cloud infrastructure — explore all services offered by AMS IT Services.",
        url: "https://amsitservices.com/services",
        images: [{ url: "/services/og-web-development.jpg", width: 1200, height: 630, alt: "AMS IT Services" }],
    },
    twitter: { card: "summary_large_image", images: ["/services/og-web-development.jpg"] },
}

export default function ServicesPage() {
    const allServices = [
        {
            category: "Web Development",
            description: "Modern, responsive, and high-performing websites tailored to your brand.",
            items: ["Shopify Development", "WordPress Development", "Laravel Solutions", "PHP Custom Work", "WooCommerce Experts"],
            icon: Code,
            href: "/services/custom-web-development"
        },
        {
            category: "Mobile Solutions",
            description: "End-to-end mobile app design and development for iOS and Android.",
            items: ["Mobile App Design", "iOS Development", "Android Development", "Cross-platform Apps"],
            icon: Smartphone,
            href: "/services/mobile-app-development"
        },
        {
            category: "Optimization & Content",
            description: "Increase visibility and engage your audience with expert marketing and content.",
            items: ["SEO Optimization", "Content Strategy", "Blog Posts & Articles", "Digital Marketing"],
            icon: Search,
            href: "/services/seo-optimization"
        },
        {
            category: "Backend & Infra",
            description: "Scalable infrastructure and automated workflows for seamless operations.",
            items: ["Backend Automation", "Custom Database Solutions", "API Development", "AWS Cloud Integration"],
            icon: Server,
            href: "/services/backend-automation"
        },
        {
            category: "DevOps & Quality",
            description: "Ensuring stability, security, and continuous delivery for your software.",
            items: ["Software Testing", "CI/CD Management", "Quality Assurance", "Security Audits"],
            icon: Shield,
            href: "/services/software-testing"
        },
        {
            category: "Architecture",
            description: "Complex system design and integration for enterprise-level applications.",
            items: ["System Architecture", "Microservices", "Cloud Migration", "Performance Tuning"],
            icon: Cpu,
            href: "/services/web-app-development"
        }
    ]

    const firstHalf = allServices.slice(0, 3)
    const secondHalf = allServices.slice(3)

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
                <p className="text-lg text-foreground/70">
                    We provide a wide range of specialized IT services to help businesses navigate the digital landscape with confidence and efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {firstHalf.map((service, idx) => (
                    <Link key={idx} href={service.href}>
                        <Card className="group hover:border-primary transition-colors h-full cursor-pointer">
                            <CardHeader>
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">{service.category}</CardTitle>
                                <p className="text-sm text-foreground/60">{service.description}</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Mid-page feature banner */}
            <div className="my-16 rounded-3xl overflow-hidden relative">
                <Image
                    src="/about-feature.jpg"
                    alt="AMS IT Services — end-to-end digital solutions"
                    width={1400}
                    height={500}
                    className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center px-10 md:px-20">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">End-to-End Digital Solutions</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl">
                        Everything Your Business Needs to Grow Online
                    </h2>
                    <p className="mt-4 text-white/80 max-w-lg text-base md:text-lg">
                        From building your first website to scaling enterprise infrastructure — our team delivers results that move the needle.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full w-fit hover:bg-primary/90 transition-colors"
                    >
                        Start a Project
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {secondHalf.map((service, idx) => (
                    <Link key={idx} href={service.href}>
                        <Card className="group hover:border-primary transition-colors h-full cursor-pointer">
                            <CardHeader>
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-2xl">{service.category}</CardTitle>
                                <p className="text-sm text-foreground/60">{service.description}</p>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
