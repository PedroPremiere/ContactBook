<template>
    <v-container class="bg-surface-variant">
        <my-sorting-menu @set-sorting="value => (sort = value)" />
        <v-row>
            <v-col>
                <v-infinite-scroll
                    ref="infinite"
                    height="500"
                    width="100%"
                    @load="load"
                >
                    <contact-list-section
                        :items="sorting(cards)"
                        :sort="sort"
                    />
                </v-infinite-scroll>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import './index.css';
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

    computed: {
        ...mapGetters({
            cards: 'items',
            groupBy1stLetter: 'groupBy1stLetter',
            groupByTimeAgo: 'groupByTimeAgo'
        })
    },

    data: () => ({
        sort: 'name',
        size: 80,
        virtualLength: 12
    }),

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
