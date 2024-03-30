<template>
    <v-container class="text-center bg-success rounded-xl rounded-b-0 w-50">
        <v-row no-gutters class="mb-0 pb-0">
            <v-col class="mb-0 pb-0">
                <button @click="openDeleteDialog()">
                    <v-icon icon="fas mdi-close-circle" />
                </button>
            </v-col>
            <v-col class="mb-0 pb-0">
                <button v-if="favorite" @click="editFavorite()">
                    <v-icon icon="fas mdi-star" />
                </button>
                <button v-else @click="editFavorite()">
                    <v-icon icon="fas mdi-star-outline" />
                </button>
            </v-col>
            <v-col class="mb-0 pb-0">
                <button @click="openEditDialog()">
                    <v-icon icon="fas mdi-pencil" />
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardMenu',
    props: {
        favorite: { type: Boolean, default: false }
    },
    emits: ['openDeleteDialog', 'openEditDialog'],
    methods: {
        ...mapActions({
            editFavorite: 'editFavorite'
        }),
        openDeleteDialog() {
            this.$emit('openDeleteDialog');
        },
        openEditDialog() {
            this.$emit('openEditDialog');
        }
    }
});
</script>
