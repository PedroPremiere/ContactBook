import MyDialog from './index.vue';

import { randProductDescription, randProductName } from '@ngneat/falso';

export default {
    title: 'Components/Molecules/Dialog',
    component: MyDialog,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
        text: randProductDescription(),
        title: randProductName(),
        open: true
    }
};
