<template>
  <div>
    <div class="row">
      <div class="col-3">
        <q-card>
        <q-card-media>
          <img src="../assets/img/background.png">
        </q-card-media>
        <q-item-side id="avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
        <q-card-title><br>
          Kais NEFFATI
          <span slot="subtitle">Subtitle</span>
          <q-icon slot="right" name="euro_symbol"/>
        </q-card-title>
        <q-card-main style="padding: 0;">
          <q-list no-border>
            <q-item>
              <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
              <q-item-side right icon="chat_bubble" />
            </q-item>
            <q-item>
              <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
              <q-item-side right icon="chat_bubble" />
            </q-item>
            </q-list>
        </q-card-main>
      </q-card>
      </div>
      <div class="col-9">
        <q-card>
          <q-card-main>
            <q-tabs align="left" color="transparent">
              <!-- Tabs - notice slot="title" -->
              <q-tab default slot="title" name="tab-1" label="Orders" icon="shopping_cart"/>
              <q-tab slot="title" label="Delivering" name="tab-2" icon="shopping_basket"/>
              <!-- Targets -->
              <q-tab-pane name="tab-1">
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
              </q-tab-pane>
              <q-tab-pane name="tab-2">
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
                <q-card inline style="width: 30%;">

                  <q-card-media style="height:200px;" overlay-position="top">
                    <q-carousel infinite arrows class="text-white">
                      <div slot="slide">
                        <img width="100%" src="/statics/deliveryBoy.jpeg"/>
                      </div>
                      <div slot="slide" class="bg-secondary centered">
                        Slide 2
                      </div>
                      <div slot="slide" class="bg-tertiary centered">
                        Slide 3
                      </div>
                    </q-carousel>
                  </q-card-media>
                  <q-card-main>
                    <div style="display: flow-root;">
                      <div style="float:left;font-size: x-small; color: #26A69A">
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </div>
                      <div style="float: right;font-size: medium;color: #ffc107" class="row items-center">
                        100
                        <q-icon name="euro_symbol"/>
                      </div>
                    </div>
                    I am delivering ...
                    <div>
                      <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;"
                           class="row items-center">
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star"/>
                        <q-icon name="star_border"/>
                      </div>
                      <div style="font-size: x-small;padding: 5px 0;" class="row items-center">
                        <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png"/>
                        Kais NEFFATI
                      </div>
                    </div>
                  </q-card-main>
                  <q-card-separator/>
                  <q-card-actions>
                    <q-btn color="secondary">
                      <q-icon name="place"/>
                    </q-btn>
                    <q-btn color="tertiary" style="width: 80%;" icon-right="shopping_cart">
                      Order
                    </q-btn>
                  </q-card-actions>
                </q-card>
              </q-tab-pane>
            </q-tabs>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QTabs,
    QTabPane,
    QTab,
    QCheckbox,
    QCardSeparator,
    QCardActions,
    QRating,
    QCarousel,
    QCollapsible,
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

  export default {
    components: {
      QTabs,
      QTabPane,
      QTab,
      QCheckbox,
      QCardSeparator,
      QCardActions,
      QRating,
      QCarousel,
      QCollapsible,
      QItem,
      QList,
      QPopover,
      QTooltip,
      QLayout,
      QToolbar,
      QToolbarTitle,
      QSearch,
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
      return {}
    }
  }
</script>

<style>
  #avatarProfile {
    position: absolute;
    margin-top: -5%;
    margin-left: 8%;
    border-radius: 50%;
    width: 10%;
  }
</style>
