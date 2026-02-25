import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    Have a project in mind or want to know more about our services? Our team is ready to help you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <Card className="p-4 md:p-8">
                    <form
                        method="post"
                        action={`${process.env.NEXT_PUBLIC_MAUTIC_URL}/form/submit?formId=${process.env.NEXT_PUBLIC_MAUTIC_CONTACT_FORM_ID}`}
                        id="mautic_contact_form"
                        className="space-y-6"
                    >
                        <input type="hidden" name="mauticform[formId]" value={process.env.NEXT_PUBLIC_MAUTIC_CONTACT_FORM_ID} />
                        <input type="hidden" name="mauticform[messenger]" value="1" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input name="mauticform[firstname]" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input name="mauticform[lastname]" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input type="email" name="mauticform[email]" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Service Interested In</label>
                            <select name="mauticform[service_interested_in]" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                                <option value="Custom Web Development">Custom Web Development</option>
                                <option value="E-commerce Solutions">E-commerce Solutions</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="SEO Optimization">SEO Optimization</option>
                                <option value="Other Services">Other Services</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Your Message</label>
                            <textarea
                                name="mauticform[message]"
                                className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>
                        <Button type="submit" className="w-full h-12 gap-2 text-lg">
                            Send Message <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </Card>

                {/* Contact info & Map placeholder */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <Card className="border-none bg-accent/20">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Email Us</h4>
                                    <p className="text-sm text-foreground/70">Our team will get back to you within 24 hours.</p>
                                    <a href="mailto:mudassir@amsitservices.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        mudassir@amsitservices.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-accent/20">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Head Office</h4>
                                    <p className="text-sm text-foreground/70">Visit us or send us mail.</p>
                                    <p className="text-lg font-medium">Memphis, Tennessee, USA</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none bg-accent/20">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">India Office</h4>
                                    <p className="text-sm text-foreground/70">Main development hub.</p>
                                    <p className="text-lg font-medium">Hyderabad, India</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="rounded-3xl overflow-hidden h-64 bg-secondary/30 relative flex items-center justify-center text-foreground/40 font-medium">
                        <div className="text-center">
                            <MapPin className="h-8 w-8 mx-auto mb-2 opacity-20" />
                            Interactive Map Integration Coming Soon
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
