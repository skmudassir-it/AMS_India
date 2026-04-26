import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amsitservices.com"),
  title: {
    default: "AMS IT Services | Custom Web & Mobile Development",
    template: "%s | AMS IT Services",
  },
  description:
    "AMS IT Services delivers custom web development, mobile apps, e-commerce solutions, SEO optimization, and AWS cloud integration. Based in India & USA.",
  keywords: [
    "web development", "mobile app development", "e-commerce solutions", "SEO optimization",
    "AWS cloud integration", "IT services", "software development India", "Memphis IT company",
    "React Next.js development", "Shopify development", "digital marketing",
  ],
  authors: [{ name: "AMS IT Services", url: "https://amsitservices.com" }],
  creator: "AMS IT Services",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amsitservices.com",
    siteName: "AMS IT Services",
    title: "AMS IT Services | Custom Web & Mobile Development",
    description:
      "Premium web development, mobile apps, SEO, and cloud integration services. Trusted by businesses worldwide.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AMS IT Services" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AMSITServices",
    creator: "@AMSITServices",
    title: "AMS IT Services | Custom Web & Mobile Development",
    description: "Premium web development, mobile apps, SEO, and cloud integration services.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Announcement Bar */}
        <div className="w-full bg-[#BB290E] text-white py-2.5 px-4 text-center text-sm font-semibold tracking-wide z-[100] relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
          <span className="relative">🚀 Limited Time Offer: Get a Free Business Strategy Consultation with Every Project!</span>
        </div>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          id="mautic-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
                w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
                m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
              })(window,document,'script','${process.env.NEXT_PUBLIC_MAUTIC_URL}/mtc.js','mt');

              mt('send', 'pageview');
            `,
          }}
        />
      </body>
    </html>
  );
}
