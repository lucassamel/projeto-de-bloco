<template>
  <div>
    <h2 class="centro">Sugestões</h2>
    <div v-for="i in allComments" :key="i.id">      
      <b-card bg-variant="light" text-variant="black" >
        <b-card-text>Nome: {{i.nome}} </b-card-text>
        <p>Comentario: {{i.comentario}} </p>
        <p>Assunto: {{i.assunto}} </p>
      </b-card>
      <br>
    </div>
    <AddComentario/>
  </div>
</template>

<script>
import AddComentario from './AddComentario'
import { mapGetters } from "vuex";

export default {
  name: "Comments",
  components: {
    AddComentario
  },
 
  computed: mapGetters(["allComments"]),
 
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