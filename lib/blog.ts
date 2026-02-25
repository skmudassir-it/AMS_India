import { supabase } from './supabase'

export interface BlogPost {
    id?: string;
    created_at?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
}

/**
 * Fetch all blog posts from Supabase
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching blog posts:', error)
        return []
    }

    return data || []
}

/**
 * Fetch a single blog post by its slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        console.error('Error fetching blog post:', error)
        return undefined
    }

    return data
}

/**
 * Create a new blog post
 */
export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at'>) {
    const { data, error } = await supabase
        .from('blogs')
        .insert([post])
        .select()

    if (error) {
        throw new Error(`Error creating blog post: ${error.message}`)
    }

    return data?.[0]
}

/**
 * Update an existing blog post
 */
export async function updateBlogPost(id: string, updates: Partial<BlogPost>) {
    const { data, error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', id)
        .select()

    if (error) {
        throw new Error(`Error updating blog post: ${error.message}`)
    }

    return data?.[0]
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string) {
    const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)

    if (error) {
        throw new Error(`Error deleting blog post: ${error.message}`)
    }

    return true
}
