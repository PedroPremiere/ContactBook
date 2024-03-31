<template>
    <v-dialog v-model="isOpen" width="auto" persistent data-cy="deleteDialog">
        <v-card
            max-width="400"
            :text="text()"
            :title="title()"
            class="bg-warning rounded-xl rounded-be-0"
            data-cy="deleteDialogCard"
        >
            <template #actions>
                <v-btn
                    class="ms-auto bg-success rounded-xl rounded-be-0"
                    text="Yes, Remove"
                    data-cy="deleteDialogConfirmButton"
                    @click="save"
                ></v-btn>
                <v-btn
                    class="ms-auto bg-secondary rounded-xl rounded-be-0"
                    text="No"
                    data-cy="deleteDialogCloseButton"
                    @click="close"
                ></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MyDeleteDialog',
    props: {
        open: Boolean
    },
    emits: ['close'],
    data() {
        return {
            isOpen: false
        };
    },
    computed: {
        ...mapGetters({
            selectedItem: 'selectedItemForDelete'
        })
    },
    watch: {
        open() {
            this.isOpen = this.open;
        }
    },
    mounted() {
        this.isOpen = this.open;
    },
    methods: {
        ...mapActions({
            removeContact: 'delete',
            closeDeleteModal: 'closeDeleteModal'
        }),
        close() {
            this.$emit('close');
        },
        save() {
            this.removeContact(this.selectedItem.id);
            this.closeDeleteModal();
        },
        text() {
            return `${this.$t('dialog.deleteForSure')} ${this.selectedItem.name}?`;
        },
        title() {
            return `${this.$t('dialog.delete')} ${this.selectedItem.name}?`;
        }
    }
};
</script>
