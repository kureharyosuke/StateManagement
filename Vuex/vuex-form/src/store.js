import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //data == state
  state: {
    allUsers: [
      { userId: "hoza123", password: "123", name: "Hoza", address: "Seoul", src: "https://goo.gl/oqLfJR" },
      { userId: "max123", password: "456", name: "Max", address: "Berlin", src: "https://goo.gl/Ksk9B9" },
      { userId: "lego123", password: "789", name: "Lego", address: "Busan", src: "https://goo.gl/x7SpCD" },
    ],
  },
  // computed == getters
  getters: {
    allUsersCount: (state) => {
      return state.allUsers.length;
    },
    countOfSouel: (state) => {
      // let count = 0;
      // state.allUsers.forEach((user) => {
      //   if (user.address === "Seoul") count++;
      // }
      // return count;
      return state.allUsers.filter((user) => user.address === "Seoul").length;
    },
    percentOfSouel: (state, getters) => {
      // return (state.allUsers.filter((user) => user.address === "Seoul").length / state.allUsers.length) * 100;
      return Math.round((getters.countOfSouel / state.allUsers.length) * 100);
    },
  },
  mutations: {},
  actions: {},
});
