import { API_LOCALHOST, fetchFromApi } from "@/services"

export const HomeServices = {
    getHome: async () => {

        const populate = [
            'primeiraSecao',
            'primeiraSecao.slide',
            'primeiraSecao.imagemDeFundo',
            'segundaSecao',
            'segundaSecao.itens',
            'segundaSecao.itens.imagem',
            'segundaSecao.itens.imagem.url',
            'terceiraSecao',
            'terceiraSecao.itens',
            'quartaSecao',
            'quartaSecao.imagemDeFundo',
            'quintaSecao',
            'quintaSecao.listaDePerguntas',
            'quintaSecao.formMantenhaseInformado',
            'quintaSecao.formMantenhaseInformado.inputs',
            'sextaSecao',
            'sextaSecao.botoes',
        ].join(',');

        const response = await fetchFromApi(`${API_LOCALHOST}/api/home?populate=${populate}`, {
            method: 'GET',
        })

        return response.data;
    },
    getHomeSeo: async () => {
        const response = await fetchFromApi(`${API_LOCALHOST}/api/home?populate=seo`, {
            method: 'GET',
        })

        return response.data.seo;
    }
}


