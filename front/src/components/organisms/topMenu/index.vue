<template>
    <v-app-bar :elevation="2" class="bg-primary">
        <template #prepend>
            <v-app-bar-nav-icon />
        </template>

        <v-app-bar-title>{{ $t('title') }}</v-app-bar-title>
        <v-select
            id="v-step-0"
            v-model="$root.$i18n.locale"
            :items="langs"
            class="select-box"
            @update:menu="changeLanguage"
        />

        <template #append> </template>
    </v-app-bar>
</template>

<script>
import './index.css';

export default {
    name: 'TopMenu',
    props: {
        langs: {
            type: Array,
            required: true
        }
    },
    emits: ['changeLanguage'],
    methods: {
        changeLanguage() {
            this.$emit('changeLanguage');
        }
    }
};
</script>
