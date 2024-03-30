<template>
    <v-app>
        <top-menu
            :langs="langs"
            @change-language="changeLanguage($i18n.locale)"
        />
        <v-main class="h-screen">
            <v-container class="bg-white h-screen pa-0 mb-3 mx-auto">
                <main-content class="h-100" />
            </v-container>
            <v-tour name="myTour" :steps="steps()" :callbacks="myCallbacks" />
            <my-dialog
                :open="isDialogOpen"
                :text="selectedDialogText.text"
                :title="selectedDialogText.title"
                @close="closeDialog"
                @save="save"
            />
        </v-main>
        <bottom-page app @set-new-contact-dialog="setNewContactDialog" />
    </v-app>
</template>

<script lang="ts">
import dayjs from 'dayjs';

import 'dayjs/locale/pl';
import 'dayjs/locale/de';
import 'dayjs/locale/nl';

import MyDialog from '../../components/molecules/dialog/index.vue';
import { mapActions } from 'vuex';
import { steps } from '@/services/tour/steps.mixin';
import { changeLanguage } from '@/services/i18nLanguages/changeLanguage.mixin';
import MainContent from '@/components/organisms/mainContent/index.vue';
import BottomPage from '@/components/organisms/bottomNav/index.vue';
import TopMenu from '@/components/organisms/topMenu/index.vue';
import { defineComponent } from 'vue';
import { IContact } from '@/types/contact';

export default defineComponent({
    name: 'ContactsPage',
    components: {
        MyDialog,
        MainContent,
        BottomPage,
        TopMenu
    },
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
        if (localStorage.tour !== 'done') {
            (this as any).$tours.myTour.start();
        }
    },
    methods: {
        ...mapActions({
            saveContact: 'save',
            index: 'index'
        }),
        changeLanguage,
        steps() {
            return steps(this.$t);
        },
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
        save(value: IContact) {
            this.saveContact(value);
        },
        onTourFinish() {
            localStorage.tour = 'done';
        }
    }
});
</script>
