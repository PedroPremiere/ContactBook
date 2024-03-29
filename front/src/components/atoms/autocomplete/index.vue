<template>
    <v-autocomplete
        label="Autocomplete"
        :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming'
        ]"
        data-v-step="3"
    ></v-autocomplete>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyAutocomplete',

    props: {},

    emits: ['click']
});
</script>
