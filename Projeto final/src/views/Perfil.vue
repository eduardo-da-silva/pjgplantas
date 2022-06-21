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
            <div class="divs">
              Email:
            </div>
            <b-form-group id="input-group-2">
              <b-form-input id="input-2" v-model="form.email" required>
              </b-form-input>
            </b-form-group>
            <div class="divs">
              Nome:
            </div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                type="name"
                v-model="form.name"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">
              Endereço:
            </div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.endereco"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">
              Data de nascimento:
            </div>
            <b-form-group
              id="input-group-2">
              <b-form-input
                id="input-2"
                type="date"
                v-model="form.date"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">
              Email
            </div>
            <b-form-group
              class="forms"
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
            <b-button class="btnp" type="submit">Salvar</b-button>
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
    }
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
  align-content: center;
}
.divs{
  margin-right: 520px;
  color: black;
}
.btnp{
  background-color: #3E9661;
  border-color: #3E9661;
  padding: 10px;
  margin-top: 5px;
  color: white;
  width: 120px;
  font-size: 18px;
  opacity: 63%;
}
.formp {
  background-color: white;
  border-color: #3e9661;
  border-radius: 8px;
  padding: 60px;
  margin-top: 70px;
  height: 720px;
  width: 75vh;
  align-content: center;
}
.forms {
  color: black;
  margin-right: 480px;
}
#input-group-2 {
  margin-right: 420px;
  color: black;
}
#input-2 {
  width: 60vh;
  background-color: whitesmoke;
}
</style>
