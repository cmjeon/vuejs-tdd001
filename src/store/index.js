import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {},
    list: [],
    item: {},
  },
  getters: {
    fetchedUser(state) {
      return state.user;
    },
    fetchedList(state) {
      return state.list;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_ITEM(state, item) {
      state.item = item;
    }
  },
  actions: {

  }
});

export default store