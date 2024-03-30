<template>
    <v-row no-gutters>
        <v-container>
            <v-row no-gutters>
                <v-combobox
                    id="v-step-0"
                    v-model="$root.$i18n.locale"
                    label="Language"
                    :items="langs"
                    @update:menu="changeLanguage"
                ></v-combobox>
            </v-row>
            <v-row
                no-gutters
                class="d-flex justify-space-between mb-6 bg-info rounded-xl rounded-be-0 pa-2"
            >
                <h2>{{ $t('title') }}</h2>
            </v-row>
        </v-container>
    </v-row>
</template>

<script>
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
