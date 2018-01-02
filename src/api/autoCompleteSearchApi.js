/**
 * Created by Kais NEFFATI on 16/12/2017.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config/googleApiConfig'

Vue.use(VueResource)

export function getAutoCompleteResults (cb, input) {
  Vue.http.get(config.URL, {
    params: {
      input: input,
      types: 'geocode',
      key: config.API_KEY
    }
  }).then(res => cb(res)).catch(err => { console.log(err) })
}
