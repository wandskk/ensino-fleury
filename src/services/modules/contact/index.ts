import { API_LOCALHOST, fetchFromApi } from "@/services"

export const ContactServices = {
    getContactPage: async () => {
        const populate = ['info', 'info.iconesLinksMediasSociais', 'info.iconesLinksMediasSociais.imagem', 'contato'];
        const response = await fetchFromApi(`${API_LOCALHOST}/api/pagina-contato?populate=${populate}`, {
            method: 'GET',
        })

        return response.data;
    },
    getContactSeo: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/pagina-contato?populate=seo`, {
            method: 'GET',
        })

        return response.data.seo;
    }
}