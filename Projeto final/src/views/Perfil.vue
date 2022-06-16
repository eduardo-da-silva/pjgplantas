<template>
  <div>
    <b-container class="login-page" fluid>
      <b-row align-v="center">
        <b-col></b-col>
        <b-col>
          <b-form
            class="formp border border-success"
            @submit.prevent="login"
            @reset="onReset"
            v-if="show"
          >
            <div class="dlogin">PERFIL</div>
            <b-form-group id="input-group-2" label="Email" label-for="input-1">
              <b-form-input id="input-2" v-model="form.email" required>
              </b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Nome" label-for="input-2">
              <b-form-input
                id="input-2"
                type="name"
                v-model="form.name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Endereço"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.endereco"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Data de Nascimento"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="date"
                v-model="form.date"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="forms"
              label="Sexo"
              v-slot="{ ariaDescribedby }"
            >
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
            <b-button class="btncad" type="submit">Login</b-button>
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
  margin-top: 0px;
  color: black;
  padding: 20px;
  align-content: center;
}
.btncad {
  background-color: #72ae63;
  border-color: whitesmoke;
  padding: 10px;
  margin-top: 5px;
  color: whitesmoke;
}
.formp {
  background-color: white;
  border-color: #3e9661;
  border-radius: 8px;
  padding: 60px;
  margin-top: 70px;
  margin-right: 80px;
  height: 720px;
  width: 100vh;
  align-content: center;
}
.forms {
  color: black;
  margin-right: 420px;
}
#input-group-2 {
  margin-right: 420px;
  color: black;
}
#input-2 {
  width: 80vh;
  background-color: whitesmoke;
}
</style>
