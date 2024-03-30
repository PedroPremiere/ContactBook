<template>
    <div class="mt-0 pt-0 w-100">
        <div v-for="(value, key) in items" :key="key" class="mt-0 pt-0 w-100">
            <my-contacts-separator :sort="sort" :value="key.toString()" />
            <div
                v-for="(subItems, keySubItems) in chunk(value, perRow)"
                :key="keySubItems"
                class="mt-0 pt-0"
            >
                <my-contact-row :items="subItems" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import MyContactsSeparator from '@/components/atoms/contactSeparator/index.vue';
import MyContactRow from '@/components/atoms/contactRow/index.vue';
import { IContact } from '@/types/contact';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'ContactListSection',
    components: { MyContactsSeparator, MyContactRow },
    props: {
        items: {
            type: Object as PropType<Record<string, IContact[]>>,
            default: () => {
                return {};
            }
        },
        sort: {
            type: String,
            default: 'name'
        }
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
        chunk(arr: IContact[], size: number) {
            return Array.from(
                { length: Math.ceil(arr.length / size) },
                (v, i) => arr.slice(i * size, i * size + size)
            );
        }
    }
});
</script>
