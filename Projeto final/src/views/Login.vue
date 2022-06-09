<template>
  <body class="blogin">
    <div id="div-diagonal"> <hr/> </div>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="cform">
      <div class="dlogin">
      Login
      Cadastro
      </div>
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Digite seu email" required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" placeholder="Digite sua senha" required></b-form-input>
        </b-form-group>
        <b-button class="btncad">Login</b-button>
        <b-button class="btncad">Administrar</b-button>
      </b-form>
    </div>
  </body>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      show: true
    }
  },
  methods: {
    login() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // ...
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
          // // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.email;
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
  },
  onSubmit(event) {
    event.preventDefault()
    alert(JSON.stringify(this.form))
  },
  onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.email = ''
    this.form.name = ''
    this.form.food = null
    this.form.checked = []
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
</script>

<style>
.cform {
  background-color: whitesmoke;
  margin-right: 415px;
  margin-left: 1000px;
  padding: 70px;
  margin-top: 50px;
  border-radius: 8px;
  padding: auto;
  box-shadow: 0 0 1em #0F3406;
  height: 400px;
}
body {
  background-color: #3E9661;
  border-left: #0F3406;
}

.dlogin {
  font-size: 2rem;
  
}
.btncad {
  background: #3E9661;
  border-color: #3E9661;
  margin-right: 4000 px;
}
.input-group-1{
    font-size: 1rem;
}
#div-diagonal {
  width: 2px;
  height: 200px;
  background: black;
  transform: skew(20deg);
}
</style>