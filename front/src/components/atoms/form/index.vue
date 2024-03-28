<template>
    <v-form v-model="valid" @submit.prevent>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="firstName$"
                        :counter="10"
                        :rules="nameRules"
                        :label="$t('dialog.name')"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                        v-model="phone$"
                        :rules="phoneRules"
                        :label="$t('dialog.phone')"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-btn class="mt-2" block @click="close()">
                        {{ $t('Close') }}
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn
                        class="mt-2"
                        :disabled="!valid"
                        block
                        @click="save()"
                    >
                        {{ $t('submit') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
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
        phone: {
            type: String,
            default: ''
        }
    },

    emits: ['save'],
    data: () => ({
        valid: false,
        firstName$: '',
        phone$: '',
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
        phoneRules: [
            value => {
                if (value) return true;

                return 'Phone is requred.';
            },
            value => {
                if (/\d/g.test(value) && value.length < 15) return true;

                return 'Phone must be valid.';
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
        this.phone$ = this.phone;
        this.firstName$ = this.firstname;
    },
    methods: {
        save() {
            this.$emit('save', {
                name: this.firstName$,
                phone: this.phone$,
                createDate: Date.now().toString()
            });
        },
        close() {
            this.$emit('close');
        }
    }
};
</script>
