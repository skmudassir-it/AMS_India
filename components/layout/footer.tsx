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
                            <li><Link href="/services/custom-web-development" className="hover:text-primary transition-colors">Custom Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
                            <li><Link href="/services/web-app-development" className="hover:text-primary transition-colors">Web App Development</Link></li>
                            <li><Link href="/services/e-commerce-solutions" className="hover:text-primary transition-colors">E-commerce Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-primary">Services</h4>
                        <ul className="space-y-2 text-sm text-foreground/80">
                            <li><Link href="/services/seo-optimization" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link href="/services/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services/crm" className="hover:text-primary transition-colors">CRM Development</Link></li>
                            <li><Link href="/services/content-writing" className="hover:text-primary transition-colors">Content Writing</Link></li>
                            <li><Link href="/services/software-testing" className="hover:text-primary transition-colors">Software Testing</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Newsletter</h4>
                        <p className="text-xs text-foreground/70">Subscribe to get the latest updates and news.</p>
                        <form
                            method="post"
                            action={`${process.env.NEXT_PUBLIC_MAUTIC_URL}/form/submit?formId=${process.env.NEXT_PUBLIC_MAUTIC_NEWSLETTER_FORM_ID}`}
                            id="mautic_newsletter_form"
                            className="space-y-3"
                        >
                            <input type="hidden" name="mauticform[formId]" value={process.env.NEXT_PUBLIC_MAUTIC_NEWSLETTER_FORM_ID} />
                            <input type="hidden" name="mauticform[messenger]" value="1" />
                            <Input
                                type="email"
                                name="mauticform[email]"
                                required
                                placeholder="E-mail"
                                className="bg-white/50 border-primary/20 focus:border-primary"
                            />
                            <Input
                                type="text"
                                name="mauticform[firstname]"
                                placeholder="Name (optional)"
                                className="bg-white/50 border-primary/20 focus:border-primary"
                            />
                            <div className="flex items-center gap-2">
                                <input
                                    id="footer-sub"
                                    type="checkbox"
                                    name="mauticform[footer_subscription]"
                                    defaultChecked
                                    className="w-4 h-4 rounded border-primary/30 text-primary focus:ring-primary accent-primary"
                                />
                                <label htmlFor="footer-sub" className="text-[10px] text-foreground/70 cursor-pointer hover:text-primary transition-colors">
                                    Footer subscription
                                </label>
                            </div>
                            <Button type="submit" size="sm" className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-xs text-foreground/60">
                    <p>&copy; {new Date().getFullYear()} AMS IT Services. All rights reserved. Based in Hyderabad, India.</p>
                </div>
            </div>
        </footer>
    )
}
