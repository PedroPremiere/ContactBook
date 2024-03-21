<template>

  <v-btn prepend-icon="$vuetify">
    Button
  </v-btn>

</template>

<script>
import './index.css';

export default {
    name: 'my-button',

    props: {
    },

    emits: ['click'],

};
</script>
