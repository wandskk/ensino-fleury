export const coursesRequestWithFilters = (
    search: string,
    courseformatsSelected: string[],
    knowledgeAreasSelected: string[],
    page: number,
    pageSize: number
) => {
    const searchUrl = search.length > 0 ? `&filters[$or][0][titulo][$contains]=${search}&filters[$or][1][descricaoSimplificada][$contains]=${search}` : "";

    let courseformatsUrl = "";
    if (courseformatsSelected.length > 0) {
        const courseFormatsFilters = courseformatsSelected.map((courseFormat, i) => {
            return `filters[$and][0][$or][${i}][modalidade][rotulo][$eq]=${courseFormat}`;
        }).join("&");
        courseformatsUrl = `&${courseFormatsFilters}`;
    }

    let knowledgeAreasUrl = "";
    if (knowledgeAreasSelected.length > 0) {
        const knowledgeAreasFilters = knowledgeAreasSelected.map((knowledgeArea, i) => {
            return `filters[$and][1][$or][${i}][area][rotulo][$eq]=${knowledgeArea}`;
        }).join("&");
        knowledgeAreasUrl = `&${knowledgeAreasFilters}`;
    }

    const paginationUrl = `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    return searchUrl + courseformatsUrl + knowledgeAreasUrl + paginationUrl;
}
