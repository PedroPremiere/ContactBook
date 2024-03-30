<template>
    <div class="bg-secondary">
        <contacts-page />
    </div>
</template>

<script lang="tsx">
import ContactsPage from '@/pages/contacts/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    components: {
        ContactsPage
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
