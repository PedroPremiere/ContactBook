import MyButton from './index.vue';

export default {
    title: 'Components/Atoms/Button',
    component: MyButton,
    tags: ['autodocs']
};

export const Primary = {
    args: {
        primary: true,
        label: 'Button'
    }
};
