import { API_LOCALHOST, fetchFromApi, PUBLIC_API_LOCALHOST } from "@/services"

export const CoursesServices = {
    getCoursesWithPagination: async (page: number, pageSize: number) => {
        const response = await fetchFromApi(`${PUBLIC_API_LOCALHOST}/api/cursos?populate[0]=modalidade,area,banner&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, {
            method: 'GET',
        })
        return response
    },
    getCoursesWithFilters: async (urlWithParams: string) => {
        const response = await fetchFromApi(`${PUBLIC_API_LOCALHOST}/api/cursos?populate[0]=modalidade,area,banner${urlWithParams}`, {
            method: 'GET',
        })
        return response;
    },
    getCoursesHighlighted: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/cursos?populate[0]=modalidade,area,banner,destaque&pagination[page]=1&pagination[pageSize]=4&filters[destaque][$eq]=true`, {
            method: 'GET',
        })
        return response.data;
    },
    getCoursesSeo: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/pagina-curso?populate=seo`, {
            method: 'GET',
        })
        return response.data;
    },
    getCourseBySlug: async (slug: string) => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/cursos?populate[0]=modalidade,area,banner,menuInfo,video&filters[slug][$eq]=${slug}`, {
            method: 'GET',
        })
        return response;
    },

    getModality: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/modalidades?populate%5B0%5D=menuInfo`, {
            method: 'GET',
        })

        return response.data;
    },
    getAreas: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/areas?populate%5B0%5D=menuInfo`, {
            method: 'GET',
        })

        return response.data;
    }
}