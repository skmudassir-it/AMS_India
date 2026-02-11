import { Button } from "@/components/ui/button"
import { ShieldCheck, CheckSquare, Zap, Target, FileText } from "lucide-react"
import Link from "next/link"

export default function TestingPage() {
    const testingServices = [
        { title: "Manual Testing", icon: FileText, desc: "Human-centric testing to ensure usability and accessibility." },
        { title: "Automation Testing", icon: Zap, desc: "Fast, repeatable, and reliable automated test suites." },
        { title: "Performance Testing", icon: Target, desc: "Stressing your system to ensure stability under load." },
        { title: "Security Audits", icon: ShieldCheck, desc: "Protecting your data and infrastructure from vulnerabilities." }
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">
                        Software <span className="text-foreground">Testing & QA</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        We ensure your software is bug-free, secure, and performs flawlessly under any conditions. Quality is not an act, it's a habit for our QA experts.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <CheckSquare className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Zero Bugs</h4>
                                <p className="text-sm text-foreground/60">Strict QA protocols.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckSquare className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Fast Delivery</h4>
                                <p className="text-sm text-foreground/60">Optimized testing cycles.</p>
                            </div>
                        </div>
                    </div>
                    <Button size="lg" asChild>
                        <Link href="/contact">Guarantee Quality Now</Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testingServices.map((service, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-accent/20 border-2 border-transparent hover:border-primary/20 transition-all space-y-4">
                            <service.icon className="h-12 w-12 text-primary" />
                            <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center py-12 border-y border-secondary/20">
                <h2 className="text-2xl font-bold text-primary mb-4 italic">"Quality is the foundation of every successful digital product."</h2>
                <p className="text-foreground/60">— The AMS IT Services QA Team</p>
            </div>
        </div>
    )
}
