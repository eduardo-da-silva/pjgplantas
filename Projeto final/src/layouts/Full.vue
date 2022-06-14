<template>
  <div class="dprincipal">
    <b-navbar class="navpr" toggleable="lg" type="dark">
      <b-navbar-brand href="#">PJG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="">Home</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown class="dropp" text="Produtos" right>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item href="#">Perfil</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Carrinho</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Sair</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="LogoLay">
      Logo
      <hr class="hrlay" />
    </div>
    <div class="titlepl">Plantas de Sombra</div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div class="titlepl">Plantas de Sombra</div>
    <b-container class="bv-example-row" id="container2">
      <b-row>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
            <b-button class="btn1" href="#" variant="primary"
              >Go somewhere</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
  padding: 20px;
  font-size: 25px;
  font-family: Jomolhari;
  color: #3e9661;
}
.btn1 {
  background-color: #3e9661;
  opacity: 63%;
  border-color: #3e9661;
}
.navpr {
  background-color: #3e9661;
  opacity: 63%;
}
.dprincipal {
  font-family: Jomolhari;
}
#container2 {
  padding: 20px;
}
.dropp {
  background-color: #3e9661;
  opacity: 92%;
}
</style>
