import {
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';

export function seed(contacts) {
    for (let i = 0; i < 10; i++) {
        contacts.push({
            name: randFullName(),
            phone: randPhoneNumber(),
            createDate: randRecentDate(),
            id: randUuid(),
            favorite: false
        });
    }
}
