<template>
    <div class="d-flex justify-space-evenly mb-1 bg-surface-variant">
        <div v-for="item in items" :key="item" class="flex-grow-1 ma-2 pa-2">
            <my-card
                :id="item.id"
                :title="item.name"
                :subtitle="item.phone"
                :favorite="item.favorite"
                :create-date="item.createDate.toString()"
            ></my-card>
        </div>
    </div>
</template>

<script>
import MyCard from '@/components/atoms/card/index.vue';

export default {
    name: 'MyContactRow',
    components: { MyCard },
    props: {
        items: Array
    }
};
</script>
