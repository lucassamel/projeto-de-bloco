<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand @click="home" href="#">Sistema de Apoio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="home" href="#">Menu Principal</b-nav-item>
          <b-nav-item @click="pontosTuristicos" href="#">Pontos Turisticos</b-nav-item>
          <b-nav-item @click="ondeComer" href="#">Onde comer?</b-nav-item>
          <b-nav-item @click="sugestao" href="#">Sugestões</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "header",
  methods: {
    pontosTuristicos() {
      this.$router.push({ name: "pontos-turisticos" });
    },
    home() {
      this.$router.push({ name: "home" });
    },
    ondeComer() {
      this.$router.push({ name: "onde-comer" });
    },
    sugestao() {
      this.$router.push({ name: "sugestao" });
    }
  }
};
</script>

<style>


</style>