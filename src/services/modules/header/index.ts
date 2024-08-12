import { fetchFromApi, API_LOCALHOST } from "@/services";

export const HeaderServices = {
    getHeader: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/cabecalho?populate%5B0%5D=logo,menuItens,busca,cta&populate%5B1%5D=menuItens.subItens`, {
            method: 'GET',
        });

        return response.data;
    }
}