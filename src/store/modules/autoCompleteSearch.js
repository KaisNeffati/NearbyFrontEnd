import * as API from '../../api/autoCompleteSearchApi'

const state = {
  input: ''
}

// getters
const getters = {
  input: state => state.input
}

const mutations = {}

const actions = {
  autoCompleteSearch ({commit}, body) {
    console.log('input => ', body)
    API.getAutoCompleteResults(item => console.log('item =>', item), body.input)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
