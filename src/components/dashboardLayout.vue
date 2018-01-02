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
        <q-toolbar-title class="absolute-center	">
          <router-link to="/">
            <img src="statics/muun-logo-white.png" height="40px" style="color: white; margin:0 auto"/>
          </router-link>
        </q-toolbar-title>

        <router-link to="/login" style="color: white">
        </router-link>
        <div class="fab-group">
          <q-fab-action
            color="primary"
            icon="shopping_basket"
          >
            <q-chip floating style="font-size: xx-small;background: #8a1d9f;color: white">1</q-chip>
            <!-- Direct child of target -->
            <q-popover style="margin-top: 5px;" anchor="bottom right" self="top right" ref="popover">
              <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->

              <q-list highlight>
                <q-list-header>Delivering</q-list-header>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main label="Mountains Documentary"/>
                  <q-item-side right icon="shopping_basket" color="tertiary"/>
                </q-item>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main>
                    <q-item-tile label>Mountains Documentary</q-item-tile>
                    <q-item-tile sublabel>For passionates only</q-item-tile>
                  </q-item-main>
                  <q-item-side right icon="shopping_basket" color="tertiary"/>
                </q-item>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main>
                    <q-item-tile label>Mountains Documentary</q-item-tile>
                    <q-item-tile sublabel lines="3">
                      For passionates only For passionates only For passionates only
                    </q-item-tile>
                  </q-item-main>
                  <q-item-side right icon="shopping_basket" color="tertiary"/>
                </q-item>
              </q-list>
            </q-popover>
          </q-fab-action>
          <q-fab-action
            color="primary"
            icon="message"
          >
            <q-chip floating style="font-size: xx-small;background: #8a1d9f;color: white">1</q-chip>
            <!-- Direct child of target -->
            <q-popover style="margin-top: 5px;" anchor="bottom right" self="top right" ref="popover">
              <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->
              <q-list highlight>
                <q-list-header>Messages</q-list-header>
                <q-item>
                  <q-item-side avatar="/statics/boy-avatar.png"/>
                  <q-item-main label="John Doe"/>
                  <q-item-side right>
                    <q-item-tile icon="chat_bubble" color="tertiary"/>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-side avatar="/statics/boy-avatar.png"/>
                  <q-item-main label="John Doe"/>
                  <q-item-side right icon="chat_bubble"/>
                </q-item>
                <q-item>
                  <q-item-side avatar="/statics/boy-avatar.png"/>
                  <q-item-main>
                    <q-item-tile label>John Doe</q-item-tile>
                    <q-item-tile style="font-size: x-small" sublabel lines="3">
                      For passionates only For passionates ...
                    </q-item-tile>
                  </q-item-main>
                  <q-item-side right>
                    <q-item-tile icon="chat_bubble" color="tertiary"/>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-side avatar="/statics/boy-avatar.png"/>
                  <q-item-main label="John Doe"/>
                  <q-item-side right>
                    <q-item-tile icon="chat_bubble" color="tertiary"/>
                  </q-item-side>
                </q-item>
              </q-list>
            </q-popover>
          </q-fab-action>
          <q-fab-action
            color="primary"
            icon="shopping_cart"
          >

            <q-popover style="margin-top: 5px;" anchor="bottom right" self="top right" ref="popover">
              <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->
              <q-list highlight>
                <q-list-header>Orders</q-list-header>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main label="Mountains Documentary"/>
                  <q-item-side right icon="shopping_cart" color="tertiary"/>
                </q-item>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main>
                    <q-item-tile label>Mountains Documentary</q-item-tile>
                    <q-item-tile sublabel>For passionates only</q-item-tile>
                  </q-item-main>
                  <q-item-side right icon="shopping_cart" color="tertiary"/>
                </q-item>
                <q-item>
                  <q-item-side image="/statics/deliveryBoy.jpeg"/>
                  <q-item-main>
                    <q-item-tile label>Mountains Documentary</q-item-tile>
                    <q-item-tile sublabel lines="3">
                      For passionates only For passionates only For passionates only
                    </q-item-tile>
                  </q-item-main>
                  <q-item-side right icon="shopping_cart" color="tertiary"/>
                </q-item>
              </q-list>
            </q-popover>
            <q-chip floating style="font-size: xx-small;background: #8a1d9f;color: white">1</q-chip>
          </q-fab-action>
        </div>
        <q-item-side class="top-avatar" avatar="/statics/Profile_avatar_placeholder_large.png">
          <q-popover anchor="bottom right" self="top right" ref="popover">
            <!--
              The DOM element(s) that make up the popup,
              in this case a list:
            -->
            <q-list link class="no-border">
              <q-item to="/profile" @click="$refs.popover.close()">
                <q-item-side right>
                  <q-item-tile icon="face"/>
                </q-item-side>
                <q-item-main label="Profile"/>
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-side right>
                  <q-item-tile icon="assessment"/>
                </q-item-side>
                <q-item-main label="Dashboard"/>
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-side right>
                  <q-item-tile icon="settings"/>
                </q-item-side>
                <q-item-main label="Settings"/>
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-side right>
                  <q-item-tile icon="help"/>
                </q-item-side>
                <q-item-main label="Help"/>
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-side right>
                </q-item-side>
                <q-item-main label="logout"/>
              </q-item>
            </q-list>
          </q-popover>
        </q-item-side>

      </q-toolbar>
      <router-view/>
      <q-toolbar slot="footer" style="margin-top: 20% !important;">
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
    QCheckbox,
    QCardSeparator,
    QCardActions,
    QTabs,
    QTab,
    QTabPane,
    QRating,
    QCarousel,
    QCollapsible,
    QFab,
    QFabAction,
    QList,
    QTooltip,
    QPopover,
    QLayout,
    QChip,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QRouteTab,
    QBtn,
    QIcon,
    QItem,
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
    QFixedPosition,
    QModal,
    QPullToRefresh,
    QModalLayout,
    QItemTile
  } from 'quasar'
  import layoutStore from '../resources/layout-store'
  import anime from 'animejs'
  import Categories from './catagories.vue'
  import Orders from './orders.vue'
  import tn from '../assets/maps/tn.vue'
  import world from '../assets/maps/world1.vue'
  import searchForPlace from './searchForPlace.vue'

  export default {
    components: {
      searchForPlace,
      QCheckbox,
      world,
      QCardSeparator,
      QCardActions,
      QTab,
      QTabPane,
      QRating,
      QCarousel,
      QCollapsible,
      QFab,
      QFabAction,
      QItem,
      QList,
      QPopover,
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
      QChip,
      QSideLink,
      QListHeader,
      QScrollArea,
      QCard,
      QCardTitle,
      QCardMain,
      QGalleryCarousel,
      QCardMedia,
      QFixedPosition,
      QModal,
      QPullToRefresh,
      QModalLayout,
      QItemTile
    },
    data () {
      return {
        favorites: Array,
        search: '',
        stars: 0,
        layoutStore,
        text: '',
        mapLoaded: false,
        gallery: [
          'statics/food/vegtables.jpg',
          'statics/food/pets.jpg',
          'statics/food/salsa.jpg'
        ],
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 36.802009, lng: 10.186700}
        }, {
          position: {lat: 36.892009, lng: 10.86700}
        }]
      }
    },
    methods: {
      refresher (done) {
        setTimeout(() => {
          done()
          console.log('refresh')
        }, 1000)
      },
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
<style lang="stylus">
  #avatar {
    position: absolute;
    margin-top: -45px;
    left: 9%;
  }

  .post-avatar {
    width: 25px !important;
    height: 25px !important;
  }

  .post-avatar img {
    width: 25px !important;
    height: 25px !important;
  }

  .fab-group button {
    border-radius: 0%;
  }

  #avatar img {
    width: 80px;
    height: 80px;
  }

  svg {
    display: table;
    margin: 0 auto;
  }

  .top-avatar {
    margin-bottom: -6px;
  }

  .top-avatar img {
    height: 40px;
    width: 40px;
    border-radius: 0%;
  }

  .pull-to-refresh-message .q-icon {
    font-size small !important;
  }

  .pull-to-refresh-message {
    height: 45px;
    color: gray
    font-size small !important;
  }

  .category-toolbar {
    background: #26a69a;
    min-height: 25px;
  }

  .q-chip .q-chip-side.chip-left {
    margin-right: -5px;
  }

  .q-toolbar button {
    min-height: 25px;
  }

  .q-chip .q-icon {
    font-size: 15px !important;
  }

  .q-chip .q-chip-main {
    font-size: x-small;
  }

  .q-checkbox i {
    font-size: x-large;
  }

  .q-card-media-overlay {
    background-color: transparent;
  }

  .q-chip {
    margin-top: 5px;
    background-color: rgba(251, 92, 80, 0.91);
    color: white;
    font-size: small
  }

</style>
