<template>
  <div>
      <div class="form">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nome"
          type="text"
          pattern=".{3,}"
          title="Minimo de 3 characters"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
      id="textarea"
      v-model="form.comentario"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
      required
    ></b-form-textarea>
    <br>

    <b-form-group id="input-group-3" label="Assunto:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.assunto"
          :options="assunto"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

      </div>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

  export default {
      name: 'cadastro',
    data() {
      return {
        form: {
          email: '',
          nome: '',
          comentario:'',
        },
        assunto: [{ text: 'Select One', value: null }, 'Pontos Turisticos', 'Onde Comer', 'Sobre o Evento', 'Outros'],
        show: true
      }
    },
    methods: {
        ...mapActions(["addComment"]),

      onSubmit(evt) {
        this.addComment(this.form);
        evt.preventDefault()
        alert(JSON.stringify("Comentario Registrado"))

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.nome = ''
        this.form.comentario = ''
        this.form.assunto = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },

    
  }

  
</script>

<style >

.form{
    margin: 24px;
}

</style>