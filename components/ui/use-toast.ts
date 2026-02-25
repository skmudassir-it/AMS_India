"use client"

import * as React from "react"

// Simplified toast for the purpose of fixing the error
// In a real shadcn setup, this would be much more complex

export function useToast() {
    const toast = ({ title, description, variant }: { title?: string, description?: string, variant?: string }) => {
        // For now, let's just use alert as a placeholder to prevent crashes
        // The user can implement a proper toast later if needed
        console.log(`Toast: ${title} - ${description} (${variant || 'default'})`)
        alert(`${title}\n${description}`)
    }

    return { toast }
}
