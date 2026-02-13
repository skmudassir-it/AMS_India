"use client"

import { useState } from "react"
import Image from "next/image"

const categories = [
    "E-commerce",
    "Food",
    "Manufacturing",
    "Construction",
    "Services",
    "Fitness",
    "Real Estate",
    "Education",
]

const projects = [
    // E-commerce
    { title: "Volt Electronics", category: "E-commerce", image: "/websites_Assets/Volt Electronics.jpg" },
    { title: "Luxe Threads", category: "E-commerce", image: "/websites_Assets/Luxe Threads.jpg" },
    { title: "Glow Essence", category: "E-commerce", image: "/websites_Assets/Glow Essence.jpg" },
    { title: "Pet Pulse", category: "E-commerce", image: "/websites_Assets/Pet Pulse.jpg" },
    { title: "Artisanal Attic", category: "E-commerce", image: "/websites_Assets/Artisanal Attic.jpg" },
    { title: "Hike & Peak", category: "E-commerce", image: "/websites_Assets/Hike & Peak.jpg" },
    { title: "Retro Grooves", category: "E-commerce", image: "/websites_Assets/Retro Grooves.jpg" },
    { title: "Ink & Paper", category: "E-commerce", image: "/websites_Assets/Ink & Paper.jpg" },
    { title: "Sole Search", category: "E-commerce", image: "/websites_Assets/Sole Search.jpg" },
    { title: "Zen Den", category: "E-commerce", image: "/websites_Assets/Zen Den.jpg" },
    { title: "Sprout & Seed", category: "E-commerce", image: "/websites_Assets/Sprout & Seed.jpg" },
    { title: "Bloom Box", category: "E-commerce", image: "/websites_Assets/Bloom Box.jpg" },

    // Food
    { title: "Crave & Co.", category: "Food", image: "/websites_Assets/Crave & Co_.jpg" },
    { title: "Vine & Vessel", category: "Food", image: "/websites_Assets/Vine & Vessel.jpg" },
    { title: "The Morning Grind", category: "Food", image: "/websites_Assets/The Morning Grind.jpg" },
    { title: "Harvest Table", category: "Food", image: "/websites_Assets/Harvest Table.jpg" },
    { title: "Urban Bites", category: "Food", image: "/websites_Assets/Urban Bites.jpg" },
    { title: "Knead & Dough", category: "Food", image: "/websites_Assets/Knead & Dough.jpg" },
    { title: "Sizzle & Spice", category: "Food", image: "/websites_Assets/Sizzle & Spice.jpg" },
    { title: "Velvet Spoon", category: "Food", image: "/websites_Assets/Velvet Spoon.jpg" },
    { title: "The Daily Deli", category: "Food", image: "/websites_Assets/The Daily Deli.jpg" },
    { title: "Frost & Flake", category: "Food", image: "/websites_Assets/Frost & Flake.jpg" },
    { title: "Noodle Nest", category: "Food", image: "/websites_Assets/Noodle Nest.jpg" },
    { title: "Sip & Social", category: "Food", image: "/websites_Assets/Sip & Social.jpg" },

    // Manufacturing
    { title: "Precision Mold", category: "Manufacturing", image: "/websites_Assets/Precision Mold.jpg" },
    { title: "Steel Link", category: "Manufacturing", image: "/websites_Assets/Steel Link.jpg" },
    { title: "Nano Circuit", category: "Manufacturing", image: "/websites_Assets/Nano Circuit.jpg" },
    { title: "Fabri-Gate", category: "Manufacturing", image: "/websites_Assets/Fabri-Gate.jpg" },
    { title: "Hydra-Tech", category: "Manufacturing", image: "/websites_Assets/Hydra-Tech.jpg" },
    { title: "Print-O-Metric", category: "Manufacturing", image: "/websites_Assets/Print-O-Metric.jpg" },
    { title: "Automotive Pro", category: "Manufacturing", image: "/websites_Assets/Automotive Pro.jpg" },
    { title: "Clear-Stream", category: "Manufacturing", image: "/websites_Assets/Clear-Stream.jpg" },
    { title: "Build-A-Box", category: "Manufacturing", image: "/websites_Assets/Build-A-Box.jpg" },
    { title: "Power-Grid", category: "Manufacturing", image: "/websites_Assets/Power-Grid.jpg" },
    { title: "Aero-Motive", category: "Manufacturing", image: "/websites_Assets/Aero-Motive.jpg" },
    { title: "Textile Tech", category: "Manufacturing", image: "/websites_Assets/Textile Tech.jpg" },

    // Construction
    { title: "Foundry Build", category: "Construction", image: "/websites_Assets/Foundry Build.jpg" },
    { title: "Skyline Masonry", category: "Construction", image: "/websites_Assets/Skyline Masonry.jpg" },
    { title: "BluePrint Home", category: "Construction", image: "/websites_Assets/BluePrint Home.jpg" },
    { title: "Terra Excavation", category: "Construction", image: "/websites_Assets/Terra Excavation.jpg" },
    { title: "Volt-Age Electric", category: "Construction", image: "/websites_Assets/Volt-Age Electric.jpg" },
    { title: "Aqua-Flow Plumbing", category: "Construction", image: "/websites_Assets/Aqua-Flow Plumbing.jpg" },
    { title: "Ironclad Roofing", category: "Construction", image: "/websites_Assets/Ironclad Roofing.jpg" },
    { title: "GreenScape Civil", category: "Construction", image: "/websites_Assets/GreenScape Civil.jpg" },
    { title: "Retro-Fit Lab", category: "Construction", image: "/websites_Assets/Retro-Fit Lab.jpg" },
    { title: "Solid Foundation", category: "Construction", image: "/websites_Assets/Solid Foundation.jpg" },
    { title: "Pure Glass Ltd", category: "Construction", image: "/websites_Assets/Pure Glass Ltd.jpg" },
    { title: "Urban Path", category: "Construction", image: "/websites_Assets/Urban Path.jpg" },

    // Services
    { title: "Quant Ledger", category: "Services", image: "/websites_Assets/Quant Ledger.jpg" },
    { title: "Veritas Legal", category: "Services", image: "/websites_Assets/Veritas Legal.jpg" },
    { title: "Pulse Marketing", category: "Services", image: "/websites_Assets/Pulse Marketing.jpg" },
    { title: "Talent Scout HR", category: "Services", image: "/websites_Assets/Talent Scout HR.jpg" },
    { title: "Cyber Guard", category: "Services", image: "/websites_Assets/Cyber Guard.jpg" },
    { title: "Focus Logistics", category: "Services", image: "/websites_Assets/Focus Logistics.jpg" },
    { title: "Clean Slate", category: "Services", image: "/websites_Assets/Clean Slate.jpg" },
    { title: "Translate Pro", category: "Services", image: "/websites_Assets/Translate Pro.jpg" },
    { title: "Event Horizon", category: "Services", image: "/websites_Assets/Event Horizon.jpg" },
    { title: "Strategic Mind", category: "Services", image: "/websites_Assets/Strategic Mind.jpg" },
    { title: "Safe Haven Insure", category: "Services", image: "/websites_Assets/Safe Haven Insure.jpg" },
    { title: "Design Nest", category: "Services", image: "/websites_Assets/Design Nest.jpg" },

    // Fitness
    { title: "Iron Temple", category: "Fitness", image: "/websites_Assets/Iron Temple.jpg" },
    { title: "Zen Stream", category: "Fitness", image: "/websites_Assets/Zen Stream.jpg" },
    { title: "Velocity Run", category: "Fitness", image: "/websites_Assets/Velocity Run.jpg" },
    { title: "Core Pilates", category: "Fitness", image: "/websites_Assets/Core Pilates.jpg" },
    { title: "Aqua Fit", category: "Fitness", image: "/websites_Assets/Aqua Fit.jpg" },
    { title: "Hustle Boxing", category: "Fitness", image: "/websites_Assets/Hustle Boxing.jpg" },
    { title: "Nomad Yoga", category: "Fitness", image: "/websites_Assets/Nomad Yoga.jpg" },
    { title: "Macro Plate", category: "Fitness", image: "/websites_Assets/Macro Plate.jpg" },
    { title: "Peak Performance", category: "Fitness", image: "/websites_Assets/Peak Performance.jpg" },
    { title: "Junior Giants", category: "Fitness", image: "/websites_Assets/Junior Giants.jpg" },
    { title: "Cycle Spin", category: "Fitness", image: "/websites_Assets/Cycle Spin.jpg" },
    { title: "Mindful Muscle", category: "Fitness", image: "/websites_Assets/Mindful Muscle.jpg" },

    // Real Estate
    { title: "Acre & Lot", category: "Real Estate", image: "/websites_Assets/Acre & Lot.jpg" },
    { title: "Urban Loft", category: "Real Estate", image: "/websites_Assets/Urban Loft.jpg" },
    { title: "Co-Work Space", category: "Real Estate", image: "/websites_Assets/Co-Work Space.jpg" },
    { title: "Estate Watch", category: "Real Estate", image: "/websites_Assets/Estate Watch.jpg" },
    { title: "Harbor View", category: "Real Estate", image: "/websites_Assets/Harbor View.jpg" },
    { title: "Listing Pro", category: "Real Estate", image: "/websites_Assets/Listing Pro.jpg" },
    { title: "Green Home", category: "Real Estate", image: "/websites_Assets/Green Home.jpg" },
    { title: "Vacay Stay", category: "Real Estate", image: "/websites_Assets/Vacay Stay.jpg" },
    { title: "Sky Office", category: "Real Estate", image: "/websites_Assets/Sky Office.jpg" },
    { title: "Legacy Farms", category: "Real Estate", image: "/websites_Assets/Legacy Farms.jpg" },
    { title: "First Key", category: "Real Estate", image: "/websites_Assets/First Key.jpg" },
    { title: "Storefront Hub", category: "Real Estate", image: "/websites_Assets/Storefront Hub.jpg" },

    // Education
    { title: "Code Craft", category: "Education", image: "/websites_Assets/Code Craft.jpg" },
    { title: "Lingua Flow", category: "Education", image: "/websites_Assets/Lingua Flow.jpg" },
    { title: "Edu-Kid", category: "Education", image: "/websites_Assets/Edu-Kid.jpg" },
    { title: "Skill Lab", category: "Education", image: "/websites_Assets/Skill Lab.jpg" },
    { title: "Master Classify", category: "Education", image: "/websites_Assets/Master Classify.jpg" },
    { title: "Exam Ready", category: "Education", image: "/websites_Assets/Exam Ready.jpg" },
    { title: "Uni-Apply", category: "Education", image: "/websites_Assets/Uni-Apply.jpg" },
    { title: "Music Note", category: "Education", image: "/websites_Assets/Music Note.jpg" },
    { title: "Green Academy", category: "Education", image: "/websites_Assets/Green Academy.jpg" },
    { title: "Culinaria", category: "Education", image: "/websites_Assets/Culinaria.jpg" },
    { title: "Art Beat", category: "Education", image: "/websites_Assets/Art Beat.jpg" },
    { title: "Trade Tech", category: "Education", image: "/websites_Assets/Trade Tech.jpg" },
]

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("E-commerce")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const filteredProjects = projects.filter((project) => project.category === activeCategory)

    return (
        <section className="container mx-auto px-4 py-20 flex flex-col items-center gap-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Innovating for a Better Tomorrow</h2>
                <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                    Innovating for a better tomorrow requires collaboration with extraordinary clients worldwide. Together, we can achieve design excellence.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium text-sm ${activeCategory === category
                            ? "bg-[#BB290E] border-[#BB290E] text-white shadow-lg scale-105"
                            : "bg-background border-border text-foreground/70 hover:border-[#BB290E] hover:text-[#BB290E]"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid - Matching Dense Layout from Reference */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full list-none px-2">
                {filteredProjects.map((project, idx) => (
                    <a
                        key={`${project.title}-${idx}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedImage(project.image);
                        }}
                        href={project.image}
                        data-fancybox="port"
                        className="block group"
                        title={project.title}
                    >
                        <li
                            className="hk_web_height tabs-web-dsgn relative w-full overflow-hidden rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 aspect-[16/11] list-none border border-black/5 shadow-sm hover:shadow-xl"
                            style={{
                                backgroundImage: `url('${project.image}')`,
                                backgroundSize: '100% auto',
                                backgroundPosition: 'top center',
                            }}
                            data-src={project.image}
                        >
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 z-10">
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">{project.category}</span>
                                    <h3 className="text-white text-base font-semibold">{project.title}</h3>
                                </div>
                            </div>
                        </li>
                    </a>
                ))}
            </ul>

            {/* Enhanced Lightbox Modal - Matching Reference Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 animate-in fade-in duration-300 cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-all transform hover:rotate-90 z-[110]"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div
                        className="relative w-full max-w-4xl h-full flex flex-col items-center animate-in zoom-in-95 duration-500 cursor-default"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="w-full bg-white rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-y-auto scrollbar-hide flex flex-col items-center">
                            <img
                                src={selectedImage}
                                alt="Project Full View"
                                className="w-full h-auto object-contain block"
                            />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .hk_web_height {
          transition: background-position 6s cubic-bezier(0.45, 0.05, 0.55, 0.95), transform 0.5s ease;
        }
        .hk_web_height:hover {
          background-position: bottom center !important;
        }
        .tabs-web-dsgn {
          cursor: pointer;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}
