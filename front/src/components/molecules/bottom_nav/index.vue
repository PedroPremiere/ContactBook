<template>
    <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
        <v-btn data-v-step="favoriteOnly" @click="changeFavoriteOnly(true)">
            <v-icon icon="fas mdi-star" />

            <span>Favorites</span>
        </v-btn>

        <v-btn data-v-step="allContacts" @click="changeFavoriteOnly(false)">
            <v-icon icon=" mdi-menu" />

            <span>Contacts</span>
        </v-btn>
        <v-btn data-v-step="allContacts" @click="setNewContactDialog">
            <v-icon icon="fas mdi-plus" class="v-step-1" />

            <span>Add New</span>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MyButton',
    emits: ['change', 'setNewContactDialog'],
    data: () => ({ value: 1 }),
    computed: {
        ...mapGetters({
            favoriteOnly: 'favoritesOnly'
        }),

        color() {
            switch (this.value) {
                case 0:
                    return '#9CE5CB';
                case 1:
                    return '#FFDDD0';
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
        }),
        setNewContactDialog() {
            this.$emit('setNewContactDialog');
        }
    }
};
</script>
