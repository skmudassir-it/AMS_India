import { Button } from "@/components/ui/button"
import { Settings, CheckCircle, Zap, Cpu, Activity } from "lucide-react"
import Link from "next/link"

export default function BackendAutomationPage() {
    const services = [
        { title: "Workflow Automation", desc: "Automate repetitive tasks to save time and reduce errors." },
        { title: "Data Processing Pipelines", desc: "Streamline how you collect, process, and store data." },
        { title: "Custom API development", desc: "Secure and scalable APIs for seamless integrations." },
        { title: "System Monitoring", desc: "Real-time alerts and performance tracking for your backend." }
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                            Efficiency First
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                            Backend <span className="text-foreground">Automation</span>
                        </h1>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Supercharge your operations with intelligent backend automation. We help you eliminate manual bottle-necks and build resilient, self-healing systems.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Optimize My Backend</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="w-full h-80 bg-accent/30 rounded-full flex items-center justify-center relative overflow-hidden">
                            <Settings className="w-40 h-40 text-primary/20 animate-spin-slow" />
                            <Cpu className="w-20 h-20 text-primary absolute" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((item, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-white border border-secondary/20 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Activity className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="p-8 md:p-12 border-2 border-dashed border-primary/20 rounded-3xl text-center space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Don't Let Manual Tasks Hold You Back</h2>
                    <p className="text-foreground/70 max-w-lg mx-auto">
                        Our automation experts will analyze your current workflows and identify where technology can save you the most time and money.
                    </p>
                    <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                        <li className="flex items-center gap-2 underline decoration-primary/30">Node.js</li>
                        <li className="flex items-center gap-2 underline decoration-primary/30">Python</li>
                        <li className="flex items-center gap-2 underline decoration-primary/30">Docker</li>
                        <li className="flex items-center gap-2 underline decoration-primary/30">Kubernetes</li>
                        <li className="flex items-center gap-2 underline decoration-primary/30">CI/CD</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
