import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    PenTool,
    Type,
    FileText,
    Sparkles,
    Zap,
    Rocket,
    CheckCircle2,
    Users,
    Search,
    MessageSquare,
    Target,
    Workflow,
    Languages,
    Edit3
} from "lucide-react"
import Link from "next/link"

export default function ContentWritingPage() {
    const scopeItems = [
        { title: "SEO Blog Posts", desc: "Expertly researched articles that drive organic traffic and build authority.", icon: Search },
        { title: "Technical Writing", desc: "Simplifying complex concepts into clear, actionable documentation.", icon: FileText },
        { title: "Creative Copy", desc: "Compelling sales copy that resonates with your emotional and logical buyers.", icon: Sparkles },
        { title: "Brand Messaging", desc: "Defining your unique voice and tone across all digital touchpoints.", icon: MessageSquare }
    ]

    const processSteps = [
        { step: "01", title: "Research", desc: "Deep diving into your niche, audience, and competitors.", icon: Search },
        { step: "02", title: "Strategy", desc: "Developing a content map and SEO keyword strategy.", icon: Target },
        { step: "03", title: "Drafting", desc: "Crafting high-quality content that follows your brand voice.", icon: PenTool },
        { step: "04", title: "Editing", desc: "Rigorous proofreading and optimization for readability.", icon: Edit3 },
        { step: "05", title: "Publish", desc: "Formatting and delivering content ready for your platforms.", icon: Rocket }
    ]

    const contentFeatures = [
        { title: "SEO Optimized", icon: Zap, desc: "Naturally integrated keywords to ensure search engine visibility." },
        { title: "100% Unique", icon: CheckCircle2, desc: "Plagiarism-free content that provides real value to your readers." },
        { title: "Multilingual", icon: Languages, desc: "Reach global audiences with localized and translated content." },
        { title: "Data Driven", icon: Workflow, desc: "Content backed by industry trends and user behavior data." }
    ]

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-black uppercase tracking-[0.2em]">
                            <PenTool className="h-4 w-4" /> Art of Storytelling
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter italic">
                            Content <br />
                            <span className="text-green-600">Writing.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                            Words that convert. We write high-quality, persuasive, and SEO-focused content that speaks your brand&apos;s language and captivates your audience.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 rounded-full px-12 h-16 text-lg font-black italic shadow-2xl shadow-green-500/20" asChild>
                                <Link href="/contact">Tell Your Story</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -inset-10 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 blur-[100px] rounded-full" />
                        <div className="relative aspect-square rounded-[4rem] border-8 border-white shadow-3xl overflow-hidden">
                            <img
                                src="/services/content-writing.png"
                                alt="Content Writing"
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
                        <p className="text-xl text-slate-600 font-medium">Providing high-impact content for every stage of the funnel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scopeItems.map((item, idx) => (
                            <Card key={idx} className="bg-white p-10 rounded-[3rem] border-none shadow-xl hover:scale-105 transition-transform duration-500">
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-green-500 mb-8">
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
                    <p className="text-xl text-slate-600">A meticulous editorial process that ensures quality and consistency.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                        {processSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-primary font-black text-xl mb-6 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 shadow-xl">
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
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black text-white italic leading-none">
                                Premium <br />
                                <span className="text-green-500">Quality.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium">
                                We utilize modern SEO tools and creative talent to ensure your content stands out in a crowded digital space.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {contentFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-green-500">
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
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-4xl transform -rotate-3">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center text-white/40">
                                        <Edit3 className="h-8 w-8" />
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-green-600 rounded-full w-3/4" />
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
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 md:p-24 rounded-[4rem] text-center space-y-10 shadow-3xl relative overflow-hidden">
                    <Rocket className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5" />
                    <h2 className="text-4xl md:text-7xl font-black text-white italic leading-none">Ready to tell your story?</h2>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto font-medium opacity-80">
                        Let&apos;s craft high-quality content that builds trust and drives measurable engagement for your brand.
                    </p>
                    <div className="pt-6">
                        <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-slate-50 rounded-full px-16 h-20 text-2xl font-black italic shadow-2xl" asChild>
                            <Link href="/contact">Get started now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
