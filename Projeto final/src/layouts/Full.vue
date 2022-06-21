<template>
  <div class="dprincipal">
    <b-navbar class="navpr" toggleable="lg" type="dark">
      <b-navbar-brand id="navb" disabled>
        <h3>
        PJG
        </h3></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="navi">
            <b-nav-item href="/">Home</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown class="" text="Produtos" right>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#">Plantas de Sombra</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav class="navi">
            <b-nav-item href="/perfil">Perfil</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="navi">
            <b-nav-item href="#">Carrinho</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="navi">
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
          2021 Pjg Pagamentos S.A - Instituição de Pagamento. - 12.345.678/0001-01 <br>
          BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</b-col
        >
        <b-col> 
          Fale com a gente. <br>
          <br>
          0800 123 4567 <br>
          meajuda@pjg.com.br <br>
          Atendimento 24h
        </b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.hrlay {
  margin-top: 100px;
  border-color: #3e9661;
}
.btn1 {
  background-color: #3e9661;
  border-color: #3e9661;
  margin-right: 15px;
}
.navpr {
  background-color: #3e9661;
  height: 75px;
  width: 100%;
  font-size: 23px;
  padding: 30px;
}
.dprincipal {
  font-family: Jomolhari;
}
#container2 {
  padding: 20px;
}
#footer {
  height: 225px;
  margin-top: 100px;
  color: #3e9661;
  font-size: 27px;
}
.footer1{
  margin-right: 10px;
}
#navb{
  font-size: 23px;
  color: white;
  font-weight: bold;
}
.navi{
  margin-right: 10px;
  color: aqua;
}
</style>
