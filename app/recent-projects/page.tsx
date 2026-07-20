import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe } from "lucide-react"

export const metadata = {
  title: "Recent Projects | AMS IT Services",
  description:
    "Explore our latest websites and digital solutions — 58+ live projects built with Next.js, React, and Tailwind CSS, deployed on Vercel.",
}

const projects = [
  { name: "Peak Roofing", url: "https://peak-roofing.vercel.app", description: "Professional roofing company website with service pages, gallery, and contact forms.", gradient: "from-amber-600 to-orange-700" },
  { name: "Spark Electric", url: "https://spark-electric.vercel.app", description: "Modern electrical services site with portfolio, reviews, and estimate requests.", gradient: "from-yellow-500 to-amber-600" },
  { name: "Crystal Pools", url: "https://crystal-pools.vercel.app", description: "Pool construction and maintenance company with project showcase.", gradient: "from-cyan-500 to-blue-600" },
  { name: "SunPath Solar", url: "https://solar-installation.vercel.app", description: "Solar installation company with calculator, benefits, and consultation booking.", gradient: "from-green-500 to-emerald-600" },
  { name: "Terry Lawn Care", url: "https://terry-lawn.vercel.app", description: "Lawn care and landscaping services with seasonal packages and gallery.", gradient: "from-lime-500 to-green-600" },
  { name: "Catering Chef", url: "https://catering-chef.vercel.app", description: "Premium catering service with menu showcase, event types, and online booking.", gradient: "from-red-500 to-rose-600" },
  { name: "MealPrep Pro", url: "https://meal-prep-delivery.vercel.app", description: "Meal prep delivery service with plans, nutrition info, and subscription management.", gradient: "from-orange-500 to-red-500" },
  { name: "Memphis Indian Restaurant", url: "https://memphis-indian-restaurant.vercel.app", description: "Full restaurant website with categorized menu, pricing, and online reservations.", gradient: "from-red-600 to-orange-600" },
  { name: "Mobile Notary", url: "https://mobile-notary.vercel.app", description: "Mobile notary services with scheduling, service areas, and document preparation.", gradient: "from-blue-600 to-indigo-700" },
  { name: "LedgerPro", url: "https://ledgerpro-bookkeeping.vercel.app", description: "Professional bookkeeping and tax services with pricing and client portal.", gradient: "from-slate-600 to-gray-700" },
  { name: "ShieldPro Security", url: "https://shieldpro-security.vercel.app", description: "Security services company with solutions, monitoring, and quote requests.", gradient: "from-gray-700 to-slate-800" },
  { name: "TaskFlow Concierge", url: "https://taskflow-concierge.vercel.app", description: "Virtual assistant and concierge services with task management and scheduling.", gradient: "from-purple-500 to-violet-600" },
  { name: "LinguaBridge", url: "https://linguabridge-translation.vercel.app", description: "Translation and interpretation services with language pairs and booking.", gradient: "from-indigo-500 to-blue-600" },
  { name: "NestKey", url: "https://nestkey.vercel.app", description: "Real estate platform with property listings, search, and agent profiles.", gradient: "from-teal-500 to-emerald-600" },
  { name: "Nest & Dwell Interiors", url: "https://nest-dwell-interiors.vercel.app", description: "Interior design and home staging with portfolio gallery and consultations.", gradient: "from-rose-400 to-pink-500" },
  { name: "Glow Mobile Spa", url: "https://glowmobile-spa.vercel.app", description: "Mobile spa and wellness services with treatments menu and online booking.", gradient: "from-pink-400 to-rose-500" },
  { name: "Care Connect", url: "https://care-connect.vercel.app", description: "Healthcare connection platform linking patients with providers.", gradient: "from-sky-400 to-blue-500" },
  { name: "Harmony Road Music", url: "https://harmony-road-music.vercel.app", description: "Music lessons academy with instructor profiles and class scheduling.", gradient: "from-violet-500 to-purple-600" },
  { name: "Lens & Light Media", url: "https://lens-light-media.vercel.app", description: "Photography and videography services with stunning portfolio showcase.", gradient: "from-gray-600 to-slate-700" },
  { name: "Drone Photography", url: "https://drone-photography.vercel.app", description: "Aerial drone photography and videography with gallery and booking.", gradient: "from-sky-600 to-cyan-700" },
  { name: "Graphic Design Pro", url: "https://graphic-design.vercel.app", description: "Professional graphic design services with portfolio and service packages.", gradient: "from-fuchsia-500 to-pink-600" },
  { name: "AutoPro Detailing", url: "https://auto-pro-detailing.vercel.app", description: "Auto detailing and car care services with packages and online booking.", gradient: "from-red-700 to-rose-800" },
  { name: "TechServe Pro", url: "https://techserve-pro.vercel.app", description: "IT services and tech support with service plans and remote assistance.", gradient: "from-blue-700 to-indigo-800" },
  { name: "Vehicle Wraps", url: "https://vehicle-wraps.vercel.app", description: "Custom vehicle wrap design and installation with portfolio gallery.", gradient: "from-orange-600 to-amber-700" },
  { name: "Mufasa Jeweler", url: "https://mufasa-jeweler.vercel.app", description: "Luxury jewelry e-commerce with product catalog and shopping experience.", gradient: "from-amber-500 to-yellow-600" },
  { name: "EverAfter Wedding", url: "https://everafter-wedding.vercel.app", description: "Wedding planning and event management with vendor coordination.", gradient: "from-pink-500 to-rose-600" },
  { name: "Escape Room", url: "https://escape-room.vercel.app", description: "Entertainment venue website with room themes, booking, and pricing.", gradient: "from-purple-700 to-violet-800" },
  { name: "Furniture Revival", url: "https://furniture-restoration.vercel.app", description: "Furniture restoration and custom pieces with portfolio and services.", gradient: "from-amber-700 to-yellow-800" },
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
            58+ live business websites — each one custom-built with Next.js, React, and Tailwind CSS, deployed on Vercel.
          </p>
          <div className="mt-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-500/15 border border-green-500/25 rounded-full text-xs font-semibold text-green-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {projects.length} Live Projects
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
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

function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-[#BB290E]/20 transition-all duration-300 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
        <div className="relative z-10 text-center px-4">
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-1">PROJECT</span>
          <span className="text-white font-bold text-lg tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
            {project.name}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#BB290E] transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-xs text-gray-400 truncate font-mono">
            {project.url.replace("https://", "")}
          </span>
          <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-[#BB290E] transition-colors shrink-0 ml-auto" />
        </div>
      </div>
    </a>
  )
}
