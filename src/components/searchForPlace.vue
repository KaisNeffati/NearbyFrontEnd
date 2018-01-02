<template>
  <q-search v-model="text"
            inverted color="amber"
            icon="place"
            ref="input"
            placeholder="Hire nearby">
    <gmap-autocomplete
      class="col q-input-target text-left"
      placeholder="Hire nearby"
      :selectFirstOnEnter="true"
      @place_changed="setPlace">
    </gmap-autocomplete>
  </q-search>
</template>
<script>
  import {
    QSearch
  } from 'quasar'

  export default {
    data () {
      return {
        text: '',
        location: {}
      }
    },
    components: {
      QSearch
    },
    methods: {
      setPlace (place) {
        this.location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      }
    }
  }
</script>
<style>
  .q-search input:first-child {
    display: none;
  }

  .pac-item {
    color: white;
    border-top: none;
  }

  .pac-container {
    z-index: 2000;
    background-color: #ffc107;
    margin-top: 11px;
    width: 217px !important;
    border-top: none;
  }

  .pac-logo:after {
    border-top: 1px solid white !important;
    display: none;
  }

  .pac-icon {
    background-image: url('../statics/ic_place_white_24dp_2x.png');
    background-size: 18px;
  }

  .pac-item-query {
    color: white;
  }

  .pac-item:hover {
    background-color: #26A69A;
  }

  .q-search .q-icon:last-child {
    display: none !important;
    z-index: -1;
  }
</style>
