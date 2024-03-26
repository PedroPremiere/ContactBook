<template>
    <div>
        <div v-for="(key, value) in items" :key="(key, value)">
            <my-contacts-separator :sort="sort" :value="value" />
            <div v-for="subItems in chunk(key, perRow)" :key="subItems">
                <my-contact-row :items="subItems" />
            </div>
        </div>
    </div>
</template>

<script>
import MyContactsSeparator from '@/components/atoms/contactSeparator/index.vue';
import MyContactRow from '@/components/atoms/contactRow/index.vue';

export default {
    name: 'ContactListSection',
    components: { MyContactsSeparator, MyContactRow },
    props: {
        items: Array,
        sort: String
    },
    computed: {
        perRow() {
            switch (this.$vuetify.display.name) {
                case 'xs':
                    return 1;
                case 'sm':
                    return 1;
                case 'md':
                    return 2;
                case 'lg':
                    return 3;
                case 'xl':
                    return 3;
            }
            return 1;
        }
    },

    methods: {
        chunk(arr, size) {
            return Array.from(
                { length: Math.ceil(arr.length / size) },
                (v, i) => arr.slice(i * size, i * size + size)
            );
        }
    }
};
</script>
