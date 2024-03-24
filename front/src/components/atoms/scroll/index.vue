<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>

        <v-btn v-on:click="this.sort='name'" data-v-step="5">
          {{ $t("sortBy") }}
          {{ $t("name") }}
        </v-btn>

      </v-col>
      <v-col>

        <v-btn  v-on:click="this.sort='date'" data-v-step="4">
          {{ $t("sortBy") }}
          {{ $t("date") }}
        </v-btn>

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-infinite-scroll
          ref="infinite"
          height="500"
          @load="load"
          width="100%"
      >
        <template v-for="(key,value) in sorting(cards)" :key="(key,value)">

          <div v-if="sort==='date'">
            <p>
              {{createdTimeToNow(value)}}
              <v-tooltip
                  activator="parent"
                  location="top"
              >{{ value }}</v-tooltip>
            </p>
          </div>

          <v-avatar  v-if="sort==='name'" color="indigo">{{value}}</v-avatar>

          <TransitionGroup>
          <div v-for="items in chunk(key,perRow)" :key="items">
            <div  class="d-flex justify-space-evenly mb-1 bg-surface-variant">

              <div v-for="item in items" :key="item" class="flex-grow-1 ma-2 pa-2">
                  <my-card :title="item.name" :subtitle="item.phone" :create-date="item.createDate.toString()" ></my-card>
              </div>

            </div>
          </div>
          </TransitionGroup>
        </template>

      </v-infinite-scroll>

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import './index.css';
import MyCard from '../card/index.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { mapGetters } from 'vuex'



export default {
  name: 'my-infinite-scroll',
  components: {MyCard},

  computed: {
      ...mapGetters({
        cards: 'items',
        groupBy1stLetter:"groupBy1stLetter",
        groupByTimeAgo:"groupByTimeAgo"
      })
    ,
    perRow() {
      switch (this.$vuetify.display.name) {
        case 'xs': return 1
        case 'sm': return 1
        case 'md': return 2
        case 'lg': return 3
        case 'xl': return 3
      }
      return 1
    },
  },

  data: () => ({
    sort:"name",
    size: 80,
    virtualLength: 12,
  }),

  methods: {
    createdTimeToNow(createDate){
      dayjs.extend(relativeTime);
      return dayjs(createDate).fromNow();
    },
    sorting(){
      if (this.sort==='date'){
        return this.groupByTimeAgo;
      }
      return this.groupBy1stLetter;
    },
    chunk(arr,size){
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
      );
    },
    load ({ side, done }) {
      console.log(side);

      console.log(this.$i18n.locale);
      done('ok');
    },
  },
};
</script>
<style>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }

</style>