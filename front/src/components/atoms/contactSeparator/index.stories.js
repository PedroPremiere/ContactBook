import MyContactsSeparator from './index.vue';

export default {
    title: 'Components/Atoms/Card',
    component: MyContactsSeparator,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        value: new Date(),
        sort: 'date'
    }
};
