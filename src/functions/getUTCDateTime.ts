import { monthNames } from '../constants/monthNames';

export function getUTCDateTime() {
    const now = new Date();

    const formattedDate = `Last updated ${monthNames[now.getUTCMonth()]} ${now.getUTCDate()}, ${now.getUTCFullYear()}, ${now.getUTCHours()}:${String(
        now.getUTCMinutes(),
    ).padStart(2, '0')} UTC`;

    return formattedDate;
}
