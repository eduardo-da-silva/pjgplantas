<template>
  <body>
    <hr class="hr1" />
    <hr class="hr2" />
    <b-container class="login-page" fluid>
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
            v-if="showLogin===true"
          >
          <div class="dlogin">
              <a @click="showLogin=!showLogin"> {{ showLogin ? 'Cadastrar' : 'Logar'}}</a>
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
            <div class="buttons">
              <b-button class="btncad" type="submit">Logar</b-button>
              <b-button class="btncad2">Administrar</b-button>
            </div>
          </b-form>
           <b-form
            class="cform"
            @submit.prevent="login"
            v-else
          >
           <div class="dlogin">
              <a @click="showLogin=!showLogin"> {{ showLogin ? 'Cadastrar' : 'Logar'}}</a>
            </div>
            <div class="emsen">Email2222222:</div>
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
            <div class="emsen">Senha2222222:</div>
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
            <div class="buttons">
              <b-button class="btncad" type="submit">Logar</b-button>
              <b-button class="btncad2">Administrar</b-button>
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
      showLogin: true,
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
  // onReset(event) {
  //   event.preventDefault();
  //   // Reset our form values
  //   this.form.email = "";
  //   this.form.name = "";
  //   this.form.food = null;
  //   this.form.checked = [];
  //   // Trick to reset/clear native browser form validation state
  //   this.show = false;
  //   this.$nextTick(() => {
  //     this.show = true;
  //   });
  // },
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
  margin: 20% 40% 0 0%;
  padding: 50px;
  width: 500px;
  height: 500px;
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
  font-size: 35px;
  line-height: 29px;
  text-align: center;
  margin: 5% 0 0 0;
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
  width: 130px;
  font-size: 20px;
  border-radius: 4px;
  margin: 10% 0 0 10%;
}
.btncad:hover {
  background-color: #3e9661;
}
.emsen {
  padding: 8px;
  margin: 10% 0 0 0;
  font-size: 20px;
}
.btncad2 {
  margin-left: 5px;
  background: rgba(62, 150, 97, 0.95);
  border: 0;
  padding: 10px;
  width: 150px;
  font-size: 20px;
  border-radius: 4px;
  margin: 10% 0 0 10%;
}
.btncad2:hover {
  background-color: #3e9661;
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
.form-control {
  padding: 1;
  font-size: 16px;
  font-weight: bold;
  margin: 0% 5% 0 0;
}

@media (max-width: 844px) {
  .cform {
    width: 350px;
    margin: 80% 0% 0 0;
  }
  .form-control {
    margin: 3% 5% 0 0%;
    padding: 1px;
  }

  .titulo {
    margin: 10% 0 0 20%;
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
    display: flex;
    margin: 15% 13% 0 0;
  }
  .btncad {
    padding: 10px;
    height: 45px;
  }
  .btncad2 {
    padding: 10px;
    height: 45px;
  }
}
</style>
