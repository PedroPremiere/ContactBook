<template>
    <div>
        <v-card
            class="mx-auto pa-4 text-center bg-info rounded-xl rounded-be-0"
            :subtitle="contact.phone"
            :title="contact.name"
        >
            <template #prepend>
                <my-avatar :name="contact.name" />
            </template>
            <template #append>
                <span class="d-none d-lg-flex d-xl-none">
                    {{ createdTimeToNow(contact.createDate) }}
                    <v-tooltip activator="parent" location="top">
                        {{ contact.createDate }}
                    </v-tooltip>
                </span>
            </template>
            <v-card-actions>
                <card-menu
                    @open-delete-dialog="isDeleteDialogOpen = true"
                    @open-edit-dialog="editFavorite(contact.id)"
                />
            </v-card-actions>
        </v-card>
        <my-delete-dialog
            :open="isDeleteDialogOpen"
            @close="isDeleteDialogOpen = false"
            @remove-item="removeItem"
        />
        <my-dialog
            :open="isEditDialogOpen"
            :text="selectedDialogText.text"
            :title="selectedDialogText.title"
            :name="contact.name"
            :phone="contact.phone"
            @close="closeEditDialog"
            @save="edit"
        />
    </div>
</template>

<script lang="ts">
import MyAvatar from '../../atoms/avatar/index.vue';
import MyDeleteDialog from '@/components/molecules/deleteDialog/index.vue';
import { mapActions } from 'vuex';
import MyDialog from '@/components/molecules/dialog/index.vue';
import { defineComponent, PropType } from 'vue';
import { IContact } from '@/types/contact';
import CardMenu from '@/components/atoms/cardMenu/index.vue';
import { createdTimeToNow } from '@/services/helpers/createdTimeToNow';

export default defineComponent({
    name: 'MyCard',
    components: { MyDialog, MyAvatar, MyDeleteDialog, CardMenu },
    props: {
        contact: {
            type: Object as PropType<IContact>,
            default: () => {
                return {
                    name: '',
                    phone: '',
                    createDate: '',
                    id: '',
                    favorite: false
                };
            }
        }
    },
    emits: ['click'],
    data() {
        return {
            isDeleteDialogOpen: false,
            isEditDialogOpen: false,
            selectedDialogText: {
                title: 'Edit',
                text: 'Edit'
            }
        };
    },
    methods: {
        ...mapActions({
            removeContact: 'delete',
            editContact: 'edit',
            editFavorite: 'editFavorite'
        }),
        createdTimeToNow(value: string) {
            return createdTimeToNow(value);
        },
        removeItem() {
            this.removeContact(this.contact.id);
            this.isDeleteDialogOpen = false;
        },
        closeEditDialog() {
            this.isEditDialogOpen = false;
        },
        edit(value: IContact) {
            this.editContact({
                id: this.contact.id,
                phone: value.phone,
                name: value.name
            });
        }
    }
});
</script>
