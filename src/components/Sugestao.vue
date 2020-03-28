<template>
  <div>
    <div v-for="i in comment" :key="i.id">
      <h2 class="centro">Sugestões</h2>
      <b-card bg-variant="light" text-variant="black" title: {{i.name}}>
        <b-card-text>{{i.body}}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Comments",
  components: {},
  methods: {
    ...mapActions(["getComments", "deleteComment"])
  },
  computed: mapGetters(["comment"]),
  created() {
    this.getComments();
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