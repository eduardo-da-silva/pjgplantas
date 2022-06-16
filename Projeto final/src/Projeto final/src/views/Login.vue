<template>
  <b-container class="login-page" fluid>
    <b-row align-v="center">
      <b-col class="log">
        <h1 class="titulo">PJG</h1>
        <h1 class="titulo">Plantas</h1>
      </b-col>
      <b-col></b-col>
      <b-col>
        <b-form
          class="cform"
          @submit.prevent="login"
          @reset="onReset"
          v-if="show"
        >
          <div class="dlogin">Login Cadastro</div>
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Digite seu email"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Senha" label-for="input-2">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="Digite sua senha"
              required
            ></b-form-input>
          </b-form-group>
          <b-button class="btncad" type="submit">Login</b-button>
          <b-button class="btncad2">Administrar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    login() {
      if (
        this.form.email === "admin@admin.com" &&
        this.form.password === "admin"
      ) {
        alert("ok");
        this.$router.push("/");
      } else {
        alert("Email ou senha incorretos");
      }
      // const provider = new GoogleAuthProvider();
      // const auth = getAuth();
      // signInWithPopup(auth, provider)
      //   .then(() => {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     // const credential = GoogleAuthProvider.credentialFromResult(result);
      //     // const token = credential.accessToken;
      //     // The signed-in user info.
      //     // const user = result.user;
      //     // ...
      //     this.$router.push({ name: 'Home' });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     // // Handle Errors here.
      //     // const errorCode = error.code;
      //     // const errorMessage = error.message;
      //     // // The email of the user's account used.
      //     // const email = error.email;
      //     // // The AuthCredential type that was used.
      //     // const credential = GoogleAuthProvider.credentialFromError(error);
      //     // ...
      //   });
    },
  },
  onReset(event) {
    event.preventDefault();
    // Reset our form values
    this.form.email = "";
    this.form.name = "";
    this.form.food = null;
    this.form.checked = [];
    // Trick to reset/clear native browser form validation state
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  },
};
</script>

<style>
.login-page {
  height: 100vh;
  font-family: Jomolhari;
}
.cform {
  background-color: white;
  border-radius: 8px;
  padding: 50px;
  margin-top: 205px;
  margin-right: 80px;
  height: 500px;
  align-content: center;
}
body {
  background-color: #3e9661;
  border-left: #0f3406;
  height: 100vh;
}

#input-2 {
  margin-right: 100px;
}

.dlogin {
  font-size: 2rem;
  margin-top: 3px;
}
.btncad {
  background-color: #72ae63;
  border-color: #72ae63;
  padding: 9px;
}

.btncad2 {
  margin-left: 20px;
  background-color: #72ae63;
  border-color: #72ae63;
  padding: 9px;
}
#input-group-1 {
  font-size: 1rem;
}
#div-diagonal {
  width: 2px;
  height: 200px;
  background: black;
  transform: skew(20deg);
}
.titulo {
  color: aliceblue;
  font-size: 3rem;
}
.log {
  margin-top: 150px;
}
</style>
