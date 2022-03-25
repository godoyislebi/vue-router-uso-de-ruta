<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link
                      class="nav-link active"
                      aria-current="page"
                      to="/"
                      >Inicio</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      aria-current="page"
                      to="/busqueda"
                      >Búsqueda</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      aria-current="page"
                      to="/ventas"
                      >Ventas</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      aria-current="page"
                      to="/total"
                      >Total</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <transition name="vista">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
.logo {
  width: 30%;
  height: auto;
}
</style>
