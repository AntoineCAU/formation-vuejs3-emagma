import { api } from '@/api';

export const category = {
  namespaced: true,
  state: () => ({
    items: [],
    item: null,
  }),
  actions: {
    fetchAll: async ({ commit }) => {
      const res = await api.get('/categories');
      commit('SET_ITEMS', res);
    },
    fetch: async ({ commit }, id) => {
      const res = await api.get(`/categories/${id}`);
      commit('SET_ITEM', res);
    },
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_ITEM(state, item) {
      state.item = item;
    },
  }
};
