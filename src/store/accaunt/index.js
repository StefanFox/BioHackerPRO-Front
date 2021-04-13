import Vue from "vue";


export default {
  state: {
    userData: {
      is_admin: false,
      is_doc: false,
      is_active: true,
    }
  },
  getters: {
    isAuth(state) {
      return state.userData && state.userData.id
    },
    getUserData(state) {
      return state.userData
    },
    isClient(state) {
      console.log('state.userData', !!state.userData)
      console.log('!state.userData.is_admin', !state.userData.is_admin)
      console.log('!state.userData.is_doc', !state.userData.is_doc)
      console.log('state.userData.is_active', state.userData.is_active)
      console.log('state.userData && !state.userData.is_admin && !state.userData.is_doc && state.userData.is_active', state.userData && !state.userData.is_admin && !state.userData.is_doc && state.userData.is_active)
      return state.userData && !state.userData.is_admin && !state.userData.is_doc && state.userData.is_active
    },
    isDoc(state) {
      return state.userData && state.userData.is_doc && state.userData.is_active
    },
    isAdmin(state) {
      return state.userData && state.userData.is_admin && state.userData.is_active
    },
    getUserRole(state, getters) {
      console.log('state.isClient', getters.isClient)

      if (getters.isAdmin) {
        return 'admin'
      }
      if (getters.isDoc) {
        return 'doc'
      }
      if (getters.isClient) {
        console.log('w3 client')
        return 'client'
      }
      return 'noAuth'
    }
  },
  mutations: {
    setUserData(state, val) {
      state.userData = val
      localStorage.setItem('userData', val)
    }
  },
  actions: {
    updateInfoAboutUser(context) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.get('/api/v1/users/').then(response => {
          context.commit('setUserData', response.data)
          resolve(true);
        }).catch(error => {
          reject(error);
        })
      })
    }
  }
}