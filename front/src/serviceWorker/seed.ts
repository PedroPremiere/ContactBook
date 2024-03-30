import {
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';
import { IContact } from '@/types/contact';

export function seed(contacts: IContact[], count = 10) {
    for (let i = 0; i < count; i++) {
        contacts.push({
            name: randFullName(),
            phone: randPhoneNumber(),
            createDate: randRecentDate().toUTCString(),
            id: randUuid(),
            favorite: false
        });
    }
}
