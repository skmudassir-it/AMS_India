import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Server, Code, CheckCircle, Cpu, Shield, BarChart, FileJson, Database, RefreshCw, Smartphone, Search, Cloud } from "lucide-react"
import Link from "next/link"

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
            items: ["SEO Optimization", "Content Strategy", "Blog & Articles", "Digital Marketing"],
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

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
                <p className="text-lg text-foreground/70">
                    We provide a wide range of specialized IT services to help businesses navigate the digital landscape with confidence and efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service, idx) => (
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
