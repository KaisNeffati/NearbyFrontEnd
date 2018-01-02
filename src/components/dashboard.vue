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
          <router-link to="/">
            <img src="statics/muun-logo-white.png" height="40px" style="color: white; margin:0 auto"/>
          </router-link>
        </q-toolbar-title>

        <router-link to="/login" style="color: white">
        </router-link>
        <div class="fab-group">
          <q-fab-action
            color="primary"
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
        </q-item-side>

      </q-toolbar>
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
        <div class="col-9" style="padding: 1%;">
          <q-carousel arrows dots actions class="text-white">
            <div slot="slide" class="bg-primary" style="padding: 0">
              <img src="../assets/banner.png" width="100%" height="100%"/>
            </div>
            <div slot="slide" class="bg-secondary" style="padding: 0">
              <img src="../assets/banner1.png" width="100%" height="100%"/>
            </div>
            <div slot="slide" class="bg-tertiary" style="padding: 0">
              <img src="../assets/banner2.png" width="100%" height="100%"/>
            </div>
            <q-icon slot="action" name="camera_enhance"/>
            <q-icon slot="action" name="bookmark_border"/>
            <q-icon slot="action" name="add_shopping_cart"/>
          </q-carousel>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions align="between">
              <q-btn color="secondary">
                <q-icon name="place"/></q-btn>
              <q-btn color="tertiary">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
          <q-card inline style="width: 23%">
            <q-card-title>
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
              Demand title
              <div>
                <div style="float: right;font-size: medium;color: #ffc107;padding-top: 4%;" class="row items-center">
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star"/>
                  <q-icon name="star_border"/>
                </div>
                <div style="font-size: x-small;" class="row items-center">
                  <q-item-side class="post-avatar" avatar="/statics/Profile_avatar_placeholder_large.png" />
                  Kais NEFFATI
                </div>
              </div>
            </q-card-title>
            <q-card-main>
              <q-tabs no-pane-border inverted align="left">
                <q-tab default no-caps name="tab-1" style="font-size: xx-small" slot="title" label="Description"/>
                <q-tab no-caps name="tab-2" style="font-size: xx-small" slot="title" label="DETAILS"/>
                <q-tab-pane name="tab-1">Lorem deserunt mollit anim id est laborum.</q-tab-pane>
                <q-tab-pane name="tab-2">
                  Lorem ipsum tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </q-tab-pane>
              </q-tabs>
            </q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn color="tertiary" class="full-width">Make offer</q-btn>
            </q-card-actions>
          </q-card>
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
    QCardMedia
  } from 'quasar'
  import layoutStore from '../resources/layout-store'
  import anime from 'animejs'
  import Categories from './catagories.vue'
  import Orders from './orders.vue'
  import tn from '../assets/maps/tn.vue'

  export default {
    components: {
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
      QCardMedia
    },
    data () {
      return {
        stars: 0,
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

  .category-toolbar {
    background: #26a69a;
    min-height: 25px;
  }

  .q-toolbar button {
    min-height: 25px;
  }
</style>
