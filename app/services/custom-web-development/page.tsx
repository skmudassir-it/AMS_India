import { Button } from "@/components/ui/button"
import { Code2, CheckCircle, Smartphone, Globe, Layers } from "lucide-react"
import Link from "next/link"

export default function CustomWebDevPage() {
    const benefits = [
        "Fully tailored to your business needs",
        "High-performance and clean codebase",
        "Scalable architecture for future growth",
        "Modern UI/UX focused on conversions",
        "Seamless integration with third-party tools"
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                            Tailor-made Digital Solutions
                        </div>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-primary tracking-tight">
                            Custom Web <span className="text-foreground">Development</span>
                        </h1>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            We don't do generic templates. We build bespoke web experiences that reflect your brand identity and drive measurable business results.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">Discuss Your Vision</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-accent/40 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-4">
                            <Code2 className="h-10 w-10 text-primary" />
                            <span className="font-bold text-sm">Full-Stack Experts</span>
                        </div>
                        <div className="bg-secondary/40 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-4 translate-y-8">
                            <Globe className="h-10 w-10 text-primary" />
                            <span className="font-bold text-sm">SEO Friendly</span>
                        </div>
                        <div className="bg-secondary/40 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-4">
                            <Smartphone className="h-10 w-10 text-primary" />
                            <span className="font-bold text-sm">Responsive Design</span>
                        </div>
                        <div className="bg-accent/40 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-4 translate-y-8">
                            <Layers className="h-10 w-10 text-primary" />
                            <span className="font-bold text-sm">Modern Stack</span>
                        </div>
                    </div>
                </div>

                <div className="py-20 border-t border-secondary/20">
                    <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Custom Solution Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-lg font-medium text-foreground/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-accent/30 rounded-[3rem] p-10 md:p-20 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">Your Dream Website Starts Here</h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a complex landing page or a full-scale corporate portal, our team has the expertise to deliver it.
                    </p>
                    <Button variant="default" size="lg" className="h-14 px-10 rounded-full" asChild>
                        <Link href="/contact">Get a Custom Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
