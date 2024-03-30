<template>
    <v-row no-gutters>
        <my-scroll />
        <div class="mx-0 mb-7 pa-7"></div>
    </v-row>
</template>

<script>
import MyScroll from '@/components/molecules/scroll/index.vue';

export default {
    name: 'MainContent',
    components: { MyScroll }
};
</script>
