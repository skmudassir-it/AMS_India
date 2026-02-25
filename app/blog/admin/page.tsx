"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getBlogPosts, deleteBlogPost, BlogPost } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2, Home, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AdminDashboard() {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()

    useEffect(() => {
        loadPosts()
    }, [])

    async function loadPosts() {
        setLoading(true)
        try {
            const data = await getBlogPosts()
            setPosts(data)
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load blog posts.",
                variant: "destructive",
            })
        } finally {
            setLoading(false)
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this post?")) return

        try {
            await deleteBlogPost(id)
            setPosts(posts.filter((p) => p.id !== id))
            toast({
                title: "Success",
                description: "Blog post deleted successfully.",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to delete blog post.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Blog Admin Dashboard</h1>
                    <p className="text-foreground/60">Manage your blog posts and dynamic content.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/blog">
                            <Home className="w-4 h-4 mr-2" />
                            View Blog
                        </Link>
                    </Button>
                    <Button className="bg-[#BB290E] hover:bg-[#96210b]" asChild>
                        <Link href="/blog/admin/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Create New Post
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {loading ? (
                    <div className="flex items-center justify-center p-20">
                        <Loader2 className="w-8 h-8 animate-spin text-[#BB290E]" />
                    </div>
                ) : (
                    <Table>
                        <TableHeader className="bg-gray-50">
                            <TableRow>
                                <TableHead className="font-bold">Title</TableHead>
                                <TableHead className="font-bold">Category</TableHead>
                                <TableHead className="font-bold">Author</TableHead>
                                <TableHead className="font-bold">Date</TableHead>
                                <TableHead className="text-right font-bold">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-10 text-foreground/50">
                                        No blog posts found. Create your first post!
                                    </TableCell>
                                </TableRow>
                            ) : (
                                posts.map((post) => (
                                    <TableRow key={post.id} className="hover:bg-gray-50/50 transition-colors">
                                        <TableCell className="font-medium">{post.title}</TableCell>
                                        <TableCell>
                                            <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell>{post.date}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="ghost" size="icon" className="hover:text-blue-600 hover:bg-blue-50" asChild>
                                                    <Link href={`/blog/admin/edit/${post.id}`}>
                                                        <Pencil className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="hover:text-red-600 hover:bg-red-50"
                                                    onClick={() => post.id && handleDelete(post.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                )}
            </div>
        </div>
    )
}
