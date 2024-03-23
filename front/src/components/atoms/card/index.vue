<template>
  <v-card
      class="mx-auto"
      max-width="344"
      :subtitle="subtitle"
      :title="title"
  >
    <template v-slot:prepend>
      <my-avatar :initials="initials"/>
    </template>
  </v-card>
</template>

<script>
import './index.css';
import MyAvatar from '../avatar/index.vue'

export default {
    name: 'my-card',
    components: {MyAvatar},
    props: {
      title:String,
      subtitle:String
    },
    computed: {
      initials(){
        const split = this.title.split(" ");
        const initials = []
        for (let item of split){
          initials.push(item[0]);
        }

        return initials.join('');
      }
    },
    emits: ['click'],
};
</script>
