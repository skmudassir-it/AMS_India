import { Button } from "@/components/ui/button"
import { ShoppingBag, CheckCircle, CreditCard, Box, Tag, Zap } from "lucide-react"
import Link from "next/link"

export default function ECommercePage() {
    const shopifyBenefits = [
        "Shopify Setup & Custom Storefronts",
        "WooCommerce Integration for WordPress",
        "Payment Gateway Implementation",
        "Inventory Management Systems",
        "Marketing & Growth Automation",
        "Speed & Conversion Rate Optimization"
    ]

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-5xl mx-auto space-y-24">
                <section className="text-center space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <ShoppingBag className="h-12 w-12 text-primary" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-primary leading-tight max-w-4xl mx-auto underline decoration-secondary">
                        E-commerce <span className="text-foreground">Solutions</span>
                    </h1>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                        Transform your retail business into a digital powerhouse. We build high-converting online stores that drive sales and delight customers.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Launch My Store</Link>
                        </Button>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
                        <div className="relative bg-white rounded-3xl p-8 border border-secondary shadow-lg space-y-6">
                            <div className="flex items-center gap-4 p-4 border-b border-secondary/20">
                                <Zap className="h-6 w-6 text-primary" />
                                <span className="font-bold">Fast-Loading Stores</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 border-b border-secondary/20">
                                <CreditCard className="h-6 w-6 text-primary" />
                                <span className="font-bold">Secure Checkout</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 border-b border-secondary/20">
                                <Box className="h-6 w-6 text-primary" />
                                <span className="font-bold">Smart Inventory</span>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <Tag className="h-6 w-6 text-primary" />
                                <span className="font-bold">SEO-Ready Products</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-3xl font-bold text-primary">Maximize Your Online Sales</h2>
                        <p className="text-foreground/70 leading-relaxed">
                            From small boutiques to large-scale retail chains, we provide scalable e-commerce solutions tailored to your unique market. Our team specializes in Shopify, WooCommerce, and custom platforms.
                        </p>
                        <ul className="space-y-4">
                            {shopifyBenefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-foreground/80 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground rounded-3xl p-12 text-center space-y-8">
                    <h2 className="text-3xl font-bold">Ready to Scale Your Online Revenue?</h2>
                    <p className="opacity-80 max-w-xl mx-auto">
                        Our e-commerce experts will help you choose the right platform and strategy to maximize your business growth.
                    </p>
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </section>
            </div>
        </div>
    )
}
