<template>
    <v-dialog v-model="isOpen" width="auto" persistent>
        <v-card
            max-width="400"
            text="Are you sure you wan to delete?"
            title="Delete"
        >
            <template #actions>
                <v-btn class="ms-auto" text="Yes, Remove" @click="save"></v-btn>
                <v-btn class="ms-auto" text="No" @click="close"></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'MyDeleteDialog',
    props: {
        open: Boolean
    },
    emits: ['close', 'removeItem'],
    data() {
        return {
            isOpen: false
        };
    },
    watch: {
        open() {
            this.isOpen = this.open;
        }
    },
    mounted() {
        this.isOpen = this.open;
    },
    methods: {
        close() {
            this.$emit('close');
        },
        save() {
            this.$emit('removeItem');
        }
    }
};
</script>
