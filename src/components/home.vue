<template>
  <div>
      <div id="bannerheader" class="row">
        <div class="col-6">
          <div class="banner">
            <h1>Forget about <strong>shooping</strong></h1>
            <h6>Services for busy people , Forget about time constraints!!</h6>
            <h3>Order anything</h3>
            <!--     <h2>Hire the best one to do it</h2>
                     <h6>I have so much good jeans , i know where to by them , i could bay you somthing like it !! I am expert in Jeans</h6>
                     <h3>Home delevery</h3>
                        <h3>Forget about choosing the right products</h3>-->
            <q-btn color="amber" icon-right="fingerprint">
              Get started now
            </q-btn>
            <div class="videoLink">
              <q-icon style="font-size: larger;" name="play_circle_outline"/>
              <span>see yourself</span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img style="margin: 10%;" src="../assets/img/locationsretail_stores.png">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <tn width="50%"></tn>
        </div>
        <div class="col-6" style="padding: 5%">
          <h1>Work with us</h1>
          <div>Make your own bussiness network , start your </div>
          <img src="../assets/img/senario.png" width="100%"/>
        </div>
      </div>
      <div id="banner">
        <div class="row">
          <div class="col-6 statistics">
            <img style="width: 80%;margin: 0 10% " src="../assets/img/mcommerce-app-topimg.png">
          </div>
          <div class="col-6 statistics">
            <div style="background-color: #26A69A; width: 70%;height:80%; margin : 5% 15%">
            </div>
          </div>
        </div>
      </div>
      <categories></categories>
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
