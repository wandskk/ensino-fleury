export function isValidName(name: string) {
    const regex = /^[a-zA-Z\u00C0-\u017F\s']+$/;
    const lowerCaseName = name.toLowerCase();

    if (!regex.test(name) || lowerCaseName.includes("teste")) return false;
    return true;
}
