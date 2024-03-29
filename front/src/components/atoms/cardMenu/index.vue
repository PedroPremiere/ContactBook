<template>
    <v-container class="pa-4 text-center bg-secondary rounded-xl rounded-be-0">
        <v-row no-gutters>
            <v-col>
                <button @click="openDeleteDialog()">
                    <v-icon icon="fas mdi-close-circle" />
                </button>
            </v-col>
            <v-col>
                <button v-if="favorite" @click="editFavorite()">
                    <v-icon icon="fas mdi-star" />
                </button>
                <button v-else @click="editFavorite()">
                    <v-icon icon="fas mdi-star-outline" />
                </button>
            </v-col>
            <v-col>
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
            this.removeContact(this.contact.id);
            this.isDeleteDialogOpen = false;
        },
        openEditDialog() {
            this.isEditDialogOpen = false;
        }
    }
});
</script>
