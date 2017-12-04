<template>
  <div>
    <q-layout
      ref="layout"
      :view="layoutStore.view"
      :left-breakpoint="layoutStore.leftBreakpoint"
      :right-breakpoint="layoutStore.rightBreakpoint"
      :reveal="layoutStore.reveal"
    >
      <q-toolbar slot="header">
        <div style="width: 20%;">
          <q-search v-model="text"
                    inverted color="amber"
                    icon="shopping_basket"
                    placeholder="Hire nearby"/>
        </div>
        <q-toolbar-title class="absolute-center	">
          <router-link to="/" >
            <img src="statics/muun-logo-white.png" height="40px" style="color: white; margin:0 auto"/>
          </router-link>
        </q-toolbar-title>
        <router-link to="/login" style="color: white">
          <q-btn flat icon-right="fingerprint" small>
            SIGN IN
          </q-btn>
        </router-link>
        <q-btn flat icon-right="supervisor_account" small>
          JOIN
        </q-btn>
      </q-toolbar>
      <router-view/>
      <q-toolbar slot="footer">
        <q-toolbar-title>
          <footer class="page-footer">
            <div class="footer-copyright">
              <div class="container">
                © 2017 Copyright for Nearby
              </div>
            </div>
          </footer>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
  import {
    QTooltip,
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
  } from 'quasar'
  import layoutStore from '../resources/layout-store'
  import anime from 'animejs'
  import Categories from './catagories.vue'
  import Orders from './orders.vue'
  import tn from '../assets/maps/tn.vue'

  export default {
    components: {
      QTooltip,
      tn,
      Orders,
      Categories,
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
    },
    data () {
      return {
        layoutStore,
        text: '',
        gallery: [
          'statics/food/vegtables.jpg',
          'statics/food/pets.jpg',
          'statics/food/salsa.jpg'
        ]
      }
    },
    methods: {
      mouseOver () {
        anime({
          targets: '#specificUnitValue .el',
          translateX: '40em',
          rotate: '2turn'
        })
      }
    }
  }
</script>
<style scoped>
  svg {
    display: table;
    margin: 0 auto;
  }
</style>
