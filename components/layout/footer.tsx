import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-accent/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">AMS IT Services</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                            Leading IT solutions provider based in India, delivering excellence in web and mobile development globally.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Memphis, Tennessee (HO)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <a href="mailto:mudassir@amsitservices.com" className="hover:text-primary transition-colors">
                                mudassir@amsitservices.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-primary">Main Features</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>Custom Web Development</li>
                            <li>E-commerce Solutions</li>
                            <li>Web App Development</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-primary">Services</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li>Mobile App Development</li>
                            <li>SEO Optimization</li>
                            <li>Software Testing</li>
                            <li>AWS Cloud Integration</li>
                            <li>Backend Automation</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Newsletter</h4>
                        <p className="text-xs text-foreground/70">Subscribe to get the latest updates and news.</p>
                        <div className="flex gap-2">
                            <Input placeholder="Email Address" className="bg-white/50" />
                            <Button size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-xs text-foreground/60">
                    <p>&copy; {new Date().getFullYear()} AMS IT Services. All rights reserved. Based in Hyderabad, India.</p>
                </div>
            </div>
        </footer>
    )
}
