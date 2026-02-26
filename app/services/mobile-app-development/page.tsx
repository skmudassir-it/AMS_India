import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Smartphone,
    Code2,
    Zap,
    ShieldCheck,
    Layers,
    Search,
    Rocket,
    CheckCircle2,
    Cpu,
    SmartphoneNfc,
    Globe2,
    CloudLightning,
    Workflow,
    Activity,
    Lock
} from "lucide-react"
import Link from "next/link"

export default function MobileAppDevPage() {
    const scopeItems = [
        { title: "iOS Development", desc: "Expert Swift and Objective-C development for Apple's entire ecosystem.", icon: Smartphone },
        { title: "Android Apps", desc: "High-performance Kotlin and Java applications for all Android devices.", icon: SmartphoneNfc },
        { title: "Cross-Platform", desc: "React Native and Flutter solutions that feel truly native on all platforms.", icon: Globe2 },
        { title: "App Maintenance", desc: "Ongoing support and performance optimization for existing mobile apps.", icon: Activity }
    ]

    const processSteps = [
        { step: "01", title: "Strategy", desc: "Defining the product vision and technical roadmap.", icon: Search },
        { step: "02", title: "Prototyping", desc: "Building interactive models to validate the user experience.", icon: Layers },
        { step: "03", title: "Development", desc: "Writing clean, scalable code in an agile environment.", icon: Code2 },
        { step: "04", title: "Security Audit", desc: "Hardening the application against potential vulnerabilities.", icon: Lock },
        { step: "05", title: "Store Launch", desc: "Navigating App Store and Google Play submissions successfully.", icon: Rocket }
    ]

    const mobileFeatures = [
        { title: "Native Performance", icon: Zap, desc: "Fast, responsive interfaces that leverage device hardware fully." },
        { title: "Cloud Integration", icon: CloudLightning, desc: "Real-time sync and robust backend connectivity for your data." },
        { title: "Biometric Auth", icon: ShieldCheck, desc: "Modern security with FaceID, TouchID, and fingerprint sensors." },
        { title: "Offline Sync", icon: Workflow, desc: "Ensuring deep engagement even without a network connection." }
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-xs font-black uppercase tracking-[0.2em]">
                            <Cpu className="h-4 w-4" /> Silicon Valley Standards
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter italic">
                            Mobile App <br />
                            <span className="text-indigo-600">Dev.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                            We build high-performance, scalable mobile applications that users love. Whether native or cross-platform, we deliver excellence.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-12 h-16 text-lg font-black italic shadow-2xl shadow-indigo-500/20" asChild>
                                <Link href="/contact">Code Your Idea</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full" />
                        <div className="relative aspect-square rounded-[4rem] border-8 border-white shadow-3xl overflow-hidden">
                            <img
                                src="/services/mobile-app-development.png"
                                alt="Mobile App Development"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do - Scope */}
            <section className="bg-slate-50 py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary italic mb-6">What We Do.</h2>
                        <p className="text-xl text-slate-600 font-medium">Building complex mobile solutions with ease and precision.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scopeItems.map((item, idx) => (
                            <Card key={idx} className="bg-white p-10 rounded-[3rem] border-none shadow-xl hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-500 mb-8">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Do - Process */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                    <h2 className="text-5xl md:text-6xl font-black text-primary italic">How We Do It.</h2>
                    <p className="text-xl text-slate-600">Our agile methodology ensures your app stays on track and on budget.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                        {processSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300 shadow-xl">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-center text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dev Highlights - Features */}
            <section className="bg-slate-900 py-24 md:py-32 rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white italic leading-none">
                                Premium <br />
                                <span className="text-indigo-500">App Features.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium">
                                We go beyond simple coding. We implement advanced features that provide real value to your users.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {mobileFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-indigo-500">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-4xl transform rotate-3">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center text-white/40">
                                        <SmartphoneNfc className="h-8 w-8" />
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-indigo-600 rounded-full w-3/4" />
                                        <div className="h-4 bg-white/10 rounded-full w-full" />
                                        <div className="h-4 bg-white/10 rounded-full w-5/6" />
                                    </div>
                                    <div className="pt-8">
                                        <div className="w-full h-16 bg-white rounded-3xl" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-24 mb-20">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-12 md:p-24 rounded-[4rem] text-center space-y-10 shadow-3xl relative overflow-hidden">
                    <Rocket className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5" />
                    <h2 className="text-4xl md:text-7xl font-black text-white italic leading-none">Bring your app to life.</h2>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-medium opacity-80">
                        Join the mobile revolution with a partner that understands both tech and business.
                    </p>
                    <div className="pt-6">
                        <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 rounded-full px-16 h-20 text-2xl font-black italic shadow-2xl" asChild>
                            <Link href="/contact">Launch Your App</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
