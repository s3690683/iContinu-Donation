import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store = new Vuex.Store({
//export default new Vuex.Store({
  strict: true,
  state: {
    auth: null,
    showAuthModal: false,
    loading: false,
  },
  getters:{
    isAuthenticated : state => {
      return state.auth !== null && state.auth.access_token !== null;
    },

    isInRole : (state, getters) => role => {
      const result = getters.isAuthenticated && state.auth.roles.indexOf(role) > -1;
      return result;
    }
  },
  mutations: {
    initialise : (state, payload) => {
      Object.assign(state, payload);
    },

    showAuthModal : state => {
      state.showAuthModal = true;
    },

    hideAuthModal : state => {
      state.showAuthModal = false;
    },

    loginRequest : state => {
      state.loading = true;
    },

    loginSuccess : (state, payload) => {
      state.auth = payload;
      state.loading = false;
    },

    loginError : state => {
      state.loading = false;
    },

    registerRequest : state => {
      state.loading = true;
    },

    registerSuccess : state => {
      state.loading = false;
    },

    registerError : state => {
      state.loading = false;
    },

    logout : state => {
      state.auth = null;
    },
  },
  actions: {
    login : ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        commit("loginRequest");
        console.log(payload.password);
        axios
          .post("https://ausdonationfypv1-test.ap-southeast-2.elasticbeanstalk.com/token","username=" +payload.username+
                "&password=" +payload.password+"&grant_type=password",{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
          .then(response => {
            const auth = response.data;
            axios.defaults.headers.common["Authorization"] = `Bearer ${
              auth.access_token
            }`;
            commit("loginSuccess", auth);
            commit("hideAuthModal");
            resolve(response);
          })
          .catch(error => {
            commit("loginError");
            delete axios.defaults.headers.common["Authorization"];
            reject(error.response);
          });
      });
    },

    register : ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        commit("registerRequest");
        axios
          .post("https://ausdonationfypv1-test.ap-southeast-2.elasticbeanstalk.com/api/Account/Register",payload,{headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080','Content-Type': 'application/json'}})
          .then(response => {
            commit("registerSuccess");
            resolve(response);
          })
          .catch(error => {
            commit("registerError");
            reject(error.response);
          });
      });
    },

    logout : ({ commit }) => {
      commit("logout");
      delete axios.defaults.headers.common["Authorization"];
    }
  }
},
);

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
