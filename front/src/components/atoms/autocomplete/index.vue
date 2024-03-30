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
        class="w-50"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//todo implement
export default defineComponent({
    name: 'MyAutocomplete',

    props: {},

    emits: ['click']
});
</script>
