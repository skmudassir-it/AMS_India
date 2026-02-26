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
  title: "AMS IT Services | Expert Web & Mobile Solutions",
  description: "AMS IT Services provides custom web development, e-commerce solutions, and web app development. Based in India with HQ in Memphis, TN.",
  icons: {
    icon: "/favicon.ico",
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
