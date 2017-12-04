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
        </router-link>
        <div class="fab-group">
          <q-fab-action
            color="secondary"
            icon="store"
          >
            <q-chip floating style="font-size: xx-small;background: #8a1d9f;color: white">1</q-chip>
            <!-- Direct child of target -->
            <q-popover style="margin-top: 5px;" anchor="bottom right" self="top right" ref="popover">
              <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->
              <q-list link class="no-border">
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Remove Card" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Send Feedback" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Share" />
                </q-item>
              </q-list>
            </q-popover>
          </q-fab-action>
          <q-fab-action
            color="primary"
            icon="local_grocery_store"
          >

            <q-popover style="margin-top: 5px;" anchor="bottom right" self="top right" ref="popover">
              <!--
                The DOM element(s) that make up the popup,
                in this case a list:
              -->
              <q-list link class="no-border">
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Remove Card" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Send Feedback" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Share" />
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
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Remove Card" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Send Feedback" />
              </q-item>
              <q-item @click="$refs.popover.close()">
                <q-item-main label="Share" />
              </q-item>
            </q-list>
          </q-popover>
        </q-item-side>

      </q-toolbar>
      <q-toolbar slot="header" style="background: #26a69a">
        <q-toolbar-title>
          Layout Header
          <span slot="subtitle">Optional subtitle</span>
        </q-toolbar-title>
      </q-toolbar>
      <div class="row">
        <div class="col-3">
          <q-card color="secondary">
            <q-card-media >
              <img src="../assets/img/background.png">
            </q-card-media>
            <q-item-side id="avatar" avatar="/statics/boy-avatar.png" />
            <q-card-title><br>
              Kais NEFFATI
              <span slot="subtitle">Subtitle</span>
              <q-icon slot="right" name="euro_symbol" />
            </q-card-title>
            <q-card-main style="padding: 0;">
              <q-list no-border>
                <q-collapsible icon="perm_identity" label="Dashboard">
                  <div>
                    Lorem ipsum dolor sit amet...
                  </div>
                </q-collapsible>
                <q-collapsible icon="perm_identity" label="Profile">
                  <div>
                    Lorem ipsum dolor sit amet...
                  </div>
                </q-collapsible>
                <q-collapsible icon="shopping_cart" label="Third">
                  <div>
                    Lorem ipsum dolor sit amet...
                  </div>
                </q-collapsible>
              </q-list>
            </q-card-main>
          </q-card>
        </div>
        <div class="col-9">

        </div>
      </div>
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
    QTabs,
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
    QCardMedia
  } from 'quasar'
  import layoutStore from '../resources/layout-store'
  import anime from 'animejs'
  import Categories from './catagories.vue'
  import Orders from './orders.vue'
  import tn from '../assets/maps/tn.vue'

  export default {
    components: {
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
  #avatar {
    position: absolute;
    top: 20%;
    left: 9%;
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
</style>
