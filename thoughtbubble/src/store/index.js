import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    loadArticles(state, payload) {
      state.articles = payload
    },
    addPost(state, payload) {
      state.articles.push(payload)
    }
  },
  actions: {
    loadArticles({commit}) {
      Vue.http.get('http://localhost:3000/articles')
          .then(res => res.json())
          .then(res => commit('loadArticles', res))
    },
    addPost({commit}, post) {
      Vue.http.post('http://localhost:3000/articles', post)
          .then(res => res.json())
          .then(res => commit('addPost', res))
    }
  }
})
