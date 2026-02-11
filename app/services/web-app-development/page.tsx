import { Button } from "@/components/ui/button"
import { Code, CheckCircle, Database, Layers, Monitor, Search } from "lucide-react"
import Link from "next/link"

export default function WebAppDevPage() {
    const stacks = [
        { title: "Frontend Excellence", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
        { title: "Backend Powerhouse", items: ["Node.js", "Python", "PHP/Laravel", "Go"] },
        { title: "Database Systems", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
        { title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Google Cloud"] }
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-6 mb-24">
                    <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-2xl mb-4">
                        <Monitor className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-primary tracking-tight">
                        Web App <span className="text-foreground">Development</span>
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
                        We build feature-rich, high-performance web applications that solve complex business challenges. From SaaS platforms to enterprise intranets, we deliver excellence.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Build My Web App</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 font-medium">
                    {stacks.map((stack, idx) => (
                        <div key={idx} className="p-8 pb-12 rounded-3xl bg-secondary/10 space-y-6 relative overflow-hidden group hover:bg-primary/5 transition-colors">
                            <h3 className="text-lg font-bold text-primary mb-4 z-10 relative">{stack.title}</h3>
                            <ul className="space-y-3 z-10 relative">
                                {stack.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity translate-x-1/4 translate-y-1/4">
                                <Code className="w-32 h-32 text-primary" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-10">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">Complex Problems, <br /> Intelligent Solutions</h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Our web application development process focuses on performance, scalability, and maintainability. We work closely with your team to understand the technical and business constraints, delivering a solution that exceeds expectations.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                <span className="font-bold">Agile Development Process</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                <span className="font-bold">Scalable SaaS Architecture</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <CheckCircle className="h-6 w-6 text-primary" />
                                <span className="font-bold">Secure User Authentication</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-3xl border-2 border-primary/10 shadow-xl space-y-6">
                        <h3 className="text-2xl font-bold text-primary">Core Technical Specs</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-accent/20 rounded-xl flex items-center justify-between">
                                <span className="font-bold">Uptime Guarantee</span>
                                <span className="text-primary font-black uppercase text-xs">99.9%</span>
                            </div>
                            <div className="p-4 bg-accent/20 rounded-xl flex items-center justify-between">
                                <span className="font-bold">Response Time</span>
                                <span className="text-primary font-black uppercase text-xs">&lt; 100ms</span>
                            </div>
                            <div className="p-4 bg-accent/20 rounded-xl flex items-center justify-between">
                                <span className="font-bold">Scalability</span>
                                <span className="text-primary font-black uppercase text-xs">Infinite</span>
                            </div>
                        </div>
                        <Button className="w-full h-12" variant="outline" asChild>
                            <Link href="/contact">Technical Specification Sheet</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
