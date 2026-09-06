<template>
  <section class="lista-container">
    <h1>📚 Catálogo de Libros</h1>

    <p>Bienvenido, {{ usuario }}</p>

    <!-- CONTADOR -->
    <div class="contador">
      <p>
        Total de libros: <strong>{{ libros.length }}</strong>
      </p>

      <button @click="incrementarContador">Contador: {{ contador }}</button>
    </div>

    <!-- LISTA -->
    <div v-if="libros.length > 0">
      <Libro
        v-for="libro in libros"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>

    <div v-else>
      <p>📭 No hay libros disponibles.</p>
    </div>
  </section>
</template>

<script>
import Libro from "../components/Libro.vue";

export default {
  name: "ListaLibros",

  components: {
    Libro,
  },

  data() {
    return {
      usuario: "Francisco",

      contador: 0,

      libros: [
        {
          id: 1,
          titulo: "Cien años de soledad",
          autor: "Gabriel García Márquez",
          categoria: "Novela",
          descripcion:
            "Una de las obras más importantes de la literatura latinoamericana.",
          destacado: true,
        },

        {
          id: 2,
          titulo: "1984",
          autor: "George Orwell",
          categoria: "Ciencia ficción",
          descripcion:
            "Una novela distópica sobre una sociedad sometida a vigilancia.",
          destacado: false,
        },

        {
          id: 3,
          titulo: "El principito",
          autor: "Antoine de Saint-Exupéry",
          categoria: "Fantasía",
          descripcion:
            "Una historia sobre la amistad, el amor y la importancia de ver más allá de lo evidente.",
          destacado: true,
        },
      ],
    };
  },

  methods: {
    incrementarContador() {
      this.contador++;
    },

    eliminarLibro(id) {
      this.libros = this.libros.filter((libro) => libro.id !== id);
    },
  },
};
</script>
