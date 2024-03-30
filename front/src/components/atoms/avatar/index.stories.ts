import MyAvatar from './index.vue';
import { randSuperhero } from '@ngneat/falso';

export default {
    title: 'Components/Atoms/Avatar',
    component: MyAvatar,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        name: randSuperhero().realName
    }
};
