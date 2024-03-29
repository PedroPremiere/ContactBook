import { randFullName, randPhoneNumber } from '@ngneat/falso';

import MyCard from './index.vue';

export default {
    title: 'Components/Atoms/Card',
    component: MyCard,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        primary: true,
        title: randFullName(),
        subtitle: randPhoneNumber(),
        label: 'Button'
    }
};
