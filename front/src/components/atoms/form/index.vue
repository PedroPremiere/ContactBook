<template>
    <v-form v-model="valid" @submit.prevent>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="firstName$"
                        :counter="10"
                        :rules="nameRules"
                        label="First name"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="email$"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-btn class="mt-2" :disabled="!valid" block @click="save()">
            Submit
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'MyForm',
    props: {
        firstname: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        }
    },

    emits: ['save'],
    data: () => ({
        valid: false,
        firstName$: '',
        email$: '',
        nameRules: [
            value => {
                if (value) return true;

                return 'Name is required.';
            },
            value => {
                if (value?.length <= 30) return true;

                return 'Name must be less than 30 characters.';
            }
        ],
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
    }),
    mounted() {
        this.email$ = this.email;
        this.firstName$ = this.firstname;
    },
    methods: {
        save() {
            this.$emit('save', {
                name: this.firstName$,
                phone: this.email$,
                createDate: Date.now().toString()
            });
        }
    }
};
</script>
