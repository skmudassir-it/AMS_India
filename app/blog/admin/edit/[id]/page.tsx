"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getBlogPostById, updateBlogPost, BlogPost } from "@/lib/blog"
import { mirrorImage } from "@/lib/image-proxy"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Loader2, Save } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface EditPostPageProps {
    params: Promise<{
        id: string
    }>
}

export default function EditPostPage({ params }: EditPostPageProps) {
    const { id } = use(params)
    const router = useRouter()
    const { toast } = useToast()
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [formData, setFormData] = useState<BlogPost | null>(null)

    useEffect(() => {
        loadPost()
    }, [id])

    async function loadPost() {
        setFetching(true)
        try {
            const post = await getBlogPostById(id)
            if (post) {
                setFormData(post)
            } else {
                toast({
                    title: "Error",
                    description: "Blog post not found.",
                    variant: "destructive",
                })
                router.push("/blog/admin")
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load blog post.",
                variant: "destructive",
            })
        } finally {
            setFetching(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData || !formData.id) return
        setLoading(true)

        try {
            let finalImageUrl = formData.image
            if (formData.image && formData.image.startsWith('http') && !formData.image.includes('18.226.187.11')) {
                toast({
                    title: "Image Processing",
                    description: "Mirroring external image...",
                })
                try {
                    finalImageUrl = await mirrorImage(formData.image)
                } catch (mirrorError) {
                    console.error("Mirroring failed", mirrorError)
                }
            }

            await updateBlogPost(formData.id, { ...formData, image: finalImageUrl })
            toast({
                title: "Success",
                description: "Blog post updated successfully!",
            })
            router.push("/blog/admin")
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message || "Failed to update blog post.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    if (fetching) {
        return (
            <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#BB290E]" />
            </div>
        )
    }

    if (!formData) return null

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
                    <h1 className="text-3xl font-bold text-primary">Edit Blog Post</h1>
                    <p className="text-foreground/60">Update the details of your blog post.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Post Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL path)</Label>
                            <Input
                                id="slug"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="author">Author Name</Label>
                            <Input
                                id="author"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Featured Image URL (Optional)</Label>
                        <Input
                            id="image"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="excerpt">Short Excerpt</Label>
                        <Textarea
                            id="excerpt"
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="resize-none h-24"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Full Content (HTML allowed)</Label>
                        <Textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
