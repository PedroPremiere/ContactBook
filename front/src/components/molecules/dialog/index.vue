<template>
    <v-dialog v-model="open$" class="w-75" persistent>
        <v-card :text="text" :title="title">
            <v-card-item>
                <my-form :firstname="name" :email="phone" @save="save" />
            </v-card-item>
            <template #actions>
                <v-btn class="ms-auto" text="Ok" @click="close"></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script>
import './index.css';
import MyForm from '../../atoms/form/index.vue';

export default {
    name: 'MyDialog',
    components: { MyForm },
    props: {
        text: String,
        title: String,
        open: Boolean,
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
            open$: Boolean
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
