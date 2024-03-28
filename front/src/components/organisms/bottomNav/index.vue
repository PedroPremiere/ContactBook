<template>
    <v-row no-gutters>
        <my-bottom-nav />
    </v-row>
</template>

<script>
import MyBottomNav from '@/components/molecules/bottom_nav/index.vue';

export default {
    name: 'BottomPage',
    components: { MyBottomNav }
};
</script>
