import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react"

interface PostPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = await getBlogPost(slug)

    if (!post) {
        notFound()
    }

    // Get all posts and pick 3 random ones excluding current
    const allPosts = await getBlogPosts()
    const relatedPosts = allPosts
        .filter(p => p.slug !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Post Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-accent/20">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BB290E]/5 to-transparent flex items-center justify-center">
                        <span className="text-white/10 font-bold text-9xl">AMS</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="container px-4 relative z-20 text-center text-white space-y-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </Link>
                    <div className="space-y-4 max-w-4xl mx-auto">
                        <span className="bg-[#BB290E] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                            {post.title}
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-sm md:text-base text-white/80 pt-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#BB290E]" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-[#BB290E]" />
                            <span>By {post.author}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post Content */}
            <article className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Main Content */}
                    <div className="lg:w-2/3 space-y-12">
                        <div
                            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed
                prose-headings:font-bold prose-headings:text-gray-900 
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:mb-8
                prose-strong:text-[#BB290E]"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Social Share */}
                        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-gray-900 uppercase tracking-wider">Share this post:</span>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                                        <Facebook className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all">
                                        <Twitter className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-50 transition-all">
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <Button className="bg-[#BB290E] hover:bg-[#96210b]" asChild>
                                <Link href="/contact">Get a Quote for Your Project</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3 space-y-10">
                        <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-[#BB290E] rounded-full" />
                                About AMS IT Services
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are a customer-centric IT services company delivering premium technology solutions tailored to your success. From custom web development to AWS cloud integration, we empower your business for the future.
                            </p>
                            <Button className="w-full bg-[#BB290E] hover:bg-[#96210b] shadow-lg hover:shadow-[#BB290E]/20 transition-all py-6" asChild>
                                <Link href="/services">Explore Our Services</Link>
                            </Button>
                        </div>

                        {/* Related Topics or Categories could go here */}
                    </aside>
                </div>
            </article>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <section className="bg-gray-50 py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">More from Our Blog</h2>
                                <p className="text-foreground/60 max-w-xl">Check out our other latest insights and tech updates.</p>
                            </div>
                            <Button variant="outline" className="border-[#BB290E] text-[#BB290E] hover:bg-[#BB290E]/5" asChild>
                                <Link href="/blog">View All Posts</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((rPost) => (
                                <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group flex flex-col space-y-4">
                                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-md bg-accent/20">
                                        {rPost.image ? (
                                            <Image
                                                src={rPost.image}
                                                alt={rPost.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#BB290E]/5 to-transparent flex items-center justify-center">
                                                <span className="text-primary/10 font-bold text-4xl">AMS</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#BB290E] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                {rPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold group-hover:text-[#BB290E] transition-colors line-clamp-2">
                                            {rPost.title}
                                        </h3>
                                        <p className="text-foreground/60 text-sm line-clamp-2 leading-relaxed">
                                            {rPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 pt-2 text-[#BB290E] font-bold text-sm">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact CTA */}
            <section className="bg-primary text-white py-20 px-4">
                <div className="container mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Have a Brilliant Idea?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Let's turn your vision into a digital reality. Our experts are ready to collaborate.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg rounded-xl" asChild>
                        <Link href="/contact">Start Your Project Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
