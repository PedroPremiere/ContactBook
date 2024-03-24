<template>
  <v-autocomplete
      label="Autocomplete"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      data-v-step="3"
  ></v-autocomplete>
</template>

<script>


export default {
    name: 'my-autocomplete',

    props: {
    },

    emits: ['click'],

};
</script>
