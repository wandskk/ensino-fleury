import { fetchFromApi, API_LOCALHOST } from "@/services";

export const FooterServices = {
    getFooter: async () => {
        const populate = [
            'logo',
            'menuItens',
            'info',
            'iconesLinksMediasSociais',
            'iconesLinksMediasSociais.imagem',
            'linkFlutuanteRodape'
        ]
        const response = await fetchFromApi(`${API_LOCALHOST}/api/rodape?populate=${populate}`, {
            method: 'GET',
        });

        return response.data;
    }
}