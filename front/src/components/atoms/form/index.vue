<template>
    <v-form
        v-model="valid"
        data-cy="contactForm"
        class="my-0 py-0"
        @submit.prevent
    >
        <v-container>
            <v-row class="bg-white rounded-xl rounded-b-0">
                <v-col cols="12" class="pb-0 mb-0">
                    <v-text-field
                        v-model="firstName$"
                        :counter="10"
                        :rules="nameRules"
                        :label="$t('dialog.name')"
                        required
                        data-cy="contactFormFirstName"
                        class="pb-0 mb-0"
                    />
                </v-col>
            </v-row>
            <v-row
                class="bg-white rounded-xl rounded-t-0 rounded-be-0 pb-0 mb-0"
            >
                <v-col cols="12" class="pb-0 mb-0">
                    <v-text-field
                        v-model="phone$"
                        :rules="phoneRules"
                        :label="$t('dialog.phone')"
                        required
                        data-cy="contactFormPhone"
                        class="pb-0 mb-0"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-btn
                        class="ms-auto bg-success rounded-xl rounded-be-0"
                        :disabled="!valid"
                        block
                        data-cy="contactFormSubmit"
                        @click="save()"
                    >
                        {{ $t('submit') }}
                    </v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn
                        class="ms-auto bg-secondary rounded-xl rounded-be-0"
                        block
                        data-cy="contactFormClose"
                        @click="close()"
                    >
                        {{ $t('close') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

    emits: ['save', 'close'],
    data: () => ({
        valid: false,
        firstName$: '',
        phone$: '',
        nameRules: [
            (value: string) => {
                if (value) return true;

                return 'Name is required.';
            },
            (value: string) => {
                if (value?.length <= 30) return true;

                return 'Name must be less than 30 characters.';
            }
        ],
        phoneRules: [
            (value: string) => {
                if (value) return true;

                return 'Phone is requred.';
            },
            (value: string) => {
                if (
                    /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/.test(
                        value
                            .split('(')
                            .join()
                            .split(')')
                            .join()
                            .split(' ')
                            .join('')
                    )
                )
                    return true;

                return 'Phone must be valid.';
            }
        ],
        emailRules: [
            (value: string) => {
                if (value) return true;

                return 'E-mail is requred.';
            },
            (value: string) => {
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
});
</script>
