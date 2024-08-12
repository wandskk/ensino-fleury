export const convertDate = (data: string): string => {
    const months = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const [yeah, month, day] = data.split('-');
    const monthName = months[parseInt(month) - 1];

    return `${parseInt(day)} de ${monthName}`;
}