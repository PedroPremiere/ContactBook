<template>
  <v-container class="bg-surface-variant rounded-t-xl">
    <v-row no-gutters>
      <v-combobox
          label="Language"
          v-model="$root.$i18n.locale"
          :items="langs"
          v-on:update:menu="changeLanguage"
      ></v-combobox>
    </v-row>
    <v-row no-gutters  class="d-flex justify-space-between mb-6 bg-surface-variant">
        <h1>{{ $t("title") }}</h1>
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

import MyBottomNav from '../../components/molecules/bottom_nav/index.vue'
import MyScroll from '../../components/atoms/scroll/index.vue'
import MyAutocomplete from '../../components/atoms/autocomplete/index.vue'
import dayjs from 'dayjs'
// eslint-disable-next-line no-unused-vars
import _dayjs from 'dayjs/locale/pl';

export default {
    name: 'contacts-page',
    components:{MyBottomNav,MyScroll,MyAutocomplete},
    props: {
    },

    emits: ['click'],
    data () {
      return { langs: ['en','pl'] }
    },
    mounted(){
      if(localStorage.Lang!=null) this.$i18n.locale=localStorage.Lang;
      dayjs.locale(this.$i18n.locale);
    },
    methods:{
    changeLanguage(){
      dayjs.locale(this.$i18n.locale);
      localStorage.Lang=this.$i18n.locale;
    }
  }
};
</script>
