<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Color</th>
                <th scope="col">Destacado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in productos" :key="producto.codigo">
                <th>{{ producto.codigo }}</th>
                <th>{{ producto.nombre }}</th>
                <th>{{ producto.stock }}</th>
                <th>$ {{ producto.precio.toLocaleString("DE") }}</th>
                <th>{{ producto.color }}</th>
                <th>{{ producto.destacado }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    productos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
