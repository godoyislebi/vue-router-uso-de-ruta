<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="my-4">Tienda 32 bits</h1>
          <h2>Juegos de PC y consola</h2>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-6">
          <p class="text center">Buscar:</p>
        </div>
        <div class="col-6">
          <input v-model="filterProduct" type="text" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 text-center">
          <Tabla :productos="filterData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabla from "../components/Tabla.vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "VistaInicio",
  components: {
    Tabla,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["filter"]),
    ...mapGetters(["filterData"]),
    filterProduct: {
      get() {
        return this.filter;
      },
      set(val){
        this.SET_FILTER(val);
      }
    },
  },
  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["SET_FILTER"]),
  },
  created() {
    this.getData();
  },
};
</script>
