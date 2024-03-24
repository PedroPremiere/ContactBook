<template>
  <div :style="{'background-image': 'url(' + require('./assets/emily-bernal-r2F5ZIEUPtk-unsplash.jpg') + ')'}">
    <contacts-page />
  </div>
</template>

<script>

import ContactsPage from '@/pages/contacts/index.vue'

export default {
  name: 'App',
  components: {
    ContactsPage
  }
}
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
