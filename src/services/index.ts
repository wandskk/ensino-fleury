export const API_LOCALHOST = process.env.BASE_URL_API;
export const PUBLIC_API_LOCALHOST = process.env.NEXT_PUBLIC_BASE_URL_API;

export async function fetchFromApi(url: string, options?: RequestInit) {
    const response = await fetch(url, {
        ...options,
        next: {
            revalidate: 0
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AUTH_TOKEN || process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            ...(options && options.headers),
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }

    return response.json();
}