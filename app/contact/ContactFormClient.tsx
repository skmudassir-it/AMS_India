"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react"

const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLScU5ZJwJrlNXgHvSjs5bHmc92M43JZ2gX8FNhrObBu_kspoSw/formResponse"

export default function ContactFormClient() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
        e.preventDefault()
        setStatus("loading")

        const data = new FormData(e.currentTarget)
        const body = new URLSearchParams({
            "entry.333555949": data.get("name") as string,
            "entry.1004269517": data.get("email") as string,
            "entry.1652464966": data.get("phone") as string,
            "entry.820684647": data.get("message") as string,
        })

        try {
            await fetch(GOOGLE_FORM_ACTION, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            })
        } catch {
            // no-cors: response is opaque — treat as sent
        }

        setStatus("success")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            {/* Page Header */}
            <div className="relative py-24 overflow-hidden min-h-[280px] flex items-center">
                <div className="absolute inset-0">
                    <img src="/contact-og.jpg" alt="Contact AMS IT Services" className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,13,26,0.88) 0%, rgba(12,26,53,0.78) 60%, rgba(7,15,34,0.88) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(30,58,138,0.25) 0%, transparent 70%)' }} />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10 space-y-4">
                    <div className="inline-block px-5 py-2 text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                        Let&apos;s Work Together
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">Get In Touch</h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Have a project in mind or want to know more about our services? Our team is ready to help you.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <Card className="border-0 shadow-2xl shadow-slate-200/60">
                            <CardContent className="p-8 md:p-10">
                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center space-y-5">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="h-10 w-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                                        <p className="text-slate-500 max-w-sm">
                                            Thank you for reaching out. Our team will get back to you within 24 hours.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setStatus("idle")}
                                            className="mt-2 border-[#BB290E] text-[#BB290E] hover:bg-[#BB290E]/5"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-1">
                                            <h2 className="text-2xl font-bold text-slate-800">Send Us a Message</h2>
                                            <p className="text-sm text-slate-500">Fill in the details below and we&apos;ll be in touch shortly.</p>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                                            <Input
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                disabled={status === "loading"}
                                                className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    required
                                                    disabled={status === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    disabled={status === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Message *</label>
                                            <textarea
                                                name="message"
                                                className="w-full min-h-[160px] p-3 rounded-md border border-slate-200 bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 disabled:opacity-50 resize-none transition-colors"
                                                placeholder="Tell us about your project or how we can help..."
                                                required
                                                disabled={status === "loading"}
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-12 text-base font-bold bg-[#BB290E] hover:bg-[#96210b] shadow-lg hover:shadow-[#BB290E]/20 transition-all"
                                            disabled={status === "loading"}
                                        >
                                            {status === "loading" ? (
                                                <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Sending...</>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-slate-800">Contact Information</h3>
                            <p className="text-slate-500 text-sm">Reach out directly or use the form to get in touch.</p>
                        </div>

                        <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="text-blue-600 h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Email Us</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">Response within 24 hours</p>
                                    <a href="mailto:mudassir@amsitservices.com" className="text-sm font-medium text-[#BB290E] hover:underline mt-1 block">
                                        mudassir@amsitservices.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#BB290E] h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">USA Head Office</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">Headquarters</p>
                                    <p className="text-sm font-medium text-slate-700 mt-1">Memphis, Tennessee, USA</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-indigo-600 h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">India Development Hub</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">Engineering & Delivery</p>
                                    <p className="text-sm font-medium text-slate-700 mt-1">Hyderabad, India</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="text-green-600 h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Business Hours</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">Mon – Fri</p>
                                    <p className="text-sm font-medium text-slate-700 mt-1">9:00 AM – 6:00 PM IST</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
