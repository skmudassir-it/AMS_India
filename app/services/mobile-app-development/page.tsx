import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, CheckCircle, Code, Layers, Shield } from "lucide-react"
import Link from "next/link"

export default function MobileAppDevPage() {
    const highlights = [
        "Native iOS & Android Development",
        "Cross-platform Solutions (React Native, Flutter)",
        "UI/UX Design for Mobile",
        "App Store Optimization (ASO)",
        "Mobile App Maintenance & Support"
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                <div className="flex-1 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                        Our Expertise
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                        Mobile App <span className="text-foreground">Development</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        We build high-performance, scalable, and secure mobile applications that provide seamless user experiences across all devices and platforms.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md aspect-square bg-secondary/20 rounded-3xl flex items-center justify-center p-10 relative">
                        <Smartphone className="w-40 h-40 text-primary opacity-20 absolute" />
                        <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Code className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Modern Tech</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md translate-y-4">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Layers className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Seamless UX</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <Shield className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Secure Core</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/80 backdrop-blur border-none shadow-md translate-y-4">
                                <CardContent className="p-4 flex flex-col items-center gap-2">
                                    <CheckCircle className="h-6 w-6 text-primary" />
                                    <span className="text-xs font-bold text-center">Verified Quality</span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Why Choose Us for Mobile?</h2>
                    <p className="text-foreground/70">
                        Our mobile team combines deep technical expertise with a user-centric design approach to deliver apps that users love and businesses rely on.
                    </p>
                    <ul className="space-y-3">
                        {highlights.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Card className="bg-primary text-primary-foreground p-8 flex flex-col justify-center gap-6">
                    <h3 className="text-2xl font-bold">Interested in a Free Consultation?</h3>
                    <p className="opacity-80">
                        Speak with our app experts about your vision, technical requirements, and how we can bring your idea to life.
                    </p>
                    <Button variant="secondary" className="w-fit bg-white text-primary hover:bg-white/90" asChild>
                        <Link href="/contact">Book a Meeting</Link>
                    </Button>
                </Card>
            </div>
        </div>
    )
}
