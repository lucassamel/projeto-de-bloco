import axios from "axios";

const state = {
    comments:[]
  };
  
  const getters = {
    allComments: state => state.comments,
    commentById: (state) => (id) => (state.comments = state.comments.filter(i => i.id == id))[0],
  };

  const actions = {
    getComments({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/comments"
          ).then((response) => {
            commit('getComments', response.data);
        });
    },
    addComment({commit} , new_user){
      commit('addUser', new_user);
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
  