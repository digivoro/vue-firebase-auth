import Vue from "vue";
import Vuex from "vuex";
import { store } from "quasar/wrappers";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      currentUser: null
    },

    mutations: {
      USER_LOGIN: (state, user) => {
        state.currentUser = user;
      },
      USER_LOGOUT: state => {
        state.currentUser = null;
      }
    },

    actions: {
      USER_LOGIN: async (context, user) => {
        // Login con firebase
      },
      USER_LOGOUT: async (context, user) => {
        // LogOut con firebase
      }
    },

    getters: {
      currentUser: state => {
        return state.currentUser;
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
