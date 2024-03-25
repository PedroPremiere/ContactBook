<template>
    <v-dialog
        width="auto"
        v-model="open$"
        persistent
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
              @click="close"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script>
import './index.css';
import MyForm from '../../atoms/form/index.vue'

export default {
  name: 'MyDialog',
  components: {MyForm},
  props:{
    text:String,
    title:String,
    open:Boolean
  },
  data () {
    return {
      open$:Boolean
    }
  },
  mounted () {
    this.open$ = this.open;
  },
  watch:{
    open(){
      this.open$ = this.open;
    }
  },
  methods:{
    close(){
      this.$emit('close');
    }
  },
  emits:['close'],
};
</script>
