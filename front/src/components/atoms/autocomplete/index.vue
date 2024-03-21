<template>
  <v-autocomplete
      label="Autocomplete"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-autocomplete>
</template>

<script>
import './index.css';

export default {
    name: 'my-autocomplete',

    props: {
    },

    emits: ['click'],

};
</script>
