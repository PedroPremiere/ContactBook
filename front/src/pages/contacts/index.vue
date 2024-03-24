<template>
  <v-container class="bg-surface-variant rounded-t-xl">
    <v-row no-gutters  class="d-flex justify-space-between mb-6 bg-surface-variant">
        <h1>Kontakty</h1>
        <v-icon icon="fas mdi-plus" />
    </v-row>
    <v-row no-gutters>
      <my-autocomplete />
    </v-row>
      <v-row no-gutters>
    <my-scroll />
      </v-row>
    <v-row no-gutters>
      <my-bottom-nav/>
    </v-row>
  </v-container>
</template>

<script>
import './index.css';
import MyBottomNav from '../../components/molecules/bottom_nav/index.vue'
import MyScroll from '../../components/atoms/scroll/index.vue'
import MyAutocomplete from '../../components/atoms/autocomplete/index.vue'

export default {
    name: 'contacts-page',
    components:{MyBottomNav,MyScroll,MyAutocomplete},
    props: {
    },

    emits: ['click'],

};
</script>
