<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col>
        <v-btn v-on:click="this.sort='name'">
          Sort By Name
        </v-btn>
      </v-col>
      <v-col>
        <v-btn  v-on:click="this.sort='date'">
          Sort By Date
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
            {{createdTimeToNow(value)}}
          </div>

          <v-avatar  v-if="sort==='name'" color="indigo">{{value}}</v-avatar>

          <div v-for="items in chunk(key,perRow)" :key="items">
            <div  class="d-flex justify-space-evenly mb-1 bg-surface-variant">
              <div v-for="item in items" :key="item" class="flex-grow-1 ma-2 pa-2">
                <my-card :title="item.name" :subtitle="item.phone" :create-date="item.createDate" ></my-card>
              </div>
            </div>
          </div>
        </template>
      </v-infinite-scroll>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import './index.css';
import MyCard from '../card/index.vue'
import { randFullName, randPhoneNumber,randRecentDate } from '@ngneat/falso'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default {
  name: 'my-infinite-scroll',
  components: {MyCard},

  computed: {
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
    cards: [
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
          {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()}
      ],
  }),

  methods: {
    createdTimeToNow(createDate){
      dayjs.extend(relativeTime);
      return dayjs(createDate).fromNow();
    },
    groupBy1stLetter(arr){
      function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }

      arr.sort( compare );
      const items = arr.reduce((store, word) => {
        const letter = word.name.charAt(0)
        const keyStore = (
            store[letter] ||     // Does it exist in the object?
            (store[letter] = []) // If not, create it as an empty array
        );
        keyStore.push(word)

        return store
      }, {})

      console.log(items)

      return items;
    },
    groupByTimeAgo(arr){
      dayjs.extend(relativeTime);
      dayjs.extend(localizedFormat);
      const items = arr.reduce((store, word) => {
        const timeAgo = dayjs(word.createDate).format('l');//dayjs(word.createDate).fromNow();
        const keyStore = (
            store[timeAgo] ||     // Does it exist in the object?
            (store[timeAgo] = []) // If not, create it as an empty array
        );
        keyStore.push(word)

        return store
      }, {})

      console.log(items)
      return Object.fromEntries(Object.entries(items).sort().reverse());

      //return items;
    },
    sorting(arr){
      if (this.sort==='date'){
        return this.groupByTimeAgo(arr);
      }
      return this.groupBy1stLetter(arr);
    },
    chunk(arr,size){
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
      );
    },
    createRange (length, start) {
      return Array.from({ length }).map((_, i) => i + start)
    },
    load ({ side, done }) {
      console.log(side);
      done('ok');
      /*
      const halfVirtualLength = this.virtualLength / 2
      if (side === 'start') {
        const arr = this.createRange(halfVirtualLength, this.cards[0] - halfVirtualLength)
        this.cards = [...arr, ...this.cards.slice(0, halfVirtualLength)]
        this.$nextTick(() => {
          this.$refs.infinite.$el.scrollTop = this.$refs.infinite.$el.scrollHeight - (halfVirtualLength * this.size) - this.$refs.infinite.$el.scrollTop
        })
      } else {
        const arr = this.createRange(halfVirtualLength, this.cards.at(-1) + 1)
        this.cards = [...this.cards.slice(halfVirtualLength), ...arr]
      }

      done('ok')

       */
    },
  },
};
</script>
