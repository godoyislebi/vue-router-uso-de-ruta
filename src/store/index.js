import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tienda: [],
    filter: "",
  },
  getters: {
    filterData(state) {
      return state.tienda.filter((fil) => fil.codigo.includes(state.filter));
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.tienda = payload;
      console.log("SET_DATA", payload);
    },
    SET_FILTER(state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    getData({ commit }) {
      const data = [
        {
          codigo: "0001",
          nombre: "sekiro",
          stock: 100,
          precio: 30000,
          color: "red",
          destacado: true,
        },
        {
          codigo: "0002",
          nombre: "fifa 21",
          stock: 100,
          precio: 25000,
          color: "blue",
          destacado: false,
        },
        {
          codigo: "0003",
          nombre: "gears of war 4",
          stock: 100,
          precio: 15000,
          color: "green",
          destacado: true,
        },
        {
          codigo: "0004",
          nombre: "mario tennis aces",
          stock: 100,
          precio: 35000,
          color: "yellow",
          destacado: false,
        },
        {
          codigo: "0005",
          nombre: "bloodborne",
          stock: 100,
          precio: 10000,
          color: "blue",
          destacado: false,
        },
        {
          codigo: "0006",
          nombre: "forza horizon 4",
          stock: 100,
          precio: 20000,
          color: "red",
          destacado: true,
        },
      ];
      commit("SET_DATA", data);
    },
  },
  modules: {},
});
