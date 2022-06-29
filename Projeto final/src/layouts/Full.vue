<template>
  <div class="dprincipal">
    <b-navbar class="navpr" toggleable="lg" type="dark">
      <b-navbar-brand id="navb" disabled> <h3>PJG</h3></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown class="drop" text="Produtos" right>
            <b-dropdown-item href="#" class="drop1"
              >Plantas de Áreas Externas</b-dropdown-item
            >
            <b-dropdown-item href="#" class="drop2"
              >Plantas de Sombras
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item class="text-white" href="/perfil">Perfil</b-nav-item>
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
        <b-col class="footer1">
          2021 Pjg Pagamentos S.A - Instituição de Pagamento. -
          12.345.678/0001-01 <br />
          BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</b-col
        >
        <b-col class="footer2">
          Fale com a gente. <br />
          <br />
          0800 123 4567 <br />
          meajuda@pjg.com.br <br />
          Atendimento 24h
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.hrlay {
  margin: 5% 0 0 0;
  border-color: #3e9661;
}
.navpr {
  height: 75px;
  width: 100%;
  font-size: 23px;
  padding: 30px;
  background: white;
  box-shadow: 5px 8px 10px 5px rgba(62, 150, 97, 0.79);
}
.dprincipal {
  font-family: Jomolhari;
}
#container2 {
  padding: 20px;
}
#footer {
  color: #3e9661;
  font-size: 25px;
  margin: 5% 0 0 20%;
}
#navb {
  font-size: 23px;
  color: #3e9661;
  font-weight: bold;
}
.footer2 {
  margin: 0 0 0 15%;
}
.drop1 {
  background: rgba(62, 150, 97, 0.92);
  color: rgba(255, 255, 255, 0.95);
}
.drop2 {
  background: rgba(62, 150, 97, 0.92);
  color: rgba(255, 255, 255, 0.95);
}
.dropdown-menu {
  background: rgba(62, 150, 97, 0.92);
  border-radius: 3px;
}
.navbar-nav {
  margin: 0 2% 0 0;
}
.navbar-dark .navbar-nav .nav-link {
  color: #84cca1;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #3e9661;
}
</style>
