<template>
    <v-row no-gutters>
        <v-container class="pa-0 mx-0">
            <v-row no-gutters>
                <my-scroll />
            </v-row>
        </v-container>
    </v-row>
</template>

<script>
import MyScroll from '@/components/molecules/scroll/index.vue';

export default {
    name: 'MainContent',
    components: { MyScroll }
};
</script>
