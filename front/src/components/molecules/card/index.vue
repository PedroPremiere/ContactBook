<template>
    <div :id="generateId()" data-cy="card">
        <v-card
            class="mx-0 pa-3 pb-0 text-center bg-info rounded-xl rounded-be-0"
            :subtitle="contact.phone"
            :title="contact.name"
        >
            <template #prepend>
                <my-avatar :name="contact.name" />
            </template>
            <template #append>
                <span class="d-none d-lg-flex d-xl-none" data-cy="cardDates">
                    {{ createdTimeToNow(contact.createDate) }}
                    <v-tooltip activator="parent" location="top">
                        {{ contact.createDate }}
                    </v-tooltip>
                </span>
            </template>
            <v-card-actions class="mb-0 pb-0">
                <card-menu
                    data-cy="cardMenu"
                    @open-delete-dialog="openDeleteModal(contact)"
                    @open-edit-dialog="openEditModal(contact)"
                    @edit-favorite="editFavorite(contact.id)"
                />
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">
import MyAvatar from '../../atoms/avatar/index.vue';

import { mapActions } from 'vuex';
import { defineComponent, PropType } from 'vue';
import { IContact } from '@/types/contact';
import CardMenu from '@/components/atoms/cardMenu/index.vue';
import { createdTimeToNow } from '@/services/helpers/createdTimeToNow';

export default defineComponent({
    name: 'MyCard',
    components: { MyAvatar, CardMenu },
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
            isEditDialogOpen: false,
            selectedDialogText: {
                title: 'Edit',
                text: 'Edit'
            }
        };
    },
    methods: {
        ...mapActions({
            editFavorite: 'editFavorite',
            openDeleteModal: 'openDeleteModal',
            openEditModal: 'openEditModal'
        }),
        createdTimeToNow(value: string) {
            return createdTimeToNow(value);
        },
        generateId() {
            return `card${this.contact.id}`;
        }
    }
});
</script>
