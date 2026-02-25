import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Zap, Heart, Shield } from "lucide-react"
import Link from "next/link"

interface ServicePageProps {
    title: string;
    description: string;
    highlights: string[];
}

export default function GenericServicePage({ title, description, highlights }: ServicePageProps) {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                <div className="flex-1 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                        Premium Service
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="bg-[#BB290E] hover:bg-[#96210b]" asChild>
                            <Link href="/contact">Get Started Now</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md aspect-square bg-secondary/20 rounded-3xl flex items-center justify-center p-10 relative overflow-hidden">
                        <Globe className="w-64 h-64 text-primary opacity-5 absolute -right-10 -bottom-10" />
                        <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Zap className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Fast Delivery</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md translate-y-4">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Heart className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">User Centric</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Shield className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Secure Implementation</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md translate-y-4">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Quality Assured</span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Key Benefits</h2>
                    <p className="text-foreground/70">
                        Our approach combines strategy, creativity, and technical excellence to deliver results that matter for your business.
                    </p>
                    <ul className="space-y-3">
                        {highlights?.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Card className="bg-[#BB290E] text-white p-8 flex flex-col justify-center gap-6">
                    <h3 className="text-2xl font-bold">Ready to Elevate Your Business?</h3>
                    <p className="opacity-80">
                        Connect with our experts today for a free consultation and discover how our {title} solutions can transform your operations.
                    </p>
                    <Button variant="secondary" className="w-fit bg-white text-[#BB290E] hover:bg-white/90" asChild>
                        <Link href="/contact">Book Free Consultation</Link>
                    </Button>
                </Card>
            </div>
        </div>
    )
}
