<template>
  <div>
    <div class="row">
      <div class="col-3">
        <q-card color="white">
          <q-card-main color="green">
            Card main content.
            Card main content.

            Card main content.

            Card main content.

            Card main content.

          </q-card-main>
          <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3">
            <q-card inline>
              <q-card-media overlay-position="top">
                <img src="~assets/img/map.png">
                <!-- Notice the slot="overlay" -->
                <q-card-title slot="overlay">
                  <div slot="subtitle" class="row">
                    <div class="col-3">
                      <q-item-side avatar="statics/boy-avatar.png"/>
                    </div>
                    <div class="col-9">
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
              <q-card-actions>
                <q-rating size="1rem" v-model="stars" color="yellow" :max="5"/>

                <q-btn flat icon-right="shopping_basket" class="float-right" small>
                  Make Offer
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QCard,
    QItem,
    QItemTile,
    QItemMain,
    QItemSide,
    QCardMedia,
    QCardTitle,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QCollapsible,
    QRating,
    QBtn,
    QParallax,
    QIcon,
    QPopover,
    QVideo
  } from 'quasar'
  export default {
    components: {
      QCard,
      QCardTitle,
      QCardMedia,
      QCardActions,
      QCardSeparator,
      QCardMain,
      QList,
      QItem,
      QItemMain,
      QItemSide,
      QItemTile,
      QCollapsible,
      QRating,
      QBtn,
      QParallax,
      QIcon,
      QPopover,
      QVideo
    },
    data () {
      return {
        stars: 1
      }
    }
  }
</script>

<style scoped>
  .q-card {
    margin: 0 !important;
  }

  .q-card-subtitle {
    text-align: justify !important;
  }

  .q-btn {
    color: #ffc107;
  }

  .q-item {
    padding: 0;
    position: absolute !important;
    z-index: 1 !important;
  }

  .q-card-container {
    padding: 0;
  }
</style>
