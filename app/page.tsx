import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Globe, Laptop, Smartphone, Search, Database, Cloud, Settings, Layers, ShieldCheck } from "lucide-react"

import { Portfolio } from "@/components/Portfolio"

export default function Home() {
  const mainFeatures = [
    {
      title: "Custom Web Development",
      description: "Tailored web solutions designed to meet your unique business requirements and goals.",
      icon: Globe,
    },
    {
      title: "E-commerce Solutions",
      description: "Scalable and secure online stores built with Shopify, WooCommerce, and custom platforms.",
      icon: Laptop,
    },
    {
      title: "Web App Development",
      description: "Robust and interactive web applications using modern frameworks for optimal performance.",
      icon: Code2,
    }
  ]

  const serviceHighlights = [
    { title: "Mobile App Development", icon: Smartphone },
    { title: "SEO Optimization", icon: Search },
    { title: "AWS Cloud Integration", icon: Cloud },
    { title: "Custom Database Solutions", icon: Database },
    { title: "API Development", icon: Layers },
    { title: "Software Testing", icon: ShieldCheck },
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary/10">
        <div className="container px-4 text-center space-y-8 relative z-10">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
            Innovating from India for the World
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight max-w-4xl mx-auto">
            Empowering Your Business with <span className="text-primary">Next-Gen IT Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            From Custom Web Development to AWS Cloud Integration, AMS IT Services delivers premium technology solutions tailored to your success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Animated background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-1" />
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Expertise</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">We specialize in building solutions that drive growth and efficiency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFeatures.map((feature, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/50 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Service Grid Highlight */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center md:text-left">Comprehensive IT Services</h2>
              <p className="text-foreground/60 max-w-xl text-center md:text-left">Full-cycle development and optimization services to scale your digital presence.</p>
            </div>
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceHighlights.map((service, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-background shadow-sm border border-secondary/20">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center shrink-0">
                  <service.icon className="text-primary h-5 w-5" />
                </div>
                <span className="font-medium text-sm md:text-base">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section/Call to Action */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg mt-4">
              Let's build something amazing together. Our expert team is ready to transform your ideas into reality.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Contact Us Now
              </Button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        </div>
      </section>
    </div>
  )
}
