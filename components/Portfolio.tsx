"use client"

import { useState } from "react"
import Image from "next/image"

const categories = [
    "Construction",
    "Food & Hospitality",
    "Services",
    "Real Estate",
    "Healthcare",
    "Education",
    "Creative & Media",
    "Automotive",
    "E-commerce",
    "Events",
]

const projects = [
    { title: "Peak Roofing", category: "Construction", repo: "peak-roofing", github: "https://github.com/skmudassir-it/peak-roofing", live: "https://peak-roofing.vercel.app", image: "/websites_Assets/Peak Roofing.jpg" },
    { title: "Summit Roofing", category: "Construction", repo: "summit-roofing", github: "https://github.com/skmudassir-it/summit-roofing", live: "https://summit-roofing.vercel.app", image: "/websites_Assets/Summit Roofing.jpg" },
    { title: "Spark Electric", category: "Construction", repo: "spark-electric", github: "https://github.com/skmudassir-it/spark-electric", live: "https://spark-electric.vercel.app", image: "/websites_Assets/Spark Electric.jpg" },
    { title: "Terry Lawn Care", category: "Construction", repo: "terry-lawn", github: "https://github.com/skmudassir-it/terry-lawn", live: "https://terry-lawn.vercel.app", image: "/websites_Assets/Terry Lawn Care.jpg" },
    { title: "Crystal Pools", category: "Construction", repo: "crystal-pools", github: "https://github.com/skmudassir-it/crystal-pools", live: "https://crystal-pools.vercel.app", image: "/websites_Assets/Crystal Pools.jpg" },
    { title: "SunPath Solar", category: "Construction", repo: "solar-installation", github: "https://github.com/skmudassir-it/solar-installation", live: "https://solar-installation.vercel.app", image: "/websites_Assets/SunPath Solar.jpg" },
    { title: "Pro Plumber Services", category: "Construction", repo: "plumber-services", github: "https://github.com/skmudassir-it/plumber-services", live: "https://plumber-services.vercel.app", image: "/websites_Assets/Pro Plumber Services.jpg" },
    { title: "Building Coolers", category: "Construction", repo: "building-coolers", github: "https://github.com/skmudassir-it/building-coolers", live: "https://building-coolers.vercel.app", image: "/websites_Assets/Building Coolers.jpg" },
    { title: "Home Theater AV", category: "Construction", repo: "home-theater-av", github: "https://github.com/skmudassir-it/home-theater-av", live: "https://home-theater-av.vercel.app", image: "/websites_Assets/Home Theater AV.jpg" },
    { title: "Catering Chef", category: "Food & Hospitality", repo: "catering-chef", github: "https://github.com/skmudassir-it/catering-chef", live: "https://catering-chef.vercel.app", image: "/websites_Assets/Catering Chef.jpg" },
    { title: "MealPrep Pro", category: "Food & Hospitality", repo: "meal-prep-delivery", github: "https://github.com/skmudassir-it/meal-prep-delivery", live: "https://meal-prep-delivery.vercel.app", image: "/websites_Assets/MealPrep Pro.jpg" },
    { title: "Memphis Food Truck", category: "Food & Hospitality", repo: "mem-food-truck", github: "https://github.com/skmudassir-it/mem-food-truck", live: "https://mem-food-truck.vercel.app", image: "/websites_Assets/Memphis Food Truck.jpg" },
    { title: "Memphis Indian Restaurant", category: "Food & Hospitality", repo: "memphis-indian-restaurant", github: "https://github.com/skmudassir-it/memphis-indian-restaurant", live: "https://memphis-indian-restaurant.vercel.app", image: "/websites_Assets/Memphis Indian Restaurant.jpg" },
    { title: "Rolling Kitchen", category: "Food & Hospitality", repo: "food-truck", github: "https://github.com/skmudassir-it/food-truck", live: "https://food-truck.vercel.app", image: "/websites_Assets/Rolling Kitchen.jpg" },
    { title: "Mobile Bartending", category: "Food & Hospitality", repo: "mobile-bartending", github: "https://github.com/skmudassir-it/mobile-bartending", live: "https://mobile-bartending.vercel.app", image: "/websites_Assets/Mobile Bartending.jpg" },
    { title: "NewlyWeds Foods", category: "Food & Hospitality", repo: "newly-weds-foods", github: "https://github.com/skmudassir-it/newly-weds-foods", live: "https://newly-weds-foods.vercel.app", image: "/websites_Assets/NewlyWeds Foods.jpg" },
    { title: "Mobile Notary", category: "Services", repo: "mobile-notary", github: "https://github.com/skmudassir-it/mobile-notary", live: "https://mobile-notary.vercel.app", image: "/websites_Assets/Mobile Notary.jpg" },
    { title: "LedgerPro", category: "Services", repo: "ledgerpro-bookkeeping", github: "https://github.com/skmudassir-it/ledgerpro-bookkeeping", live: "https://ledgerpro-bookkeeping.vercel.app", image: "/websites_Assets/LedgerPro.jpg" },
    { title: "TaskFlow", category: "Services", repo: "taskflow-concierge", github: "https://github.com/skmudassir-it/taskflow-concierge", live: "https://taskflow-concierge.vercel.app", image: "/websites_Assets/TaskFlow.jpg" },
    { title: "ShieldPro Security", category: "Services", repo: "shieldpro-security", github: "https://github.com/skmudassir-it/shieldpro-security", live: "https://shieldpro-security.vercel.app", image: "/websites_Assets/ShieldPro Security.jpg" },
    { title: "LinguaBridge", category: "Services", repo: "linguabridge-translation", github: "https://github.com/skmudassir-it/linguabridge-translation", live: "https://linguabridge-translation.vercel.app", image: "/websites_Assets/LinguaBridge.jpg" },
    { title: "Translate Pro", category: "Services", repo: "translation-interpretation", github: "https://github.com/skmudassir-it/translation-interpretation", live: "https://translation-interpretation.vercel.app", image: "/websites_Assets/Translate Pro.jpg" },
    { title: "SwiftDash Courier", category: "Services", repo: "same-day-courier", github: "https://github.com/skmudassir-it/same-day-courier", live: "https://same-day-courier.vercel.app", image: "/websites_Assets/SwiftDash Courier.jpg" },
    { title: "InsureEase", category: "Services", repo: "insureease", github: "https://github.com/skmudassir-it/insureease", live: "https://insureease.vercel.app", image: "/websites_Assets/InsureEase.jpg" },
    { title: "OfferBound", category: "Services", repo: "offerbound-portal", github: "https://github.com/skmudassir-it/offerbound-portal", live: "https://offerbound-portal.vercel.app", image: "/websites_Assets/OfferBound.jpg" },
    { title: "FreshClean Pro", category: "Services", repo: "freshclean-pro", github: "https://github.com/skmudassir-it/freshclean-pro", live: "https://freshclean-pro.vercel.app", image: "/websites_Assets/FreshClean Pro.jpg" },
    { title: "NestKey", category: "Real Estate", repo: "nestkey", github: "https://github.com/skmudassir-it/nestkey", live: "https://nestkey.vercel.app", image: "/websites_Assets/NestKey.jpg" },
    { title: "Nest & Dwell", category: "Real Estate", repo: "nest-dwell-interiors", github: "https://github.com/skmudassir-it/nest-dwell-interiors", live: "https://nest-dwell-interiors.vercel.app", image: "/websites_Assets/Nest & Dwell.jpg" },
    { title: "Home Organize Pro", category: "Real Estate", repo: "home-organization", github: "https://github.com/skmudassir-it/home-organization", live: "https://home-organization.vercel.app", image: "/websites_Assets/Home Organize Pro.jpg" },
    { title: "Property Hub", category: "Real Estate", repo: "property", github: "https://github.com/skmudassir-it/property", live: "https://property.vercel.app", image: "/websites_Assets/Property Hub.jpg" },
    { title: "Glow Mobile Spa", category: "Healthcare", repo: "glowmobile-spa", github: "https://github.com/skmudassir-it/glowmobile-spa", live: "https://glowmobile-spa.vercel.app", image: "/websites_Assets/Glow Mobile Spa.jpg" },
    { title: "Mobile Spa", category: "Healthcare", repo: "mobile-spa", github: "https://github.com/skmudassir-it/mobile-spa", live: "https://mobile-spa.vercel.app", image: "/websites_Assets/Mobile Spa.jpg" },
    { title: "Mindful Hypnotherapy", category: "Healthcare", repo: "hypnotherapy", github: "https://github.com/skmudassir-it/hypnotherapy", live: "https://hypnotherapy.vercel.app", image: "/websites_Assets/Mindful Hypnotherapy.jpg" },
    { title: "Care Connect", category: "Healthcare", repo: "care-connect", github: "https://github.com/skmudassir-it/care-connect", live: "https://care-connect.vercel.app", image: "/websites_Assets/Care Connect.jpg" },
    { title: "Music Lessons", category: "Education", repo: "music-lessons", github: "https://github.com/skmudassir-it/music-lessons", live: "https://music-lessons.vercel.app", image: "/websites_Assets/Music Lessons.jpg" },
    { title: "Harmony Road Music", category: "Education", repo: "harmony-road-music", github: "https://github.com/skmudassir-it/harmony-road-music", live: "https://harmony-road-music.vercel.app", image: "/websites_Assets/Harmony Road Music.jpg" },
    { title: "Art Classes Studio", category: "Education", repo: "art-classes", github: "https://github.com/skmudassir-it/art-classes", live: "https://art-classes.vercel.app", image: "/websites_Assets/Art Classes Studio.jpg" },
    { title: "Canine Coach", category: "Education", repo: "dog-training", github: "https://github.com/skmudassir-it/dog-training", live: "https://dog-training.vercel.app", image: "/websites_Assets/Canine Coach.jpg" },
    { title: "FitPro Training", category: "Education", repo: "fit-pro", github: "https://github.com/skmudassir-it/fit-pro", live: "https://fit-pro.vercel.app", image: "/websites_Assets/FitPro Training.jpg" },
    { title: "Lens & Light Media", category: "Creative & Media", repo: "lens-light-media", github: "https://github.com/skmudassir-it/lens-light-media", live: "https://lens-light-media.vercel.app", image: "/websites_Assets/Lens & Light Media.jpg" },
    { title: "Drone Photography", category: "Creative & Media", repo: "drone-photography", github: "https://github.com/skmudassir-it/drone-photography", live: "https://drone-photography.vercel.app", image: "/websites_Assets/Drone Photography.jpg" },
    { title: "Graphic Design Pro", category: "Creative & Media", repo: "graphic-design", github: "https://github.com/skmudassir-it/graphic-design", live: "https://graphic-design.vercel.app", image: "/websites_Assets/Graphic Design Pro.jpg" },
    { title: "VocalCraft", category: "Creative & Media", repo: "vocalcraft-voiceover", github: "https://github.com/skmudassir-it/vocalcraft-voiceover", live: "https://vocalcraft-voiceover.vercel.app", image: "/websites_Assets/VocalCraft.jpg" },
    { title: "PrintLayer 3D", category: "Creative & Media", repo: "printlayer-3d-studio", github: "https://github.com/skmudassir-it/printlayer-3d-studio", live: "https://printlayer-3d-studio.vercel.app", image: "/websites_Assets/PrintLayer 3D.jpg" },
    { title: "Laser Engraving", category: "Creative & Media", repo: "laser-engraving", github: "https://github.com/skmudassir-it/laser-engraving", live: "https://laser-engraving.vercel.app", image: "/websites_Assets/Laser Engraving.jpg" },
    { title: "Wedding Event Pro", category: "Creative & Media", repo: "wedding-event-planning", github: "https://github.com/skmudassir-it/wedding-event-planning", live: "https://wedding-event-planning.vercel.app", image: "/websites_Assets/Wedding Event Pro.jpg" },
    { title: "EverAfter Wedding", category: "Creative & Media", repo: "everafter-wedding", github: "https://github.com/skmudassir-it/everafter-wedding", live: "https://everafter-wedding.vercel.app", image: "/websites_Assets/EverAfter Wedding.jpg" },
    { title: "AutoPro Detailing", category: "Automotive", repo: "auto-pro-detailing", github: "https://github.com/skmudassir-it/auto-pro-detailing", live: "https://auto-pro-detailing.vercel.app", image: "/websites_Assets/AutoPro Detailing.jpg" },
    { title: "TechServe Pro", category: "Automotive", repo: "techserve-pro", github: "https://github.com/skmudassir-it/techserve-pro", live: "https://techserve-pro.vercel.app", image: "/websites_Assets/TechServe Pro.jpg" },
    { title: "Vehicle Wraps", category: "Automotive", repo: "vehicle-wraps", github: "https://github.com/skmudassir-it/vehicle-wraps", live: "https://vehicle-wraps.vercel.app", image: "/websites_Assets/Vehicle Wraps.jpg" },
    { title: "RV Repair Pro", category: "Automotive", repo: "rv-repair", github: "https://github.com/skmudassir-it/rv-repair", live: "https://rv-repair.vercel.app", image: "/websites_Assets/RV Repair Pro.jpg" },
    { title: "Mobile Bike Repair", category: "Automotive", repo: "mobile-bike-repair", github: "https://github.com/skmudassir-it/mobile-bike-repair", live: "https://mobile-bike-repair.vercel.app", image: "/websites_Assets/Mobile Bike Repair.jpg" },
    { title: "Mufasa Jeweler", category: "E-commerce", repo: "mufasa-jeweler", github: "https://github.com/skmudassir-it/mufasa-jeweler", live: "https://mufasa-jeweler.vercel.app", image: "/websites_Assets/Mufasa Jeweler.jpg" },
    { title: "IntelliSyncs", category: "E-commerce", repo: "intellisyncs-web", github: "https://github.com/skmudassir-it/intellisyncs-web", live: "https://intellisyncs-web.vercel.app", image: "/websites_Assets/IntelliSyncs.jpg" },
    { title: "AMS E-Commerce", category: "E-commerce", repo: "wise-ams-ecommerce", github: "https://github.com/skmudassir-it/wise-ams-ecommerce", live: "https://wise-ams-ecommerce.vercel.app", image: "/websites_Assets/AMS E-Commerce.jpg" },
    { title: "Escape Room", category: "Events", repo: "escape-room", github: "https://github.com/skmudassir-it/escape-room", live: "https://escape-room.vercel.app", image: "/websites_Assets/Escape Room.jpg" },
    { title: "Style By You", category: "Events", repo: "personal-styling", github: "https://github.com/skmudassir-it/personal-styling", live: "https://personal-styling.vercel.app", image: "/websites_Assets/Style By You.jpg" },
    { title: "Furniture Revival", category: "Events", repo: "furniture-restoration", github: "https://github.com/skmudassir-it/furniture-restoration", live: "https://furniture-restoration.vercel.app", image: "/websites_Assets/Furniture Revival.jpg" },
]

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Construction")
    const [selectedProject, setSelectedProject] = useState<any>(null)

    const filteredProjects = projects.filter((project) => project.category === activeCategory)

    return (
        <section className="container mx-auto px-4 py-20 flex flex-col items-center gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    Our Work
                </h2>
                <p className="text-foreground/60 max-w-3xl mx-auto text-lg leading-relaxed">
                    Real websites, real businesses. Every project below is live and deployed — built with Next.js, Tailwind CSS, and deployed on Vercel.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium text-sm ${
                            activeCategory === category
                                ? "bg-[#BB290E] border-[#BB290E] text-white shadow-lg scale-105"
                                : "bg-background border-border text-foreground/70 hover:border-[#BB290E] hover:text-[#BB290E]"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {filteredProjects.map((project, idx) => (
                    <div
                        key={`${project.repo}-${idx}`}
                        className="group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* Image placeholder with gradient */}
                        <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={250}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.classList.add('fallback-gradient');
                                }}
                            />
                        </div>
                        
                        {/* Info Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                            <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{project.category}</span>
                            <h3 className="text-white text-lg font-bold">{project.title}</h3>
                            <div className="flex gap-2 mt-3">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full backdrop-blur-sm transition"
                                >
                                    GitHub ↗
                                </a>
                                <a 
                                    href={project.live} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-xs bg-[#BB290E]/80 hover:bg-[#BB290E] text-white px-3 py-1 rounded-full transition"
                                >
                                    Live Site ↗
                                </a>
                            </div>
                        </div>
                        
                        {/* Title Bar */}
                        <div className="p-4">
                            <h3 className="font-semibold text-foreground text-sm truncate">{project.title}</h3>
                            <p className="text-xs text-foreground/50 mt-1">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-200"
                    onClick={() => setSelectedProject(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-all transform hover:rotate-90 z-[110]"
                        onClick={() => setSelectedProject(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                        <div className="p-8">
                            <span className="text-xs font-bold text-[#BB290E] uppercase tracking-widest">{selectedProject.category}</span>
                            <h2 className="text-2xl font-bold text-foreground mt-2">{selectedProject.title}</h2>
                            <div className="flex gap-4 mt-6">
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 text-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                                    View on GitHub ↗
                                </a>
                                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer"
                                   className="flex-1 text-center bg-[#BB290E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#9d200c] transition">
                                    Visit Live Site ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
