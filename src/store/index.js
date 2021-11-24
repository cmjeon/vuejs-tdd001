import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {},
    list: [],
    item: {},
    count: 0,
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
    },
    getCount(state) {
      return state.count;
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
    },
    SET_COUNT(state, count) {
      state.count = count;
    },
  },
  actions: {

  }
});

export default store