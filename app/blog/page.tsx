import Link from "next/link"
import { getBlogPosts } from "@/lib/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata = {
    title: "Blog | Web Development & Tech Insights",
    description: "Expert insights on web development, mobile apps, SEO, e-commerce, and digital transformation from the AMS IT Services team.",
    keywords: ["web development blog", "tech insights", "SEO tips", "e-commerce trends", "mobile app development", "IT services blog"],
    alternates: { canonical: "https://amsitservices.com/blog" },
    openGraph: {
        title: "AMS IT Services Blog | Tech & Development Insights",
        description: "Expert insights on web development, SEO, mobile apps, and digital business transformation.",
        url: "https://amsitservices.com/blog",
        images: [{ url: "/blog-og.jpg", width: 1200, height: 630, alt: "AMS IT Services Blog" }],
    },
    twitter: { card: "summary_large_image", images: ["/blog-og.jpg"] },
}

export default async function BlogPage() {
    const blogPosts = await getBlogPosts()
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative text-white py-24 px-4 overflow-hidden min-h-[300px] flex items-center">
                <div className="absolute inset-0">
                    <img src="/blog-og.jpg" alt="AMS IT Services Blog" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#BB290E]/80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="container mx-auto relative z-10 text-center space-y-4">
                    <div className="inline-block px-5 py-2 text-xs font-bold tracking-widest uppercase bg-white/10 border border-white/20 rounded-full mb-2">
                        Insights & Updates
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Blog</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Stay updated with the latest trends and insights from our team of technology experts.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.slug} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full bg-white">
                            <div className="relative h-48 overflow-hidden">
                                <img src="/blog-og.jpg" alt={post.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#BB290E] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <CardHeader className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl md:text-2xl font-bold leading-tight group-hover:text-[#BB290E] transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 flex flex-col flex-grow space-y-4">
                                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <Button variant="link" className="p-0 h-auto text-[#BB290E] font-bold text-base group/btn" asChild>
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                            Read Full Story
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-gray-50 py-20 border-y border-gray-100">
                <div className="container mx-auto px-4 text-center space-y-8">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">Never Miss an Update</h2>
                        <p className="text-gray-600">
                            Subscribe to our newsletter and get the latest insights delivered right to your inbox.
                        </p>
                    </div>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BB290E] focus:border-transparent"
                            required
                        />
                        <Button type="submit" className="bg-[#BB290E] hover:bg-[#96210b] px-8 py-6 h-auto">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    )
}
