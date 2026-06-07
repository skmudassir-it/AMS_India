"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, CheckCircle2, Loader2, Calendar, Clock } from "lucide-react"

const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLScU5ZJwJrlNXgHvSjs5bHmc92M43JZ2gX8FNhrObBu_kspoSw/formResponse"

export default function ContactFormClient() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
    const [scheduleStatus, setScheduleStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [scheduleError, setScheduleError] = useState("")

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

    async function handleSchedule(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
        e.preventDefault()
        setScheduleStatus("loading")
        setScheduleError("")

        const data = new FormData(e.currentTarget)
        const payload = {
            name: data.get("sched-name") as string,
            email: data.get("sched-email") as string,
            phone: data.get("sched-phone") as string,
            date: data.get("sched-date") as string,
            time: data.get("sched-time") as string,
            notes: data.get("sched-notes") as string,
        }

        try {
            const res = await fetch("/api/schedule-appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
            const result = await res.json()
            if (!res.ok) throw new Error(result.error || "Failed to schedule")
            setScheduleStatus("success")
        } catch (err: any) {
            setScheduleStatus("error")
            setScheduleError(err.message || "Something went wrong. Please try calling us directly.")
        }
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

            {/* Call Now Banner */}
            <div className="bg-gradient-to-r from-[#BB290E] to-[#8B1B08] py-8">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm text-white/70">Call Us Now</p>
                            <a href="tel:+16456541857" className="text-2xl font-bold tracking-wide hover:underline">
                                +1 (645) 654-1857
                            </a>
                        </div>
                    </div>
                    <span className="hidden sm:block text-white/30 text-lg">|</span>
                    <p className="text-white/80 text-sm max-w-xs text-center sm:text-left">
                        Speak directly with our team. Available Mon–Fri, 9 AM – 6 PM IST.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">

                    {/* Contact Form */}
                    <div className="lg:col-span-3 space-y-8">
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

                        {/* Schedule Appointment Section */}
                        <Card className="border-0 shadow-2xl shadow-slate-200/60">
                            <CardContent className="p-8 md:p-10">
                                {scheduleStatus === "success" ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-5">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                            <Calendar className="h-10 w-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800">Appointment Scheduled!</h3>
                                        <p className="text-slate-500 max-w-sm">
                                            You&apos;ll receive a calendar invitation and confirmation email shortly. We look forward to speaking with you!
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setScheduleStatus("idle")}
                                            className="mt-2 border-[#BB290E] text-[#BB290E] hover:bg-[#BB290E]/5"
                                        >
                                            Schedule Another
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSchedule} className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-[#BB290E]/10 rounded-xl flex items-center justify-center shrink-0">
                                                <Calendar className="h-5 w-5 text-[#BB290E]" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <h2 className="text-2xl font-bold text-slate-800">Schedule a Call</h2>
                                                <p className="text-sm text-slate-500">Book a time that works for you — we&apos;ll confirm via email.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                                            <Input
                                                name="sched-name"
                                                placeholder="John Doe"
                                                required
                                                disabled={scheduleStatus === "loading"}
                                                className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Email *</label>
                                                <Input
                                                    type="email"
                                                    name="sched-email"
                                                    placeholder="john@example.com"
                                                    required
                                                    disabled={scheduleStatus === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700">Phone *</label>
                                                <Input
                                                    type="tel"
                                                    name="sched-phone"
                                                    placeholder="+1 (555) 000-0000"
                                                    required
                                                    disabled={scheduleStatus === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                                    <Calendar className="h-4 w-4 text-slate-400" />Date *
                                                </label>
                                                <Input
                                                    type="date"
                                                    name="sched-date"
                                                    required
                                                    disabled={scheduleStatus === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                    min={new Date().toISOString().split("T")[0]}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                                    <Clock className="h-4 w-4 text-slate-400" />Time *
                                                </label>
                                                <Input
                                                    type="time"
                                                    name="sched-time"
                                                    required
                                                    disabled={scheduleStatus === "loading"}
                                                    className="h-11 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">What would you like to discuss?</label>
                                            <textarea
                                                name="sched-notes"
                                                className="w-full min-h-[80px] p-3 rounded-md border border-slate-200 bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500 disabled:opacity-50 resize-none transition-colors"
                                                placeholder="Tell us briefly about your project or goals..."
                                                disabled={scheduleStatus === "loading"}
                                            />
                                        </div>

                                        {scheduleStatus === "error" && (
                                            <div className="p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
                                                {scheduleError || "Failed to schedule. Please call us at +1 (645) 654-1857."}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            className="w-full h-12 text-base font-bold bg-gradient-to-r from-[#BB290E] to-[#8B1B08] hover:from-[#96210b] hover:to-[#6B1506] shadow-lg hover:shadow-[#BB290E]/20 transition-all"
                                            disabled={scheduleStatus === "loading"}
                                        >
                                            {scheduleStatus === "loading" ? (
                                                <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Scheduling...</>
                                            ) : (
                                                "Book Appointment"
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

                        {/* Call Card - Prominent */}
                        <Card className="border-0 bg-gradient-to-br from-[#BB290E]/5 to-[#BB290E]/10 shadow-md hover:shadow-lg transition-shadow ring-2 ring-[#BB290E]/20">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#BB290E] rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="text-white h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Call Us Directly</h4>
                                    <p className="text-xs text-slate-500 mt-0.5">Fastest response — speak to our team</p>
                                    <a href="tel:+16456541857" className="text-lg font-bold text-[#BB290E] hover:underline mt-1 block tracking-wide">
                                        +1 (645) 654-1857
                                    </a>
                                    <p className="text-xs text-slate-400 mt-0.5">Mon–Fri, 9 AM – 6 PM IST</p>
                                </div>
                            </CardContent>
                        </Card>

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
                                    <Clock className="text-green-600 h-5 w-5" />
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
