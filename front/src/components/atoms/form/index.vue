<template>
    <v-form v-model="valid" @submit.prevent>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="firstname"
                        :counter="10"
                        :rules="nameRules"
                        label="First name"
                        hide-details
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        hide-details
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-btn class="mt-2" type="submit" :disabled="!valid" block
            >Submit</v-btn
        >
    </v-form>
</template>

<script>
import './index.css';

export default {
    name: 'MyForm',
    props: {},

    emits: ['click'],
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
            value => {
                if (value) return true;

                return 'Name is required.';
            },
            value => {
                if (value?.length <= 10) return true;

                return 'Name must be less than 10 characters.';
            }
        ],
        email: '',
        emailRules: [
            value => {
                if (value) return true;

                return 'E-mail is requred.';
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true;

                return 'E-mail must be valid.';
            }
        ]
    })
};
</script>
