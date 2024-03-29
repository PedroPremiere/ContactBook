<template>
    <v-dialog v-model="open$" class="w-75" persistent>
        <v-card :text="text" :title="title">
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
