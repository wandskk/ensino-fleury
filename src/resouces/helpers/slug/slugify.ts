export const slugify = (text: string, flag: boolean): string => {
    const textNoAccents = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return flag ? textNoAccents.replace(/\s+/g, '-').toLowerCase() : textNoAccents.replace(/-/g, ' ')
}