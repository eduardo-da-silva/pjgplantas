<template>
  <div>
    <b-container class="login-page" fluid>
      <b-row align-v="center">
        <b-col></b-col>
        <b-col>
          <b-form
            class="formp"
            @submit.prevent="login"
            @reset="onReset"
            v-if="show"
          >
            <div class="dlogin">PERFIL</div>
            <div class="divs">Email:</div>
            <b-form-group id="input-group-2">
              <b-form-input id="input-2" v-model="form.email" required>
              </b-form-input>
            </b-form-group>
            <div class="divs">Nome:</div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                type="name"
                v-model="form.name"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">Endereço:</div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.endereco"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">Data de nascimento:</div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                type="date"
                v-model="form.date"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">Sexo:</div>
            <b-form-group class="forms" v-slot="{ ariaDescribedby }">
              <b-form-radio
                id="opt1"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="A"
                >Feminino</b-form-radio
              >
              <b-form-radio
                id="opt2"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="B"
                >Masculino</b-form-radio
              >
            </b-form-group>
            <b-button href="/" class="btnp" type="submit">Salvar</b-button>
          </b-form>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </b-container>
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
        selected: "",
        endereco: "",
        date: "",
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
      this.form.date = "";
      this.form.selected = " ";
      this.form.endereco = "";
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
.dlogin {
  font-size: 2rem;
  color: black;
  padding: 20px;
  text-align: center;
}
.login-page {
  background-image: url("https://img.freepik.com/fotos-gratis/fundo-de-folhas-verdes-tropicais_53876-88891.jpg?t=st=1655655273~exp=1655655873~hmac=130a104d203ac8ab45624aaaa9f7d5fb5dea77ef494644a3636d38a0f738fc3a&w=1380");
  opacity: 90%;
}
.divs {
  color: black;
  font-style: normal;
  font-weight: 500;
  white-space: nowrap;
  font-size: 19px;
}
.btnp {
  background-color: blue;
  border-radius: 6px;
  padding: 10px;
  color: white;
  width: 130px;
  font-size: 22px;
  border: 0;
  margin: 10% 0 0 40%;
}


.btnp:hover {
  background: rgba(25, 57, 124, 0.63);
  opacity: 90%;
}
.formp {
  box-shadow: 5px 8px 10px 5px rgba(62, 150, 97, 0.79);
  border-radius: 10px;
  padding: 70px;
  height: 720px;
  width: 75vh;
  margin: 10% 0 10% 0;
  background-color: white;
}
.form-control {
  background: white;
  border-style: none none solid none;
  border-color: rgba(62, 150, 97, 0.95);
}
.forms {
  margin: 2% 0 2% 0;
}

@media (max-width: 390px) {
  .navpr {
    box-shadow: none;
  }
  .col {
    width: 200px;
  }
}
</style>
