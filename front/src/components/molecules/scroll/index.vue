<template>
    <v-container class="pa-0 mx-0">
        <my-sorting-menu @set-sorting="value => (sort = value)" />
        <!--
        todo implement
        <v-row>
            <v-col align-self="end" class="my-0 py-0">
                <my-autocomplete data-v-step="2" />
            </v-col>
        </v-row>
        -->
        <v-row class="pa-0 mx-0">
            <v-col class="pa-0 mx-0" cols="12">
                <v-list lines="one" class="bg-white w-100">
                    <contact-list-section :items="sorting()" :sort="sort" />
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { mapGetters } from 'vuex';
import MySortingMenu from '@/components/atoms/sortingMenu/index.vue';
import ContactListSection from '@/components/atoms/contactListSection/index.vue';

export default {
    name: 'MyInfiniteScroll',
    components: {
        MySortingMenu,
        ContactListSection
    },
    data: () => ({
        sort: 'name',
        size: 80,
        virtualLength: 12
    }),
    computed: {
        ...mapGetters({
            cards: 'items',
            groupBy1stLetter: 'groupBy1stLetter',
            groupByTimeAgo: 'groupByTimeAgo'
        })
    },
    methods: {
        createdTimeToNow(createDate) {
            dayjs.extend(relativeTime);
            return dayjs(createDate).fromNow();
        },
        sorting() {
            if (this.sort === 'date') {
                return this.groupByTimeAgo;
            }

            return this.groupBy1stLetter;
        },

        load({ side, done }) {
            console.log(side);

            console.log(this.$i18n.locale);
            done('ok');
        }
    }
};
</script>
