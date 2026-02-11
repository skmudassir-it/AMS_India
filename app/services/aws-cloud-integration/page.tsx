import { Button } from "@/components/ui/button"
import { Cloud, CheckCircle, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function AWSCloudPage() {
    const features = [
        "AWS Infrastructure Setup & Configuration",
        "Cloud Migration Services",
        "Serverless Architecture (Lambda, API Gateway)",
        "Managed Database Services (RDS, DynamoDB)",
        "Cloud Security & Compliance",
        "Cost Optimization & Monitoring"
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                        Cloud Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                        AWS Cloud <span className="text-foreground">Integration</span>
                    </h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Scale your business with confidence. We provide end-to-end AWS cloud services to ensure your infrastructure is secure, performant, and cost-effective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Reliable Cloud Infrastructure</h2>
                        <p className="text-foreground/70 leading-relaxed">
                            Our AWS certified experts design and implement cloud architectures that grow with your business. Whether you're moving to the cloud for the first time or optimizing an existing setup, we've got you covered.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-foreground/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-accent/20 rounded-3xl p-8 flex flex-col justify-center gap-8 border border-primary/10">
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                            <Shield className="h-8 w-8 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Enterprise Security</h4>
                                <p className="text-sm text-foreground/60">Advanced protection for your data.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                            <Zap className="h-8 w-8 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">High Performance</h4>
                                <p className="text-sm text-foreground/60">Optimized for speed and reliability.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                            <Globe className="h-8 w-8 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Global Scalability</h4>
                                <p className="text-sm text-foreground/60">Deploy apps globally in minutes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-12 bg-primary rounded-3xl text-primary-foreground space-y-6">
                    <h3 className="text-3xl font-bold">Ready to Move to the Cloud?</h3>
                    <p className="max-w-xl mx-auto opacity-80">
                        Get a custom AWS strategy designed specifically for your business needs.
                    </p>
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                        <Link href="/contact">Get Started Today</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
