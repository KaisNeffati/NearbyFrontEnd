import Vue from 'vue'
import Vuex from 'vuex'
import autoCompleteSearch from './modules/autoCompleteSearch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    autoCompleteSearch
  }
})
