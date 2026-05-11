import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Recent Projects | AMS IT Services",
  description:
    "Explore our recent projects — websites and digital solutions delivered by AMS IT Services across diverse industries.",
}

const projects = [
  {
    name: "BandC Online",
    url: "https://bandconline.com/",
    description: "Modern business website for BandC Online.",
  },
  {
    name: "ShopherShe",
    url: "https://shophershe.com",
    description: "E-commerce fashion and lifestyle platform.",
  },
  {
    name: "GoStickyIcky",
    url: "https://gostickyicky.com",
    description: "Creative brand and product showcase website.",
  },
  {
    name: "BSW Sepia",
    url: "https://bsw-sepia.vercel.app",
    description: "Professional corporate website with modern design.",
  },
  {
    name: "Property AMS",
    url: "https://property.amsitservices.com",
    description: "Real estate property listing and management platform.",
  },
  {
    name: "Memphis Indian Restaurant",
    url: "https://memphis-indian-restaurant.vercel.app",
    description: "Restaurant website with menu, ordering, and location.",
  },
  {
    name: "Mufasa Jeweler",
    url: "https://mufasa-jeweler.vercel.app",
    description: "Luxury jewelry e-commerce storefront.",
  },
  {
    name: "American Metal and Saw",
    url: "https://americanmetalandsaw.com",
    description: "Industrial manufacturing and metal fabrication website.",
  },
  {
    name: "Q107.5",
    url: "https://q1075.com",
    description: "Radio station website with live streaming and programming.",
  },
  {
    name: "Hot 107.1",
    url: "https://hot1071.com",
    description: "Radio station website with music, shows, and events.",
  },
  {
    name: "Sunny 1210",
    url: "https://sunny1210.com",
    description: "Radio station website with broadcast schedule and content.",
  },
]

export default function RecentProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #050d1a 0%, #0c1a35 50%, #070f22 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#BB290E] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-5 py-2 text-xs font-semibold tracking-widest text-blue-300 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-6">
            Our Work
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Recent Projects
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Showcasing our latest web development and digital solutions delivered for clients across industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#BB290E]/20 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Color accent bar on top */}
              <div className="h-1.5 bg-gradient-to-r from-[#BB290E] to-blue-500" />

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#BB290E] transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#BB290E] transition-colors"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BB290E] hover:text-[#96210b] transition-colors mt-auto"
                >
                  Visit Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold">Want to Be Our Next Project?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg mt-4">
              Let&apos;s discuss how we can bring your vision to life with a stunning website or digital solution.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        </div>
      </section>
    </div>
  )
}
