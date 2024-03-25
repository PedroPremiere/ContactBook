import MyContactRow from './index.vue';

export default {
    title: 'Components/Atoms/MyContactRow',
    component: MyContactRow,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        value: new Date(),
        sort: 'date'
    }
};
