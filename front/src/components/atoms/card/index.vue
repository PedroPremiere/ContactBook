<template>
    <div>
        <v-card
            class="mx-auto pa-4 text-center bg-primary rounded-xl rounded-be-0"
            :subtitle="subtitle"
            :title="title"
        >
            <template #prepend>
                <my-avatar :initials="initials" />
            </template>
            <template #append>
                <span>
                    {{ createdTimeToNow }}
                    <v-tooltip activator="parent" location="top">{{
                        createDate
                    }}</v-tooltip>
                </span>
            </template>
            <v-card-actions>
                <v-container
                    class="pa-4 text-center bg-secondary rounded-xl rounded-be-0"
                >
                    <v-row no-gutters>
                        <v-col>
                            <button @click="isDeleteDialogOpen = true">
                                <v-icon icon="fas mdi-close-circle" />
                            </button>
                        </v-col>
                        <v-col>
                            <button v-if="favorite" @click="editFavorite(id)">
                                <v-icon icon="fas mdi-star" />
                            </button>
                            <button v-else @click="editFavorite(id)">
                                <v-icon icon="fas mdi-star-outline" />
                            </button>
                        </v-col>
                        <v-col>
                            <button @click="isEditDialogOpen = true">
                                <v-icon icon="fas mdi-pencil" />
                            </button>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
        <my-delete-dialog
            :open="isDeleteDialogOpen"
            @close="isDeleteDialogOpen = false"
            @removeItem="removeItem"
        />
        <my-dialog
            :open="isEditDialogOpen"
            :text="selectedDialogText.text"
            :title="selectedDialogText.title"
            :name="title"
            :phone="subtitle"
            @close="closeEditDialog"
            @save="edit"
        />
    </div>
</template>

<script>
import MyAvatar from '../avatar/index.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import MyDeleteDialog from '@/components/molecules/deleteDialog/index.vue';
import { mapActions } from 'vuex';
import MyDialog from '@/components/molecules/dialog/index.vue';

export default {
    name: 'MyCard',
    components: { MyDialog, MyAvatar, MyDeleteDialog },
    props: {
        title: String,
        subtitle: String,
        createDate: String,
        id: String,
        favorite: Boolean
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
    computed: {
        createdTimeToNow() {
            dayjs.extend(relativeTime);
            return dayjs(this.createDate).fromNow();
        },
        initials() {
            const split = this.title.split(' ');
            const initials = [];
            for (let item of split) {
                initials.push(item[0]);
            }

            return initials.join('');
        }
    },
    methods: {
        ...mapActions({
            removeContact: 'delete',
            editContact: 'edit',
            editFavorite: 'editFavorite'
        }),
        removeItem() {
            this.removeContact(this.id);
            this.isDeleteDialogOpen = false;
        },
        closeEditDialog() {
            this.isEditDialogOpen = false;
        },
        edit(value) {
            this.editContact({
                id: this.id,
                phone: value.phone,
                name: value.name
            });
        }
    }
};
</script>
