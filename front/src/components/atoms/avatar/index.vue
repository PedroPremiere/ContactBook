<template>
    <v-avatar color="primary" size="54">
        <span class="text-h5">{{ initials(name) }}</span>
    </v-avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { initials } from '@/services/helpers/initials';

export default defineComponent({
    name: 'MyAvatar',
    props: {
        name: {
            type: String,
            default: ''
        }
    },

    emits: ['click'],
    methods: {
        initials(value: string) {
            return initials(value);
        }
    }
});
</script>
