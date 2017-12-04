<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <q-card color="white">
      <q-card-main color="green">
        <q-tabs align="justify" inverted>
          <!-- Tabs - notice slot="title" -->
          <q-tab default slot="title" name="tab-1" label="Sign in" icon="fingerprint"/>
          <q-tab slot="title" name="tab-2" label="Sign up" icon="supervisor_account"/>
          <!-- Targets -->
          <q-tab-pane name="tab-1">
            <q-input v-model="email" type="email" float-label="Email" />
            <q-input v-model="text" type="password" float-label="Password" />
            <q-btn class="full-width" style="margin: 5%" color="primary" >Log in</q-btn>
          </q-tab-pane>
          <q-tab-pane name="tab-2">
            <q-input v-model="email" type="text" float-label="Full Name" />
            <q-input v-model="email" type="email" float-label="Email" />
            <q-input v-model="email" type="email" float-label="Confirme Email" />
            <q-input v-model="email" type="email" float-label="Password" />
            <q-input v-model="text" type="password" float-label="Confirme Password" />
            <q-btn class="full-width" style="margin: 5%" color="primary" >Log in</q-btn>
          </q-tab-pane>
        </q-tabs>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
  import {
    QInput,
    QTabs,
    QTab,
    QTabPane,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QCard,
    QCardTitle,
    QCardMain,
    QGalleryCarousel,
    QCardMedia
  } from 'quasar'
  export default {
    data () {
      return {
        email: '',
        text: ''
      }
    },
    components: {
      QInput,
      QTab,
      QTabPane,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QSearch,
      QTabs,
      QRouteTab,
      QBtn,
      QIcon,
      QItemSide,
      QItemMain,
      QSideLink,
      QListHeader,
      QScrollArea,
      QCard,
      QCardTitle,
      QCardMain,
      QGalleryCarousel,
      QCardMedia
    }
  }
</script>

<style scoped>
  .q-card {
    background-color: white;
  }

  .layout-padding {
    padding: 3rem 25rem;
  }
</style>
