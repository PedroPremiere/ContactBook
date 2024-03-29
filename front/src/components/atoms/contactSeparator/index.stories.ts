import MyContactsSeparator from './index.vue';

export default {
    title: 'Components/Atoms/ContactsSeparator',
    component: MyContactsSeparator,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        value: new Date(),
        sort: 'date'
    }
};
