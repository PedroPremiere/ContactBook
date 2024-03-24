<template>
  <v-container class="bg-surface-variant">
    <v-infinite-scroll
      ref="infinite"
      height="500"
      @load="load"
    >
      <div>
        <template v-for="card in cards" :key="card">
            <v-row no-gutters>
              <v-col cols="12" class="mb-2">
                <my-card :title="card.name" :subtitle="card.phone" ></my-card>
              </v-col>
            </v-row>
        </template>
      </div>
    </v-infinite-scroll>
  </v-container>
</template>

<script>
import './index.css';
import MyCard from '../card/index.vue'
import { randFullName, randPhoneNumber } from '@ngneat/falso'

export default {
  name: 'my-infinite-scroll',
  components: {MyCard},
  data: () => ({
    size: 80,
    virtualLength: 12,
    cards: [
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      {
        name:randFullName(),
        phone:randPhoneNumber()
      },
      ],
  }),

  methods: {
    createRange (length, start) {
      return Array.from({ length }).map((_, i) => i + start)
    },
    load ({ side, done }) {
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
    },
  },
};
</script>
