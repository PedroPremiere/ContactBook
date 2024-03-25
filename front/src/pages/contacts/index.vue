<template>
  <v-container class="bg-surface-variant rounded-t-xl">
    <v-row no-gutters>
      <v-combobox
          label="Language"
          v-model="$root.$i18n.locale"
          :items="langs"
          v-on:update:menu="changeLanguage"
          id="v-step-0"
      ></v-combobox>
    </v-row>
    <v-row no-gutters  class="d-flex justify-space-between mb-6 bg-surface-variant">
        <h1>{{ $t("title") }}</h1>
        <v-icon icon="fas mdi-plus" class="v-step-1" v-on:click="setNewContactDialog"/>
    </v-row>
    <v-row no-gutters>
      <my-autocomplete data-v-step="2" />
    </v-row>
    <v-row no-gutters>
      <my-scroll />
    </v-row>
    <v-row no-gutters>
      <my-bottom-nav/>
    </v-row>

  </v-container>
  <v-tour name="myTour" :steps="steps"></v-tour>
  <my-dialog
      :open="isDialogOpen"
      @close="closeDialog"
      :text="selectedDialogText.text"
      :title="selectedDialogText.title"
  />
</template>


<script>

import MyBottomNav from '../../components/molecules/bottom_nav/index.vue'
import MyScroll from '../../components/atoms/scroll/index.vue'
import MyAutocomplete from '../../components/atoms/autocomplete/index.vue'
import dayjs from 'dayjs'
// eslint-disable-next-line no-unused-vars
import 'dayjs/locale/pl';
import 'dayjs/locale/de';
import 'dayjs/locale/nl';
import MyDialog from '../../components/molecules/dialog/index.vue'

export default {
    name: 'contacts-page',
    components:{MyBottomNav,MyScroll,MyAutocomplete,MyDialog},
    props: {
    },
    emits: ['click'],
    data () {
      return { langs: ['en','pl','de','nl'] ,
        isDialogOpen:false,
        selectedDialogText:{
          title:"",
          text: ""
        },
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            header: {
              title: 'Get Started',
            },
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '.v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          },
          {
            target: '[data-v-step="4"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          },
          {
            target: '[data-v-step="5"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
    mounted(){
      if(localStorage.Lang!=null) this.$i18n.locale=localStorage.Lang;
      dayjs.locale(this.$i18n.locale);
      this.$tours['myTour'].start()
    },
    methods:{
      changeLanguage(){
        dayjs.locale(this.$i18n.locale);
        localStorage.Lang=this.$i18n.locale;
      },
      closeDialog(){
        this.isDialogOpen=false;
      },
      setNewContactDialog(){
        this.selectedDialogText={
          title:"New contact",
          text: " Add new user to your phone book"
        }
        this.isDialogOpen=true
      },
      setEditContactDialog(){
        this.selectedDialogText={
          title:"Edit",
          text: "You are updating contact"
        }
        this.isDialogOpen=true
      }
  }
};
</script>
