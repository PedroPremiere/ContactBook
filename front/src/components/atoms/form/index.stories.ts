import MyForm from './index.vue';
import { randPhoneNumber, randSuperhero } from '@ngneat/falso';

export default {
    title: 'Components/Atoms/Form',
    component: MyForm,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        firstname: randSuperhero().realName,
        phone: randPhoneNumber()
    }
};
