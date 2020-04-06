<template>
  <div>
    <h2 class="centro">Sugestões</h2>
    <div v-for="i in allComments" :key="i.id">      
      <b-card bg-variant="light" text-variant="black" >
        <b-card-text>Nome: {{i.nome}} </b-card-text>
        <p>Comentario: {{i.comentario}} </p>
        <p>Assunto: {{i.assunto}} </p>
        <b-button size="sm" class="mb-2" variant="danger">
          <b-icon @click="deleteComment(i.id)" icon="trash" ></b-icon> 
        </b-button>
      </b-card>
      
      <br>
    </div>
    <AddComentario/>
  </div>
</template>

<script>
import AddComentario from './AddComentario'
import { mapGetters,mapActions } from "vuex";

export default {
  name: "Comments",
  components: {
    AddComentario
  },
 
  computed: mapGetters(["allComments"]),
  created() {
    this.getComments();
  },

  methods:{
    ...mapActions(["getComments","deleteComment"]),
  }
 
};
</script>

<style>
.centro {
  align-items: center;
  margin: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>