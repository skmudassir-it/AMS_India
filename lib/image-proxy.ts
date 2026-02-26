"use server"

/**
 * Downloads an image from an external URL and uploads it to the custom file server.
 * Returns the new URL provided by the custom server.
 */
export async function mirrorImage(externalUrl: string): Promise<string> {
    if (!externalUrl || !externalUrl.startsWith('http')) {
        return externalUrl;
    }

    try {
        const response = await fetch(externalUrl);
        if (!response.ok) throw new Error(`Failed to download image from ${externalUrl}`);

        const blob = await response.blob();

        const formData = new FormData();
        const urlParts = externalUrl.split('/');
        const originalFilename = urlParts[urlParts.length - 1].split(/[?#]/)[0];
        const extension = originalFilename.includes('.') ? originalFilename.split('.').pop() : 'png';
        const filename = `${Date.now()}.${extension}`;

        formData.append('file', blob, filename);

        const uploadResponse = await fetch('http://18.226.187.11/api/files/upload', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer lzPSnBmSLRDvxy84'
            },
            body: formData
        });

        if (!uploadResponse.ok) {
            const errorText = await uploadResponse.text();
            throw new Error(`Upload to mirror server failed: ${errorText}`);
        }

        const result = await uploadResponse.json();
        const mirroredUrl = result.fileUrl || result.url || result.data?.url;

        if (!mirroredUrl) {
            if (result.filename) {
                return `http://18.226.187.11/uploads/${result.filename}`;
            }
            throw new Error("Upload succeeded but no URL was returned by the server");
        }

        return mirroredUrl;
    } catch (error) {
        console.error("Error mirroring image:", error);
        throw error;
    }
}
