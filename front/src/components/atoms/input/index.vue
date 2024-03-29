<template>
    <v-text-field
        v-model="firstname"
        :counter="20"
        :rules="nameRules"
        label="First name"
        required
    >
    </v-text-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyInput',
    props: {},

    emits: ['click'],
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            (value: string) => {
                if (value) return true;

                return 'Name is required.';
            },
            (value: string) => {
                if (value?.length <= 20) return true;

                return 'Name must be less than 20 characters.';
            }
        ],
        email: '',
        emailRules: [
            (value: string) => {
                if (value) return true;

                return 'E-mail is required.';
            },
            (value: string) => {
                if (/.+@.+\..+/.test(value)) return true;

                return 'E-mail must be valid.';
            }
        ]
    })
});
</script>
