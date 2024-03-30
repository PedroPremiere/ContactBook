<template>
    <v-row class="my-0 py-0">
        <v-col align-self="end" class="my-0 py-0">
            <div class="d-flex align-content-end flex-wrap my-0 py-0">
                <v-btn
                    data-v-step="5"
                    class="bg-secondary rounded-xl rounded-t-0 my-0 py-0"
                    @click="setSorting('name')"
                >
                    {{ $t('sortBy') }}
                    {{ $t('name') }}
                </v-btn>

                <v-btn
                    data-v-step="4"
                    class="bg-info rounded-xl rounded-t-0 my-0 py-0"
                    @click="setSorting('date')"
                >
                    {{ $t('sortBy') }}
                    {{ $t('date') }}
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MySortingMenu',
    emits: ['setSorting'],
    methods: {
        setSorting(value: string) {
            this.$emit('setSorting', value);
        }
    }
});
</script>
