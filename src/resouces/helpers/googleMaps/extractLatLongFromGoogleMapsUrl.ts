export function extractLatLongFromGoogleMapsUrl(url: string): { lat: number; lng: number } | null {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);

    if (match) {
        const lat = parseFloat(match[1]);
        const lng = parseFloat(match[2]);
        return { lat, lng };
    }

    return null;
}