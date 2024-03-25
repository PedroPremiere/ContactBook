import MyDeleteDialog from './index.vue';

import { randProductDescription, randProductName } from '@ngneat/falso';

export default {
    title: 'Components/Molecules/DeleteDialog',
    component: MyDeleteDialog,
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
