<template>
  <q-stepper color="secondary" ref="stepper" alternative-labels>
    <q-step default name="first" title="Delivery details" active-icon="shopping_basket">
      <q-input v-model="email" type="email" color="tertiary" inverted placeholder="something ..." stack-label="Title"
               prefix="I am delivering"/>
      <q-input type="number" align="right" suffix="EUR" inverted color="brown"
               stack-label="Starting from"/>
      <q-stepper-navigation>
        <q-btn color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
      </q-stepper-navigation>
    </q-step>
    <q-step name="second" icon="theaters" title="Attach media" subtitle="Images and Video">
      <q-uploader
        multiple
        color="secondary"
        float-label=""
        hide-upload-button
        :after="[
    {
      icon: 'warning',
      handler () {
        // do something...
      }
    }
  ]"
      />
      <q-stepper-navigation>
        <q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
        <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
      </q-stepper-navigation>
    </q-step>
    <q-step name="third" icon="place" title="Location" subtitle="Make sure you put the nearest one ">
      <gmap-map ref="map"
                :center="{lat:36.804449, lng:10.182280}"
                :zoom="15"
                map-type-id="roadmap"
                style="width: 100%; height: 500px;"
      >
        <gmap-circle :center="this.initcircle.center" :draggable="true" :radius="this.initcircle.radius"
                     :editable="true"
                     @bounds_changed="updateEdited">
        </gmap-circle>
      </gmap-map>
      {{circle}}
      <q-stepper-navigation>
        <q-btn color="secondary" @click="nextMap()">Next</q-btn>
        <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
      </q-stepper-navigation>
    </q-step>
    <q-step name="fifth" disable title="Disabled">
      <div v-for="n in 3">Step 4</div>
      <q-stepper-navigation>
        <q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
        <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
      </q-stepper-navigation>
    </q-step>
    <q-step name="fourth" title="Review and Finalize">
      <div v-for="n in 3">Step 5</div>
      <q-stepper-navigation>
        <q-btn color="secondary" @click="$refs.stepper.goToStep('first')">Restart</q-btn>
        <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script>
  import {
    QStepper,
    QStep,
    QStepperNavigation,
    QBtn,
    QInput,
    QField,
    QUploader
  } from 'quasar'
  export default {
    components: {
      QStepper,
      QStep,
      QStepperNavigation,
      QBtn,
      QInput,
      QField,
      QUploader
    },
    data () {
      return {
        email: '',
        edited: null,
        initcircle: {
          center: {lat: 36.804449, lng: 10.182280},
          radius: 100
        },
        circle: {
          center: {lat: 36.804449, lng: 10.182280},
          radius: 100
        }
      }
    },
    methods: {
      deg2rad (deg) {
        return deg * (Math.PI / 180)
      },
      getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2) {
        let R = 6371 // Radius of the earth in km
        console.log(lat1)
        console.log(lat2)
        let dLat = this.deg2rad(lat2 - lat1) // deg2rad below
        let dLon = this.deg2rad(lon2 - lon1)
        let a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        let d = R * c // Distance in km
        console.log('distance ==> ', d)
        return d
      },
      updateEdited (c) {
        let radius = this.getDistanceFromLatLonInKm(c.b.b, c.f.b, c.b.f, c.f.f)
        let lat = (c.f.b + c.f.f) / 2
        let lng = (c.b.b + c.b.f) / 2
        this.circle = {center: {lat, lng}, radius: (radius / 0.317) * 100}
      },
      nextMap () {
        this.$refs.stepper.next()
        this.initcircle = this.circle
      }
    }
  }
</script>
