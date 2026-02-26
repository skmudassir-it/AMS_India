"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getBlogPosts, BlogPost } from "@/lib/blog"
import { deleteBlogPostAction } from "./actions"
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
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [pin, setPin] = useState("")
    const [error, setError] = useState("")
    const { toast } = useToast()

    useEffect(() => {
        const auth = localStorage.getItem("admin_authenticated")
        if (auth === "true") {
            setIsAuthenticated(true)
            loadPosts()
        } else {
            setLoading(false)
        }
    }, [])

    async function handlePinSubmit(e: React.FormEvent) {
        e.preventDefault()
        const correctPin = process.env.NEXT_PUBLIC_ADMIN_PIN || "0970"

        if (pin === correctPin) {
            setIsAuthenticated(true)
            localStorage.setItem("admin_authenticated", "true")
            setLoading(true)
            loadPosts()
        } else {
            setError("Invalid PIN. Please try again.")
            setPin("")
        }
    }

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
            await deleteBlogPostAction(id)
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

    if (!isAuthenticated) {
        return (
            <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-primary mb-2">Admin Access</h1>
                        <p className="text-foreground/60">Enter your PIN to manage blog posts.</p>
                    </div>

                    <form onSubmit={handlePinSubmit} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="Enter PIN"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-center text-2xl tracking-[1em]"
                                maxLength={4}
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                        </div>
                        <Button type="submit" className="w-full bg-[#BB290E] hover:bg-[#96210b] py-6 text-lg">
                            Access Dashboard
                        </Button>
                    </form>
                </div>
            </div>
        )
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
                    <Button
                        variant="ghost"
                        className="text-foreground/60 hover:text-red-600"
                        onClick={() => {
                            localStorage.removeItem("admin_authenticated")
                            setIsAuthenticated(false)
                        }}
                    >
                        Logout
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

