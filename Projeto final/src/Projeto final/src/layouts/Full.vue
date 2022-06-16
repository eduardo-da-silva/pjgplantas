<template>
  <div class="dprincipal">
    <b-navbar class="navpr" toggleable="lg" type="dark">
      <b-navbar-brand href="/">PJG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown class="dropp" text="Produtos" right>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item href="/perfil">Perfil</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Carrinho</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/login">Sair</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <hr class="hrlay" />
    <b-container id="footer" class="bv-example-row">
      <b-row>
        <b-col>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.</b-col
        >
        <b-col
          >Some quick example text to build on the card title and make up the
          bulk of the card's content.</b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.hrlay {
  margin-top: 100px;
  border-color: #3e9661;
}
.LogoLay {
  margin-top: 250px;
  justify-content: center;
}
.titlepl {
  margin-right: 900px;
  padding: 30px;
  font-size: 20px;
  color: #3e9661;
}
.btn1 {
  background-color: #3e9661;
  opacity: 63%;
  border-color: #3e9661;
  margin-right: 15px;
}
.navpr {
  background-color: #3e9661;
  opacity: 63%;
  height: 65px;
  margin-right: 15px;
  width: 100%;
}
.dprincipal {
  font-family: Jomolhari;
}
#container2 {
  padding: 20px;
}

.imgpr {
  height: 60vh;
  width: 100%;
}
#footer {
  height: 250px;
  margin-top: 100px;
  color: #3e9661;
}
</style>
