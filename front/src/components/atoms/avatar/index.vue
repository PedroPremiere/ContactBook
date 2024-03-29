<template>
    <v-avatar color="info" size="54">
        <span class="text-h5">{{ initials }}</span>
    </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyAvatar',
    props: {
        initials: {
            type: String,
            default: ''
        }
    },

    emits: ['click']
});
</script>
