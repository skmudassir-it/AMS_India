import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Cpu,
    Settings,
    Zap,
    Activity,
    Workflow,
    Database,
    Rocket,
    CheckCircle2,
    Search,
    ShieldCheck,
    Terminal,
    Repeat,
    ArrowRightLeft,
    Clock
} from "lucide-react"
import Link from "next/link"

export default function BackendAutomationPage() {
    const scopeItems = [
        { title: "Workflow Automation", desc: "Automating repetitive business processes and eliminating manual bottlenecks.", icon: Repeat },
        { title: "Data Pipelines", desc: "Streamlining data flow between your CRM, DB, and external marketing APIs.", icon: ArrowRightLeft },
        { title: "CI/CD Setup", desc: "Automating your deployment cycles for faster and safer feature releases.", icon: Terminal },
        { title: "System Monitoring", desc: "Self-healing backends that detect issues and rectify them automatically.", icon: Activity }
    ]

    const processSteps = [
        { step: "01", title: "Trace", desc: "Mapping out your manual workflows to identify automation targets.", icon: Search },
        { step: "02", title: "Design", desc: "Crafting logic triggers and API integration blueprints.", icon: Workflow },
        { step: "03", title: "Execute", desc: "Building resilient scripts and microservices in Node.js or Python.", icon: Cpu },
        { step: "04", title: "Testing", desc: "Simulating edge cases to ensure the automation is bulletproof.", icon: ShieldCheck },
        { step: "05", title: "Deploy", desc: "Launching the automated system with real-time alerting enabled.", icon: Rocket }
    ]

    const automationFeatures = [
        { title: "Zero Error Rate", icon: Zap, desc: "Removing human error from data entry and systematic tasks." },
        { title: "Time Savings", icon: Clock, desc: "Freeing up your team to focus on high-level strategic growth." },
        { title: "Highly Scalable", icon: CheckCircle2, desc: "Backend logic that handles 10x lead volume without breaking." },
        { title: "Secure Links", icon: ShieldCheck, desc: "Encrypted data bridges between all your disparate software tools." }
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-600 text-xs font-black uppercase tracking-[0.2em]">
                            <Cpu className="h-4 w-4" /> Operations Reimagined
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter italic">
                            Backend <br />
                            <span className="text-slate-600">Automation.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                            Stop doing the heavy lifting. We build intelligent backend systems that automate your operations, reducing costs and accelerating growth.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 rounded-full px-12 h-16 text-lg font-black italic shadow-2xl shadow-slate-500/20 text-white" asChild>
                                <Link href="/contact">Automate My Business</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-slate-500/20 to-indigo-500/20 blur-[100px] rounded-full" />
                        <div className="relative aspect-square bg-slate-50 rounded-[4rem] border-8 border-white shadow-3xl overflow-hidden p-12">
                            <div className="grid grid-cols-2 gap-6 h-full">
                                <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center gap-4 transform rotate-3">
                                    <Settings className="h-12 w-12 text-slate-600 animate-spin-slow" />
                                    <div className="h-2 bg-slate-100 rounded-full w-full" />
                                    <div className="h-2 bg-slate-100 rounded-full w-2/3" />
                                </div>
                                <div className="bg-slate-900 rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center gap-4 transform -rotate-3 translate-y-8">
                                    <Database className="h-12 w-12 text-white" />
                                    <div className="h-2 bg-white/20 rounded-full w-full" />
                                    <div className="h-2 bg-white/20 rounded-full w-2/3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do - Scope */}
            <section className="bg-slate-50 py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-primary italic mb-6">What We Do.</h2>
                        <p className="text-xl text-slate-600 font-medium">Building the invisible engine that drives your business forward.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scopeItems.map((item, idx) => (
                            <Card key={idx} className="bg-white p-10 rounded-[3rem] border-none shadow-xl hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 mb-8">
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
                    <p className="text-xl text-slate-600">A rigorous approach to identifying, building, and deploying workflow logic.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                        {processSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 shadow-xl">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-center text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Highlights - Features */}
            <section className="bg-slate-900 py-24 md:py-32 rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white italic leading-none">
                                Pure <br />
                                <span className="text-slate-500">Efficiency.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium">
                                We utilize modern microservices and stable API bridges to ensure your automation never fails when you need it most.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {automationFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-500">
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
                                        <Repeat className="h-8 w-8" />
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-slate-600 rounded-full w-3/4" />
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
                <div className="bg-gradient-to-br from-slate-600 to-slate-900 p-12 md:p-24 rounded-[4rem] text-center space-y-10 shadow-3xl relative overflow-hidden">
                    <Rocket className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5" />
                    <h2 className="text-4xl md:text-7xl font-black text-white italic leading-none">Ready to automate?</h2>
                    <p className="text-xl text-slate-100 max-w-2xl mx-auto font-medium opacity-80">
                        Let's build a smart backend that handles the grunt work while you focus on scaling your vision.
                    </p>
                    <div className="pt-6">
                        <Button variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-50 rounded-full px-16 h-20 text-2xl font-black italic shadow-2xl" asChild>
                            <Link href="/contact">Get started now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
