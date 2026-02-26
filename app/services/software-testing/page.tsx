import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ShieldCheck,
    CheckSquare,
    Zap,
    Target,
    FileText,
    Rocket,
    CheckCircle2,
    Search,
    Workflow,
    Activity,
    Bug,
    Shield,
    FlaskConical,
    BarChart
} from "lucide-react"
import Link from "next/link"

export default function TestingPage() {
    const scopeItems = [
        { title: "Manual QA", desc: "Meticulous human testing to ensure your app feels and works perfectly.", icon: FileText },
        { title: "Test Automation", desc: "Building robust Selenium or Cypress suites for consistent regressions.", icon: Zap },
        { title: "Performance Testing", icon: Target, desc: "Load and stress testing to ensure stability during peak traffic." },
        { title: "Security Audits", icon: Shield, desc: "Scanning for vulnerabilities and ensuring data compliance standards." }
    ]

    const processSteps = [
        { step: "01", title: "Plan", desc: "Defining test cases and acceptance criteria based on requirements.", icon: Search },
        { step: "02", title: "Setup", desc: "Configuring test environments and automation frameworks.", icon: Workflow },
        { step: "03", title: "Execute", desc: "Running rigorous test cycles across devices and browsers.", icon: Activity },
        { step: "04", title: "Reporting", desc: "Detailed bug tracking and re-testing of fixed issues.", icon: Bug },
        { step: "05", title: "Certify", desc: "Providing a quality certification for your final product.", icon: Rocket }
    ]

    const qualityFeatures = [
        { title: "Zero Bug Policy", icon: Bug, desc: "We don't rest until we eliminate every blocking and visual bug." },
        { title: "Cross-Device", icon: FlaskConical, desc: "Testing on real devices ensures your app works for everyone." },
        { title: "Detailed Logs", icon: BarChart, desc: "Transparent reporting with screenshots and video evidence." },
        { title: "Speed Focused", icon: Zap, desc: "Optimizing code and assets to ensure lightning-fast load times." }
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-black uppercase tracking-[0.2em]">
                            <ShieldCheck className="h-4 w-4" /> Quality Assurance
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter italic">
                            Software <br />
                            <span className="text-rose-600">Testing.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                            Don&apos;t leave it to chance. We ensure your software is bug-free, secure, and performs flawlessly under any conditions.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 rounded-full px-12 h-16 text-lg font-black italic shadow-2xl shadow-rose-500/20" asChild>
                                <Link href="/contact">Guarantee Quality</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-rose-500/20 to-red-500/20 blur-[100px] rounded-full" />
                        <div className="relative aspect-square rounded-[4rem] border-8 border-white shadow-3xl overflow-hidden">
                            <img
                                src="/services/software-testing.png"
                                alt="Software Testing"
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
                        <p className="text-xl text-slate-600 font-medium">Providing comprehensive QA services across all platforms.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scopeItems.map((item, idx) => (
                            <Card key={idx} className="bg-white p-10 rounded-[3rem] border-none shadow-xl hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-rose-500 mb-8">
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
                    <p className="text-xl text-slate-600">A rigorous, multi-stage testing process that leaves no stone unturned.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                        {processSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all duration-300 shadow-xl">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-center text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Highlights - Features */}
            <section className="bg-slate-900 py-24 md:py-32 rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white italic leading-none">
                                Flawless <br />
                                <span className="text-rose-500">Delivery.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium">
                                We utilize modern testing suites and creative QA talent to ensure your product is truly ready for high-volume traffic.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {qualityFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-rose-500">
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
                                        <CheckSquare className="h-8 w-8" />
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-rose-600 rounded-full w-3/4" />
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
                <div className="bg-gradient-to-br from-rose-600 to-rose-800 p-12 md:p-24 rounded-[4rem] text-center space-y-10 shadow-3xl relative overflow-hidden">
                    <Rocket className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5" />
                    <h2 className="text-4xl md:text-7xl font-black text-white italic leading-none">Ready for zero bugs?</h2>
                    <p className="text-xl text-rose-100 max-w-2xl mx-auto font-medium opacity-80">
                        Let's secure your product's reputation with meticulous software testing and quality assurance services.
                    </p>
                    <div className="pt-6">
                        <Button variant="secondary" size="lg" className="bg-white text-rose-600 hover:bg-slate-50 rounded-full px-16 h-20 text-2xl font-black italic shadow-2xl" asChild>
                            <Link href="/contact">Get started now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
