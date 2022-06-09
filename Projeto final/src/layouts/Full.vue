<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/perfil>
  </div> -->
  <div id="page" class="d-flex">
    <div id="sidebar" class="bg-info border-right text-dark border-white">
      <div class="text-center pb-2">
        <img
          src="@/assets/images/logopjg.png"
          class="img-fluid mx-auto logoSidebar"
          alt="Logo JPG"
          width="25%"
        />
        <hr class="border-white" />
      </div>
      <nav class="list-group list-group-flush">
        <router-link
          class="
            list-group-item list-group-item-action
            bg-info
            text-white
            border-white
          "
          to="/"
        >
          <b-icon
            icon="house-fill"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon>
          Inicio</router-link
        >
        <router-link
          class="
            list-group-item list-group-item-action
            bg-info
            text-white
            border-white
          "
          to="/plantas"
        >
          <b-icon
            icon="clipboard"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon>
          Administrar</router-link
        >
        <router-link
          class="
            list-group-item list-group-item-action
            bg-info
            text-white
            border-white
          "
          to="/Perfil"
        >
          <b-icon
            icon="person-fill"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon>
          Perfil</router-link
        >

        <router-link
          class="
            list-group-item list-group-item-action
            text-white
            border-white
            bg-info
          "
          to="/login"
        >
          <b-icon
            icon="power"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon>
          Sair</router-link
        >
      </nav>
    </div>
    <div id="page-content">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mt-2">
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <router-link to="/login" class="dropdown-item" onclick="logout()"
              >Sair</router-link
            >
          </div>
        </ul>
      </div>
      <div class="container-fluid">
        <router-view />
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