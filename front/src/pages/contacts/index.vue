<template>
    <div>
        <v-container class="bg-surface-variant rounded-t-xl h-screen">
            <top-menu
                :langs="langs"
                @setNewContactDialog="setNewContactDialog"
                @changeLanguage="changeLanguage"
            />
            <main-content />
            <bottom-page />
        </v-container>
        <v-tour name="myTour" :steps="steps()" :callbacks="myCallbacks" />
        <my-dialog
            :open="isDialogOpen"
            :text="selectedDialogText.text"
            :title="selectedDialogText.title"
            @close="closeDialog"
            @save="save"
        />
        <my-delete-dialog :open="open" @close="open = false" />
    </div>
</template>

<script>
import dayjs from 'dayjs';

import 'dayjs/locale/pl';
import 'dayjs/locale/de';
import 'dayjs/locale/nl';

import MyDialog from '../../components/molecules/dialog/index.vue';
import { mapActions } from 'vuex';
import MyDeleteDialog from '@/components/molecules/deleteDialog/index.vue';
import { stepsMixin } from '@/services/tour/steps.mixin';
import { changeLanguage } from '@/services/i18nLanguages/changeLanguage.mixin';
import MainContent from '@/components/organisms/mainContent/index.vue';
import BottomPage from '@/components/organisms/bottomNav/index.vue';
import TopMenu from '@/components/organisms/topMenu/index.vue';

export default {
    name: 'ContactsPage',
    components: {
        MyDeleteDialog,
        MyDialog,
        MainContent,
        BottomPage,
        TopMenu
    },
    mixins: [stepsMixin, changeLanguage],
    props: {},
    emits: ['click'],
    data() {
        return {
            langs: ['en', 'pl', 'de', 'nl'],
            isDialogOpen: false,
            selectedDialogText: {
                title: '',
                text: ''
            },
            myCallbacks: {
                onFinish: this.onTourFinish,
                onSkip: this.onTourFinish
            }
        };
    },
    mounted() {
        try {
            this.index();
        } catch (e) {
            console.log(e);
        }

        if (localStorage.Lang != null) this.$i18n.locale = localStorage.Lang;

        dayjs.locale(this.$i18n.locale);
        if (localStorage.tour != 'done') {
            this.$tours['myTour'].start();
        }
    },
    methods: {
        ...mapActions({
            saveContact: 'save',
            index: 'index'
        }),
        closeDialog() {
            this.isDialogOpen = false;
        },
        setNewContactDialog() {
            this.selectedDialogText = {
                title: 'New contact',
                text: ' Add new user to your phone book'
            };
            this.isDialogOpen = true;
        },
        setEditContactDialog() {
            this.selectedDialogText = {
                title: 'Edit',
                text: 'You are updating contact'
            };
            this.isDialogOpen = true;
        },
        save(value) {
            this.saveContact(value);
        },
        onTourFinish() {
            localStorage.tour = 'done';
        }
    }
};
</script>
