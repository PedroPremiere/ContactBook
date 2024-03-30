<template>
    <v-row no-gutters>
        <my-bottom-nav @set-new-contact-dialog="setNewContactDialog" />
    </v-row>
</template>

<script>
import MyBottomNav from '@/components/molecules/bottom_nav/index.vue';

export default {
    name: 'BottomPage',
    components: { MyBottomNav },
    emits: ['setNewContactDialog'],
    methods: {
        setNewContactDialog() {
            this.$emit('setNewContactDialog');
        }
    }
};
</script>
