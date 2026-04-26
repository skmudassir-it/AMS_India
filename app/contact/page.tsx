import type { Metadata } from "next"
import ContactFormClient from "./ContactFormClient"

export const metadata: Metadata = {
    title: "Contact Us | AMS IT Services",
    description: "Get in touch with AMS IT Services for custom web development, mobile apps, SEO, and cloud solutions. Offices in Memphis, USA and Hyderabad, India.",
    keywords: ["contact AMS IT Services", "IT services inquiry", "web development quote", "hire developers India", "Memphis IT company"],
    alternates: { canonical: "https://amsitservices.com/contact" },
    openGraph: {
        title: "Contact AMS IT Services",
        description: "Reach out to our team for a free consultation. We deliver premium web, mobile, and cloud solutions from India & USA.",
        url: "https://amsitservices.com/contact",
        images: [{ url: "/contact-og.jpg", width: 1200, height: 630, alt: "Contact AMS IT Services" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact AMS IT Services",
        description: "Reach out to our team for a free consultation on web, mobile, and cloud solutions.",
        images: ["/contact-og.jpg"],
    },
}

export default function ContactPage() {
    return <ContactFormClient />
}
