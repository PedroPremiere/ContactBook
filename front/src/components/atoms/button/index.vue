<template>
    <v-btn prepend-icon="$vuetify"> Button </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyButton',

    props: {},

    emits: ['click']
});
</script>
