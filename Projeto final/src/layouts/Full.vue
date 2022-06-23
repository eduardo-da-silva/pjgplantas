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
            <b-dropdown-item href="#" class="drop">Plantas de Sombra</b-dropdown-item>
            <b-dropdown-item href="#" class="drop" style="background: rgba(44, 117, 73, 0.85)">Plantas de Sombra</b-dropdown-item>
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
        <b-col class="footer2"> 
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
  height: 75px;
  width: 100%;
  font-size: 23px;
  padding: 30px;
  background: rgba(62, 150, 97, 0.58);
  box-shadow: 5px 8px 10px 5px rgba(62, 150, 97, 0.79);
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
  display: flex;
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
}
.footer2{
  margin-left: 250px;
}
.drop{
  background: rgba(62, 150, 97, 0.92);
  color: rgba(255, 255, 255, 0.95);
  border: solid;
  padding: 0;
}
.dropdown-menu{
  background: rgba(62, 150, 97, 0.92);
}
</style>
