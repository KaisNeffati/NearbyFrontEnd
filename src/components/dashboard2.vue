<template>
  <div>
    <q-toolbar slot="header" class="category-toolbar">
      <q-btn flat no-caps>
        Clothes
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        SuperMarket
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Electornics
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Books
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Cosmetics
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Cooking
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>

      <q-btn flat no-caps>
        Decorations
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>

      <q-btn flat no-caps>
        Games
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Automative
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Houses, Flats and Rooms
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn flat no-caps>
        Other
        <q-popover style="margin-top: 5px;" anchor="bottom left" self="top left" ref="popover">
          <!--
            The DOM element(s) that make up the popup,
            in this case a list:
          -->
          <q-list link class="no-border">
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Remove Card"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Send Feedback"/>
            </q-item>
            <q-item @click="$refs.popover.close()">
              <q-item-main label="Share"/>
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
    </q-toolbar>

    <q-btn no-caps flat style="margin: 1% 0 -1.5% 1.5%;display: block" color="secondary"
           @click="$refs.layoutModalMap.open()" >
      Location :
      <q-icon name="place"/>
      {{statusText}}
    </q-btn>
    <q-btn style="margin: 2% 0 0 1.5%;" color="secondary" @click="$refs.layoutModal.open()">
      <q-icon name="public"/>
    </q-btn>
    <router-link style="margin: 2% 0 0 21.5%;color: #ffc107" to="/deliverForm">
      <q-btn style="margin-top: 2%">
        Deliver something
      </q-btn>
    </router-link>
    <q-card inline
            style="background-color:#26a69aba !important;color:white;width: 30%;position: absolute;right: 1.2%;">
      <q-card-main>
        <h6>Trending</h6>
        <q-chip icon="loyalty">
          Computers
        </q-chip>
        <q-chip icon="loyalty" style="background-color: rgba(251, 92, 80, 0.91); color: white;font-size: small">
          Books
        </q-chip>
        <q-chip icon="loyalty" style="background-color: rgba(251, 92, 80, 0.91); color: white;font-size: small">
          Books
        </q-chip>
        <q-chip icon="loyalty" style="background-color: rgba(251, 92, 80, 0.91); color: white;font-size: small">
          Books
        </q-chip>
        <q-chip icon="loyalty" style="background-color: rgba(251, 92, 80, 0.91); color: white;font-size: small">
          Games
        </q-chip>
      </q-card-main>
    </q-card>
    <q-modal @open="$refs.mapLocation.resize()" ref="layoutModalMap" :content-css="{minWidth: '90vw', minHeight: '90vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="secondary">
          <q-btn flat @click="$refs.layoutModalMap.close()">
            <q-icon name="keyboard_arrow_left"/>
          </q-btn>
          <div class="q-toolbar-title">
            <q-icon name="place"/>
            Choose location : {{statusText}}
          </div>
        </q-toolbar>
        <q-toolbar color="secondary" slot="footer">
          <div class="q-toolbar-title">
          </div>
        </q-toolbar>
        <gmap-map ref="mapLocation"
                  :center="{lat:36.804449, lng:10.182280}"
                  :zoom="15"
                  map-type-id="roadmap"
                  style="width: 100%; height: 100%;"
        >
          <gmap-marker
            :position="position"
            :clickable="true"
            :draggable="true"
            icon="/statics/location1.png"
            @dragend="showAddress"
          ></gmap-marker>
        </gmap-map>
      </q-modal-layout>
    </q-modal>
    <q-modal ref="layoutModal" :content-css="{minWidth: '90vw', minHeight: '90vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="secondary">
          <q-btn flat @click="$refs.layoutModal.close()">
            <q-icon name="keyboard_arrow_left"/>
          </q-btn>
          <div class="q-toolbar-title">
            <q-icon name="place"/>
            Choose location
          </div>
        </q-toolbar>
        <q-toolbar color="secondary" slot="footer">
          <div class="q-toolbar-title">
          </div>
        </q-toolbar>
        <world width="100%" height="100%"></world>
      </q-modal-layout>
    </q-modal>
    <div class="row">
      <div class="col-8" style="padding: 1%;">
        <q-pull-to-refresh style="margin-top: 5%;display: inline-block;" :distance="5" :handler="refresher">
          <!-- Content, whatever you like -->
          <!--            <q-btn no-caps	flat style="margin-top
                      : -2%;display: block;" color="secondary">
                        Location :
                        <q-icon name="place"/>
                        Rue de Zeroud
                      </q-btn>-->
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
              <q-checkbox
                slot="overlay"
                v-model="favorites"
                class="favorite"
                color="red"
                checked-icon="favorite"
                unchecked-icon="favorite_border"
                style="float: right;margin: 5%;"
              />
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
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
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
        </q-pull-to-refresh>
      </div>
      <div class="col-4" style="padding: 1.5%;margin-top: 5%">
        <gmap-map ref="map"
                  :center="{lat:36.804449, lng:10.182280}"
                  :zoom="15"
                  map-type-id="roadmap"
                  style="width: 30%; height: 50%; position: fixed"
        >
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

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

  export default {
    components: {
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
        statusText: '',
        favorites: [],
        search: '',
        position: {lat: 36.804449, lng: 10.182280},
        stars: 0,
        layoutStore,
        text: '',
        mapLoaded: false,
        gallery: [
          'statics/food/vegtables.jpg',
          'statics/food/pets.jpg',
          'statics/food/salsa.jpg'
        ],
        center: {lat: 10.0, lng: 10.0}
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
      },
      showAddress (latlng) {
        let location = {lat: latlng.latLng.lat(), lng: latlng.latLng.lng()}
        let geocoder = new google.maps.Geocoder()
        let that = this
        geocoder.geocode({'location': location}, function (results, status) {
          if (status === 'OK') {
            if (results[1]) {
              console.log(results)
              that.statusText = results[1].formatted_address
            }
          }
          else {
            that.statusText = location
          }
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
