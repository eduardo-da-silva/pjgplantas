<template>
  <div>
    <br />
    <h2>Perfil</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-avatar variant="light"></b-avatar>
      <b-form-group
        id="input-group-1"
        label="E-mail:"
        label-for="input-1"
        description="Nunca compartilharemos seu e-mail com ninguém."
      >
        <b-form-input
          id="input1"
          v-model="form.email"
          type="email"
          placeholder="insira seu e-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome:" label-for="input-1">
        <b-form-input
          id="input1"
          v-model="form.name"
          placeholder="Insira seu nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Sobrenome:" label-for="input-3">
        <b-form-input
          id="input1"
          v-model="form.surname"
          placeholder="Insira seu sobrenome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Idade:" label-for="input-4">
        <b-form-input
          id="input1"
          v-model="form.age"
          placeholder="Insira sua idade"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Selecione seu gênero:" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
          >Masculino</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
          >Feminino</b-form-radio
        >

        <br />
        <div id="botao">
          <b-button v-b-modal.modal-1 variant="info" @click="salvarPerfil"
            >salvar</b-button
          >
          <b-button type="reset" variant="danger">Deletar</b-button>
        </div>
      </b-form-group>
    </b-form>
    <b-form-radio-group
      id="radio-group-1"
      v-model="selected"
      :options="options"
      :aria-describedby="ariaDescribedby"
      name="radio-options"
    >
      <div class="mb-2"></div>
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  name: "perfil",
  data() {
    return {
      form: {
        email: "",
        name: "",
        surname: "",
        selected: "",
        age: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.surname = "";
      this.form.age = "";
      this.form.selected = " ";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
#botao {
  background-color: "black";
}
h2 {
  color: #17a2b8;
  margin: 0px;
}

form {
  background-color: white;
  width: 700px;
  margin: 40px auto 40px auto;
  border-radius: 20px;
}
#input1 {
  width: 80%;
  margin: 0 auto;
}
</style>