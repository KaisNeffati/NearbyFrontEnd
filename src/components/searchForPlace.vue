<template>
  <q-search v-model="text"
            inverted color="amber"
            icon="place"
            ref="input"
            placeholder="Hire nearby"/>
</template>
<script>
  import {
    QSearch
  } from 'quasar'

  export default {
    data () {
      return {}
    },
    components: {
      QSearch
    }
  }
</script>
