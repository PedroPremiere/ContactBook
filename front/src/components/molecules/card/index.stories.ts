import {
    randBoolean,
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';

import MyCard from './index.vue';

export default {
    title: 'Components/Molecules/Card',
    component: MyCard,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        contact: {
            name: randFullName(),
            phone: randPhoneNumber(),
            createDate: randRecentDate(),
            id: randUuid(),
            favorite: randBoolean()
        }
    }
};
