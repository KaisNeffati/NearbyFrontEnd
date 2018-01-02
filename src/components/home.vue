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
          <router-link to="/dashboard2">
          <q-btn color="amber">
              Get started now
          </q-btn>
          </router-link>
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
        <world width="100%" height="100%"></world>
      </div>
      <div class="col-6" style="padding: 5%">
        <q-item-tile label>
          <h1 style="margin: 0">Work with us</h1>
        </q-item-tile>
        <q-item-tile style="margin: 0 5px;" sublabel>
          <q-icon name="explore"/>
          Discover a new world !
        </q-item-tile>
        <img src="../assets/img/senario.png" width="100%"/>
      </div>
    </div>
    <div id="banner" style="padding: 5% 15%">
      <div class="row" style="background-color: #26A69A;    padding: 3%;">
        <div class="col-3">
          <q-item-tile icon="public" style="font-size: xx-large;line-height: 2;"/>
          <q-item-main>
            <animate-number
              ref="myNumCountries"
              mode="manual"
              style="font-size: xx-large"
              from="1"
              to="120"
              :duration="duration"
              easing="easeOutQuad"
              :formatter="formatterCountries"
            ></animate-number>
            <q-item-tile sublabel color="white" style="line-height: 2"><strong>COUNTRIES</strong></q-item-tile>

          </q-item-main>
        </div>
        <div class="col-3">
          <q-item-tile icon="supervisor_account" style="font-size: xx-large;line-height: 2;"/>
          <q-item-main>
            <animate-number
              style="font-size: xx-large"
              ref="myNumUsers"
              mode="manual"
              from="1"
              to="10"
              :duration="duration"
              easing="easeOutQuad"
              :formatter="formatter"
            ></animate-number>
            <q-item-tile sublabel color="white" style="line-height: 2"><strong>ACTIVE USER</strong></q-item-tile>

          </q-item-main>
        </div>
        <div class="col-3">
          <q-item-tile icon="store" style="font-size: xx-large;line-height: 2;"/>
          <q-item-main>
            <animate-number
              style="font-size: xx-large"
              ref="myNumOrders"
              mode="manual"
              from="1"
              to="120"
              :duration="duration"
              easing="easeOutQuad"
              :formatter="formatter"
            ></animate-number>
            <q-item-tile sublabel color="white" style="line-height: 2"><strong>ORDERS</strong></q-item-tile>
          </q-item-main>
        </div>
        <div class="col-3">
          <q-item-tile icon="card_giftcard" style="font-size: xx-large;line-height: 2;"/>
          <q-item-main>
            <animate-number
              style="font-size: xx-large"
              ref="myNumProducts"
              mode="manual"
              from="1"
              to="100"
              :duration="duration"
              easing="easeOutQuad"
              :formatter="formatter"
            ></animate-number>
            <q-item-tile sublabel color="white" style="line-height: 2"><strong>PRODUCTS</strong></q-item-tile>
          </q-item-main>
        </div>
      </div>
    </div>
    <categories></categories>
  </div>
</template>

<script>
  import {
    QItemTile,
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
  import world from '../assets/maps/world1.vue'

  export default {
    components: {
      QTooltip,
      tn,
      world,
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
      QCardMedia,
      QItemTile
    },
    data () {
      return {
        duration: 2000,
        layoutStore,
        countDownVisited: false,
        text: '',
        gallery: [
          'statics/food/vegtables.jpg',
          'statics/food/pets.jpg',
          'statics/food/salsa.jpg'
        ]
      }
    },
    methods: {
      formatter: function (num) {
        return num.toFixed(0).concat('k')
      },
      formatterCountries: function (num) {
        return num.toFixed(0)
      },
      startAnimate: function () {
        this.$refs.myNumCountries.start()
        this.$refs.myNumUsers.start()
        this.$refs.myNumProducts.start()
        this.$refs.myNumOrders.start()
      },
      mouseOver () {
        anime({
          targets: '#specificUnitValue .el',
          translateX: '40em',
          rotate: '2turn'
        })
      },
      handleScroll () {
        if ((window.scrollY.toString() > 530) && !this.countDownVisited) {
          this.startAnimate()
          this.countDownVisited = true
        }
      }
    },
    created: function () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style scoped>
  svg {
    display: table;
    margin: 0 auto;
  }
</style>
