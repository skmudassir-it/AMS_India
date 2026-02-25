import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogPost } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

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

    return (
        <div className="flex flex-col min-h-screen">
            {/* Post Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
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
