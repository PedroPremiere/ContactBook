<template>
    <v-dialog v-model="open$" persistent data-cy="dialog">
        <v-card class="bg-info rounded-xl rounded-be-0 pb-0 my-0">
            <v-card-title class="d-sm-none d-md-flex">
                {{ text }}
            </v-card-title>
            <v-card-subtitle class="d-none d-md-flex d-lg-none">
                {{ title }}
            </v-card-subtitle>
            <v-card-item>
                <my-form
                    :firstname="name"
                    :phone="phone"
                    @save="save"
                    @close="close"
                />
            </v-card-item>
        </v-card>
    </v-dialog>
</template>

<script>
import MyForm from '../../atoms/form/index.vue';

export default {
    name: 'MyDialog',
    components: { MyForm },
    props: {
        text: { type: String, required: true },
        title: { type: String, required: true },
        open: { type: Boolean, default: false },
        name: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        }
    },
    emits: ['close', 'save'],
    data() {
        return {
            open$: false
        };
    },
    watch: {
        open() {
            this.open$ = this.open;
        }
    },
    mounted() {
        this.open$ = this.open;
    },
    methods: {
        close() {
            this.$emit('close');
        },
        save(value) {
            this.$emit('save', value);
        }
    }
};
</script>
