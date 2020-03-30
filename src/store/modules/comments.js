import axios from "axios";

const state = {
  comments: [
    {
      "id": 1,
      "nome": "Lucas Samel",
      "email": "lucas.samel@gmail.com",
      "comentario": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
      "assunto": "Outros"
    },
    {
      "id": 2,
      "nome": "Lucas Samel",
      "email": "lucas.samel@gmail.com",
      "comentario": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
      "assunto": "Outros"
    },
    {
      "id": 3,
      "nome": "Lucas Samel",
      "email": "lucas.samel@gmail.com",
      "comentario": "Ótimo site! Me ajudou a encontrar bons locais para comer.",
      "assunto": "Outros"
    },
  ]
};

const getters = {
  allComments: state => state.comments
};

const actions = {
  getComments({ commit }) {
    axios.get(
      this.state
    ).then((response) => {
      commit('getComments', response.data);
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
  }
};
const mutations = {
  getComments: (state, comments) => (state.comments = comments),
  addComment: (state, new_comment) => state.comments.push(new_comment),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
