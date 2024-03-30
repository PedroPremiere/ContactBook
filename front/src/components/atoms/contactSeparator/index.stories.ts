import MyContactsSeparator from './index.vue';
import { randSuperhero } from '@ngneat/falso';

export default {
    title: 'Components/Atoms/ContactsSeparator',
    component: MyContactsSeparator,
    tags: ['autodocs']
};

export const ByDate = {
    args: {
        value: new Date().toDateString(),
        sort: 'date'
    }
};

export const ByName = {
    args: {
        value: randSuperhero().realName[0],
        sort: 'name'
    }
};
