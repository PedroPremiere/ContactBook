<template>
    <v-container
        class="text-center bg-success rounded-xl rounded-b-0 w-50"
        data-cy="cardMenuContainer"
    >
        <v-row no-gutters class="mb-0 pb-0">
            <v-col class="mb-0 pb-0">
                <button
                    data-cy="cardMenuRemoveButton"
                    @click="openDeleteDialog()"
                >
                    <v-icon icon="fas mdi-close-circle" />
                </button>
            </v-col>
            <v-col class="mb-0 pb-0">
                <button
                    v-if="favorite"
                    data-cy="cardMenuRemoveFromFavoriteButton"
                    @click="editFavorite()"
                >
                    <v-icon icon="fas mdi-star" />
                </button>
                <button
                    v-else
                    data-cy="cardMenuAddToFavoriteButton"
                    @click="editFavorite()"
                >
                    <v-icon icon="fas mdi-star-outline" />
                </button>
            </v-col>
            <v-col class="mb-0 pb-0">
                <button data-cy="cardMenuEditButton" @click="openEditDialog()">
                    <v-icon icon="fas mdi-pencil" />
                </button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardMenu',
    props: {
        favorite: { type: Boolean, default: false }
    },
    emits: ['openDeleteDialog', 'openEditDialog', 'editFavorite'],
    methods: {
        openDeleteDialog() {
            this.$emit('openDeleteDialog');
        },
        openEditDialog() {
            this.$emit('openEditDialog');
        },
        editFavorite() {
            this.$emit('editFavorite');
        }
    }
});
</script>
