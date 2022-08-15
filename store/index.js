import Vuex from "vue";

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: {},
    },
    mutations: {
      setUsers(state, users) {
        state.users = users;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {},
      addUser() {},
      removeUser() {},
    },
    getters: {},
  });
};
