"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createBlogPost } from "@/lib/blog"
import { mirrorImage } from "@/lib/image-proxy"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function NewPostPage() {
    const router = useRouter()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        image: "",
        author: "",
        category: "",
        date: new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    })

    // Auto-generate slug from title
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value
        const slug = title
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-")

        setFormData({ ...formData, title, slug })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Mirror the image to your secure server if it's an external URL
            let finalImageUrl = formData.image
            if (formData.image && formData.image.startsWith('http') && !formData.image.includes('18.226.187.11')) {
                toast({
                    title: "Image Processing",
                    description: "Mirroring external image to your secure server...",
                })
                try {
                    finalImageUrl = await mirrorImage(formData.image)
                } catch (mirrorError) {
                    console.error("Mirroring failed, using original URL", mirrorError)
                    // We continue even if mirroring fails to not block post creation
                    // but we might want to warn the user
                }
            }

            await createBlogPost({ ...formData, image: finalImageUrl })
            toast({
                title: "Success",
                description: "Blog post created successfully!",
            })
            router.push("/blog/admin")
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message || "Failed to create blog post.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Button variant="ghost" asChild className="mb-4">
                        <Link href="/blog/admin" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Dashboard
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold text-primary">Create New Blog Post</h1>
                    <p className="text-foreground/60">Fill out the form below to publish a new post.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Post Title</Label>
                            <Input
                                id="title"
                                placeholder="e.g. 10 Tips for Web Performance"
                                value={formData.title}
                                onChange={handleTitleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL path)</Label>
                            <Input
                                id="slug"
                                placeholder="e.g. 10-tips-web-performance"
                                value={formData.slug}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, slug: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="author">Author Name</Label>
                            <Input
                                id="author"
                                placeholder="e.g. Mudassir Shaik"
                                value={formData.author}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, author: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                placeholder="e.g. Technology, Web Design"
                                value={formData.category}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, category: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Featured Image URL</Label>
                        <Input
                            id="image"
                            placeholder="https://images.unsplash.com/..."
                            value={formData.image}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, image: e.target.value })}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="excerpt">Short Excerpt</Label>
                        <Textarea
                            id="excerpt"
                            placeholder="A brief summary for the blog listing page..."
                            value={formData.excerpt}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="resize-none h-24"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="content">Full Content (HTML allowed)</Label>
                            <span className="text-xs text-gray-400">Use standard HTML tags for formatting.</span>
                        </div>
                        <Textarea
                            id="content"
                            placeholder="<p>Write your blog post here...</p>"
                            value={formData.content}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, content: e.target.value })}
                            className="min-h-[400px] font-mono text-sm"
                            required
                        />
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
                        <Button variant="outline" type="button" asChild disabled={loading}>
                            <Link href="/blog/admin">Cancel</Link>
                        </Button>
                        <Button type="submit" className="bg-[#BB290E] hover:bg-[#96210b] px-8" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4 mr-2" />
                                    Publish Post
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
