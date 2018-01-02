<template>
  <div>
    <q-layout
      ref="layout"
      view="lHh Lpr lff"
      :left-breakpoint="layoutStore.leftBreakpoint"
      :right-breakpoint="layoutStore.rightBreakpoint"
      :reveal="layoutStore.reveal"
    >
      <q-toolbar slot="header">
        <div style="width: 20%;">
          <search-for-place></search-for-place>
        </div>
        <router-link to="/" style="margin:0 auto" >
        <q-toolbar-title class="absolute-center	">
            <img src="statics/muun-logo-white.png" height="40px" style="color: white; "/>

        </q-toolbar-title>
        </router-link>
        <router-link to="/login" style="color: white">
          <q-btn flat icon-right="fingerprint" small>
            SIGN IN
          </q-btn>
        </router-link>
        <router-link to="/login" style="color: white">
        <q-btn flat icon-right="supervisor_account" small>
          JOIN
        </q-btn>
        </router-link>
      </q-toolbar>
      <router-view/>
      <q-toolbar slot="footer">
        <q-toolbar-title>
          <footer class="page-footer">
            <div class="footer-copyright">
              <div class="row" style="margin: 10% 10%;">
                <div class="col-9">
                  <img width="100%" src="../assets/img/footer.png"/>
                </div>
                <div class="col-1">
                  <ul style="padding: 0">
                    <li><h6>ABOUT</h6></li>
                    <li><p>About us</p></li>
                    <li><p>Careers</p></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>Legal Notice</p></li>
                    <li><p>Terms of Service</p></li>
                  </ul>
                </div>
                <div class="col-1">
                  <ul style="padding: 0 20px">
                    <li><h6>SUPPORT</h6></li>
                    <li><p>Contact</p></li>
                    <li><p>Forum</p></li>
                    <li><p>FAQ</p></li>
                    <li><p>Help</p></li>
                  </ul>
                </div>
                <div class="col-1">
                  <ul>
                    <li><h6>FOLLOW US</h6></li>
                    <li><p>Blog</p></li>
                    <li><p>Google</p></li>
                    <li><p>Facebook</p></li>
                    <li><p>Twitter</p></li>
                    <li><p>LinkedIn</p></li>
                  </ul>
                </div>
              </div>
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
  import searchForPlace from './searchForPlace.vue'

  export default {
    components: {
      searchForPlace,
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
  li {
    list-style: none;
  }

  li p {
    font-size: x-small;
    line-height: 5px;
  }
  li h6 {
    line-height: 45px;
    color : #26A69A
  }
</style>
