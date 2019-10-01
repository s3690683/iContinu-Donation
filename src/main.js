import Vue from 'vue'
import App from './App.vue'
import router from "./components/router";
import BootstrapVue from 'bootstrap-vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import store from "./store"
import axios from 'axios'

import {
  faPlus, faMinus, faTrash ,faCheck
} from "@fortawesome/free-solid-svg-icons"

library.add(faPlus, faMinus, faTrash ,faCheck);
Vue.use(router);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const initialStore = localStorage.getItem("store");

    if (initialStore) {
      store.commit("initialise", JSON.parse(initialStore));
      if (store.getters.isAuthenticated) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${
          store.state.auth.access_token
        }`;
      }
    }
    //
    axios.interceptors.response.use(undefined, function(error) {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        store.state.auth.refresh_token
      ) {
        originalRequest._retry = true;
    
        const payload = {
          refresh_token: store.state.auth.refresh_token
        };
    
        return axios
          .post("/api/token/refresh", payload)
          .then(response => {
            const auth = response.data;
            axios.defaults.headers.common["Authorization"] = `Bearer ${
              auth.access_token
            }`;
            originalRequest.headers["Authorization"] = `Bearer ${
              auth.access_token
            }`;
            store.commit("loginSuccess", auth);
            return axios(originalRequest);
          })
          .catch(error => {
            store.commit("logout");
            router.push({ path: "/" });
            delete axios.defaults.headers.common["Authorization"];
            return Promise.reject(error);
          });
      }
    
      return Promise.reject(error);
    });
  }
}).$mount('#app')
