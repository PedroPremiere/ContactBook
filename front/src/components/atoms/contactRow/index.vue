<template>
    <div
        class="d-flex justify-space-evenly mb-1 pa-0 mx-0"
        data-cy="contactRow"
    >
        <div v-for="item in items" :key="item.id" class="flex-grow-1 pa-2">
            <my-card :contact="item"></my-card>
        </div>
    </div>
</template>

<script lang="ts">
import MyCard from '@/components/molecules/card/index.vue';
import { defineComponent, PropType } from 'vue';
import { IContact } from '@/types/contact';

export default defineComponent({
    name: 'MyContactRow',
    components: { MyCard },
    props: {
        items: {
            type: Object as PropType<IContact[]>,
            default: () => {
                return [] as IContact[];
            }
        }
    }
});
</script>
