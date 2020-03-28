import Vuex from "vuex";
import Vue from "vue";
import sugestao from './modules/sugestao.js'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sugestao
  }
});
