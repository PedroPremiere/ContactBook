<template>
    <v-avatar color="info" size="54">
        <span class="text-h5">{{ initials }}</span>
    </v-avatar>
</template>

<script>
import './index.css';

export default {
    name: 'MyAvatar',
    props: {
        initials: {
            type: String,
            default: ''
        }
    },

    emits: ['click']
};
</script>
