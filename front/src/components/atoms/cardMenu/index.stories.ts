import { randBoolean } from '@ngneat/falso';

import CardMenu from './index.vue';

export default {
    title: 'Components/Atoms/CardMenu',
    component: CardMenu,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        favorite: randBoolean()
    }
};
