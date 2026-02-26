'use server'

import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { BlogPost } from '@/lib/blog'

/**
 * Server action to create a new blog post
 */
export async function createBlogPostAction(post: Omit<BlogPost, 'id' | 'created_at'>) {
    const { data, error } = await supabaseAdmin
        .from('blogs')
        .insert([post])
        .select()

    if (error) {
        throw new Error(`Error creating blog post: ${error.message}`)
    }

    revalidatePath('/blog')
    return data?.[0]
}

/**
 * Server action to update an existing blog post
 */
export async function updateBlogPostAction(id: string, updates: Partial<BlogPost>) {
    // Remove individual fields that shouldn't be updated directly via Partial
    const { id: _, created_at: __, ...validUpdates } = updates as any;

    const { data, error } = await supabaseAdmin
        .from('blogs')
        .update(validUpdates)
        .eq('id', id)
        .select()

    if (error) {
        throw new Error(`Error updating blog post: ${error.message}`)
    }

    revalidatePath('/blog')
    revalidatePath(`/blog/${data?.[0]?.slug}`)
    return data?.[0]
}

/**
 * Server action to delete a blog post
 */
export async function deleteBlogPostAction(id: string) {
    const { error } = await supabaseAdmin
        .from('blogs')
        .delete()
        .eq('id', id)

    if (error) {
        throw new Error(`Error deleting blog post: ${error.message}`)
    }

    revalidatePath('/blog')
    return true
}
