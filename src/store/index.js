import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import carts from './modules/carts'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  state: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    carts,
    category,
    user
  },
  plugins: [// vue持久化
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
