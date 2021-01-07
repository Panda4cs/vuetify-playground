import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Omar",
    msgs: [
      {
        id: "1",
        mine: false,
        text: "Heloo salt",
        sender: "Omar",
      },
      {
        id: "2",
        mine: false,
        text: "Heloo salt",
        sender: "Omar",
      },
      {
        id: "3",
        mine: false,
        text: "Heloo salt",
        sender: "Omar",
      },
      // {
      //   id: "4",
      //   mine: false,
      //   text: "Heloo salt",
      //   sender: "Omar",
      // },
      // {
      //   id: "5",
      //   mine: false,
      //   text: "Heloo salt",
      //   sender: "Omar",
      // },
      // {
      //   id: "6",
      //   mine: false,
      //   text: "Heloo salt",
      //   sender: "Omar",
      // },
    ],
  },
  mutations: {
    addS: (state) => {
      state.msgs.push({
        id: "5",
        mine: false,
        text: "Heloo salt",
        sender: "Omar",
      });
    },
  },
  actions: {},
  modules: {},
  getters: {
    getName: (state) => state.name,
    getMsgs: (state) => state.msgs,
    
  },
});
