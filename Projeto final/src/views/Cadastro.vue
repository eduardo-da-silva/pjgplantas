<template>
  <body>
    <hr class="hr1" />
    <hr class="hr2" />
    <b-container class="login-page">
      <b-row align-v="center">
        <b-col class="log">
          <h1 class="titulo">
            PJG <br />
            Plantas
          </h1>
        </b-col>
        <b-col>
          <b-form
            class="cform"
            @submit.prevent="login"
            @reset="onReset"
            v-if="show"
          >
            <div class="dlogin">
              <a href="/login"> Login</a> <span>|</span>
              <a href="/cadastro">Cadastro</a>
            </div>
            <div class="emsen">Email:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                v-model="form.email"
                type="email"
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira seu email"
              >
              </b-form-input>
            </b-form-group>
            <div class="emsen">Senha:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="password"
                v-model="form.password"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              ></b-form-input>
            </b-form-group>
            <div class="emsen" style="white-space: nowrap">
              Confirmar senha:
            </div>
            <b-form-input
              type="password"
              v-model="form.password"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha novamente"
            ></b-form-input>
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Aceitar os termos de uso
            </b-form-checkbox>
            <div class="buttons">
              <b-button class="btncad" type="submit">Cadastrar</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </body>
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
  margin: 10px;
}
.cform {
  background-color: white;
  border-radius: 8px;
  padding: 60px;
  margin: 20% 40% 0 0%;
  width: 500px;
  height: 550px;
  align-items: center;
  box-shadow: 0px 4px 10px 10px rgba(15, 52, 6, 0.42);
}
span {
  padding: 0 10px;
}
body {
  background-color: #3e9661;
  border-left: #0f3406;
}
.dlogin {
  font-size: 30px;
  line-height: 29px;
  text-align: center;
  margin: 2% 0 0 0;
}
a {
  color: #000000;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #3e9661;
  text-decoration: none;
  background-color: transparent;
}
.btncad {
  background-color: #3e9661;
  border: 0;
  padding: 10px;
  margin: 10% 0 0 35%;
  width: 120px;
  font-size: 20px;
  border-radius: 4px;
}
.btncad:hover {
  background-color: #3e9661;
}
.emsen {
  padding: 8px;
  font-size: 20px;
  margin: 5% 0 0 0;
}

#div-diagonal {
  width: 2px;
  height: 200px;
  background: black;
  transform: skew(20deg);
}
.titulo {
  position: absolute;
  color: #fff7f7;
  font-size: 80px;
  font-weight: 500;
  line-height: 70px;
  mix-blend-mode: screen;
  font-family: Jomolhari;
  margin: 0 0 0 35%;
}
.hr1 {
  position: absolute;
  width: 2100.46px;
  height: 0px;
  border: 1px solid #000000;
  transform: rotate(128.93deg);
}
.hr2 {
  position: absolute;
  width: 306px;
  height: 0px;
  border: 1px solid #42c623;
  transform: rotate(89.85deg);
  size: 5rem;
}
.hr4 {
  position: absolute;
  width: 326.17px;
  height: 0px;
  border: 1px solid #42c623;
  transform: rotate(-146.5deg);
}
.custom-control-label {
  margin: 18px 0 0 3px;
}
.custom-control-label::after {
  border: 1px solid #000000;
}
.form-control {
  padding: 1;
  font-size: 16px;
  font-weight: bold;
  margin: 0% 5% 0 0;
}
.row {
  display: block;
}

@media (max-width: 844px) {
  .cform {
    width: 350px;
    margin: 70% 0% 0 0;
  }
  .form-control {
    margin: 3% 5% 0 0%;
    padding: 1px;
  }

  .titulo {
    margin: 5% 0 0 20%;
  }
  .row {
    margin: 20% 20% 0% 2%;
  }
  .container-fluid {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
  }
  .buttons {
    margin: 10% 50% 0 0;
  }
  .btncad {
    padding: 10px;
    height: 45px;
  }
  .emsen {
    margin: 9% 0 0 0;
  }
}
</style>
