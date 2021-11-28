import { api } from '@/api';

export const product = {
  namespaced: true,
  state: () => ({
    items: [],
    item: null,
    color: null,
  }),
  getters: {
    qtyMax: (state) => {
      if (!state.color) {
        return 0;
      }
      return state.item.colors.find((el) => el.id === state.color).qtyInStock;
    },
  },
  actions: {
    fetchAll: async ({ commit }) => {
      const res = await api.get('/products');
      commit('SET_ITEMS', res);
    },
    fetch: async ({ commit }, id) => {
      const res = await api.get(`/products/${id}?_embed=colors&_embed=comments&_expand=category`);
      commit('SET_ITEM', res);
    },
    fetchByCategory: async({ commit }, categoryId) => {
      const res = await api.get(`/products?categoryId=${categoryId}&_embed=colors`);
      commit('SET_ITEMS', res);
    },
    setColor: ({ commit }, color) => commit('SET_COLOR', color),
    addComment: async ({ commit, dispatch, state }, comment) => {
      comment.productId = state.item.id;
      await api.post('/comments', comment);
      dispatch('fetch', state.item.id);
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_ITEM(state, item) {
      state.item = item;
      state.color = null;
    },
    SET_COLOR(state, color) {
      state.color = color;
    },
  }
};
