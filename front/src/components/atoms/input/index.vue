<template>
    <v-text-field
      v-model="firstname"
      :counter="20"
      :rules="nameRules"
      label="First name"
      required
    >
    </v-text-field>
</template>

<script>
import './index.css';

export default {
  name: 'my-input',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Name is required.'
      },
      value => {
        if (value?.length <= 20) return true

        return 'Name must be less than 20 characters.'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is requred.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      },
    ],
  }),
    props: {
    },

    emits: ['click'],

};
</script>
