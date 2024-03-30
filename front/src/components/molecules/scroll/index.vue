<template>
    <v-container class="pa-0 mx-0">
        <my-sorting-menu @set-sorting="value => (sort = value)" />
        <v-row class="pa-0 mx-0">
            <v-col>
                <v-list lines="one" class="bg-white">
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
