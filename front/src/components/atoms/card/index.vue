<template>
  <v-card
      class="mx-auto"
      :subtitle="subtitle"
      :title="title"

  >
    <template v-slot:prepend>
      <my-avatar :initials="initials"/>
    </template>
    <template v-slot:append>
      <p>{{createdTimeToNow}}</p>
    </template>
  </v-card>
</template>

<script>
import './index.css';
import MyAvatar from '../avatar/index.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export default {
    name: 'my-card',
    components: {MyAvatar},
    props: {
      title:String,
      subtitle:String,
      createDate:String
    },
    computed: {
      createdTimeToNow(){
        dayjs.extend(relativeTime);
        return dayjs(this.createDate).fromNow();
      },
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
