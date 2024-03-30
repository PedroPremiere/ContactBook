import Top from './index.vue';

export default {
    title: 'Components/Organisms/Top',
    component: Top,
    tags: ['autodocs'],
    decorators: [() => ({ template: '    <v-layout><story/></v-layout>' })]
};

export const Primary = {
    args: {
        langs: ['en', 'de', 'pl', 'nl']
    }
};
