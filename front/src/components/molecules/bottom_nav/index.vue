<template>
    <v-layout class="overflow-visible" style="height: 56px">
        <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
            <v-btn data-v-step="favoriteOnly" @click="changeFavoriteOnly(true)">
                <v-icon icon="fas mdi-star" />

                <span>Favorites</span>
            </v-btn>

            <v-btn data-v-step="allContacts" @click="changeFavoriteOnly(false)">
                <v-icon icon=" mdi-menu" />

                <span>Contacts</span>
            </v-btn>
        </v-bottom-navigation>
    </v-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MyButton',
    emits: ['change'],
    data: () => ({ value: 1 }),
    computed: {
        ...mapGetters({
            favoriteOnly: 'favoritesOnly'
        }),

        color() {
            switch (this.value) {
                case 0:
                    return 'indigo';
                case 1:
                    return 'teal';
                default:
                    return 'blue-grey';
            }
        }
    },
    mounted() {
        if (this.favoriteOnly) {
            this.value = 0;
        }
    },
    methods: {
        ...mapActions({
            changeFavoriteOnly: 'favoriteOnly'
        })
    }
};
</script>
