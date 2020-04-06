import axios from "axios";

const state = {
  comments: []
};

const getters = {
  allComments: state => state.comments
};

const actions = {

  getComments({ commit }) {
    axios.get("./json/comments.json").then((response) => {
      commit('getComments', response.data.comments);
    });
  },

  addComment({ commit }, new_comment) {
    const new_index = state.comments.length + 1
    const response = {
      "id": new_index,
      "nome": new_comment.nome,
      "emai":new_comment.email,
      "comentario":new_comment.comentario,
      "assunto":new_comment.assunto,
    }
    commit("addComment", response);
  },
  deleteComment({ commit }, id) {
    commit("removeComment", id);
  },
};
const mutations = {
  
  getComments: (state, comments) => (state.comments = comments),
  addComment: (state, new_comment) => state.comments.push(new_comment),
  removeComment: (state, id) =>
    (state.comments = state.comments.filter(t => t.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
