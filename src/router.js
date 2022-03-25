import Vue from "vue";
import Router from "vue-router";
import VistaInicio from "./views/VistaInicio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: VistaInicio,
    },
    {
      path: "/busquedas",
      name: "Busquedas",
      component: () => import("./views/VistaBusquedas.vue"),
    },
    {
      path: "/total",
      name: "Total",
      component: () => import("./views/VistaTotal.vue"),
    },
    {
      path: "/ventas",
      name: "Ventas",
      component: () => import("./views/VistaVentas.vue"),
    },
    {
      path: "/destacados",
      name: "Destacados",
      component: () => import("./views/VistaDestacados.vue"),
    },
  ],
});
