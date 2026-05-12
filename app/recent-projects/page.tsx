import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Store, Building2, ShoppingBag, UtensilsCrossed, Heart, Users, Hotel, Briefcase, Wrench } from "lucide-react"

export const metadata = {
  title: "Recent Projects | AMS IT Services",
  description:
    "Explore our recent projects — websites and digital solutions delivered by AMS IT Services across diverse industries.",
}

interface Project {
  name: string
  url: string
  description: string
  gradient: string
  icon: React.ComponentType<{ className?: string }>
}

const projects: Project[] = [
  {
    name: "Building Coolers LLC",
    url: "https://building-coolers.vercel.app",
    description: "Modular HVAC solutions website — 10-page professional site with service details, product catalog, project gallery, and contact system. Precision-built, plug-and-play cooling for Memphis.",
    gradient: "from-blue-800 to-sky-600",
    icon: Wrench,
  },
  {
    name: "Aura Estate",
    url: "https://property.amsitservices.com",
    description: "Luxury real estate platform with property listings, image gallery, amenities showcase, Google Maps integration, and contact forms.",
    gradient: "from-emerald-500 to-teal-600",
    icon: Building2,
  },
  {
    name: "StockSwift",
    url: "https://stockswift.amsitservices.com",
    description: "Full SaaS inventory management dashboard with features, pricing tiers, audit logs, PWA support, and technical specifications.",
    gradient: "from-blue-600 to-indigo-700",
    icon: Store,
  },
  {
    name: "Mufasa Jeweler",
    url: "https://mufasa-jeweler.vercel.app",
    description: "Luxury jewelry e-commerce storefront with 6 product categories, featured items carousel, shopping cart, and store locator.",
    gradient: "from-amber-500 to-yellow-600",
    icon: ShoppingBag,
  },
  {
    name: "Newly Weds Foods",
    url: "https://newly-weds-foods.vercel.app",
    description: "Global corporate food ingredients website with dropdown navigation, product lines, innovation hub, and industry trends sections.",
    gradient: "from-red-600 to-orange-600",
    icon: Globe,
  },
  {
    name: "Memphis Indian Restaurant",
    url: "https://memphis-indian-restaurant.vercel.app",
    description: "Full restaurant website with categorized menu, pricing, restaurant story, location, hours of operation, and contact information.",
    gradient: "from-orange-600 to-red-500",
    icon: UtensilsCrossed,
  },
  {
    name: "Baby Feeder",
    url: "https://baby-feeder-rho.vercel.app",
    description: "Maternal health tracking app with 30+ database tables, vaccination photo uploads, age-based milestones, and profile management.",
    gradient: "from-pink-500 to-rose-600",
    icon: Heart,
  },
  {
    name: "Social Platform",
    url: "https://social.amsitservices.com",
    description: "Custom social networking platform with user profiles, content sharing, and community engagement features.",
    gradient: "from-purple-600 to-violet-700",
    icon: Users,
  },
  {
    name: "Hotel Booking",
    url: "https://hotel-frontend-next.vercel.app",
    description: "Modern hotel booking frontend with room listings, availability search, reservation management, and responsive design.",
    gradient: "from-sky-500 to-cyan-600",
    icon: Hotel,
  },
  {
    name: "Portfolio",
    url: "https://skmudassir.in",
    description: "Personal portfolio website showcasing projects, skills, experience, and professional achievements with modern design.",
    gradient: "from-slate-600 to-gray-700",
    icon: Briefcase,
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
            Explore our latest web applications, e-commerce platforms, and digital solutions — live and ready to showcase.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#BB290E]/20 transition-all duration-300 overflow-hidden"
    >
      {/* Square Thumbnail */}
      <div className={`relative aspect-square bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

        {/* Icon */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
            {project.name}
          </span>
        </div>

        {/* Live badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#BB290E] transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
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
