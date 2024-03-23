<template>
  <div class="text-center pa-4">
    <v-btn @click="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog
        v-model="dialog"
        width="auto"
    >
      <v-card
          max-width="400"
          :text=text
          :title=title
      >
        <v-card-item>
        <my-form />
        </v-card-item>
        <template v-slot:actions>
          <v-btn
              class="ms-auto"
              text="Ok"
              @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import './index.css';
import MyForm from '../../atoms/form/index.vue'

export default {
  name: 'my-button',
  components: {MyForm},
  props:{
    text:String,
    title:String
  },
  data () {
    return {
      dialog: false,
    }
  },
};
</script>
