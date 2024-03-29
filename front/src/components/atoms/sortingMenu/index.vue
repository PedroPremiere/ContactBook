<template>
    <v-row>
        <v-col>
            <v-btn data-v-step="5" @click="setSorting('name')">
                {{ $t('sortBy') }}
                {{ $t('name') }}
            </v-btn>
        </v-col>
        <v-col>
            <v-btn data-v-step="4" @click="setSorting('date')">
                {{ $t('sortBy') }}
                {{ $t('date') }}
            </v-btn>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MySortingMenu',
    props: {},
    emits: ['setSorting'],
    methods: {
        setSorting(value: string) {
            this.$emit('setSorting', value);
        }
    }
});
</script>
