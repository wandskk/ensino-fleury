export function isValidTelephone(phoneNumber: string) {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const regex = /^(?:\(?(\d{2})\)?\s?)?(?:9)?(\d{4})(\d{4})$/;

    return regex.test(cleanedPhoneNumber);
}
