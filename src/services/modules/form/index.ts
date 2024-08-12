import { fetchFromApi, PUBLIC_API_LOCALHOST } from "@/services"

export const FormServices = {
    sendSubscribeForm: async (name: string, email: string, fone: string, areaOfActivity: string) => {
        const response = await fetchFromApi(`${PUBLIC_API_LOCALHOST}/api/news-letters`, {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    name,
                    email,
                    fone,
                    areaOfActivity
                }
            }),
        })

        return response.data;
    },
    sendContactForm: async (name: string, email: string, fone: string, areaOfActivity: string, message: string) => {
        const response = await fetchFromApi(`${PUBLIC_API_LOCALHOST}/api/contact/send`, {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    name,
                    email,
                    fone,
                    areaOfActivity,
                    message,
                }
            }),
        })

        return response;
    }
}