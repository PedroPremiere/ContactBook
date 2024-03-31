import {
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';

export function contactSeeder() {
    return {
        name: randFullName(),
        phone: randPhoneNumber(),
        createDate: randRecentDate().toUTCString(),
        id: randUuid(),
        favorite: false
    };
}
