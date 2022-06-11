<template>
  <div id="page" class="ml-auto">
    <div id="sidebar" class="bg-info border-right text-dark border-white">
      <div class="text-center p-4">
        PJG
        <hr class="border-white" />
      </div>
      <nav class="list-group list-group-flush">
        <router-link class="
            
            bg-info
            text-white
            border-white
          " to="/">
          Home
        </router-link>
        <router-link class="
            
            bg-info
            text-white
            border-white
          " to="/plantas">
          Produtos
        </router-link>
        <div>
          <b-dropdown id="dropdown-1" text="Produtos" class="m-md-2
            bg-info
            text-white">
            <b-dropdown-item>Planta de Sombra</b-dropdown-item>
            <b-dropdown-item>Planta de Sombra</b-dropdown-item>
            <b-dropdown-item>Planta de Sombra</b-dropdown-item>
          </b-dropdown>
        </div>
        <router-link class="
            
            bg-info
            text-white
            border-white
          " to="/Perfil">
          Perfil
        </router-link>


        <router-link class="
  
            text-white
            border-white
            bg-info
          " to="/login">
          Carrinho
        </router-link>
      </nav>
    </div>
    <div id="page-content">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mt-2">
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <router-link to="/login" class="dropdown-item" onclick="logout()">Sair</router-link>
          </div>
        </ul>
      </div>
    </div>
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
</style>