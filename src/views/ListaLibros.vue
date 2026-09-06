<template>
  <section class="lista">
    <FormularioLibro @agregar="agregarLibro" />
    <div class="encabezado">
      <div>
        <p class="subtitulo">BOOKLIST</p>
        <h1>Catálogo de libros</h1>
        <p>Explora y administra nuestra colección.</p>
      </div>

      <span class="contador"> {{ libros.length }} libros </span>
    </div>

    <div v-if="libros.length === 0" class="sin-libros">
      <div class="icono">📚</div>
      <h2>No hay libros registrados</h2>
      <p>Agrega tu primer libro para comenzar.</p>
    </div>

    <div v-else class="libros-container">
      <Libro
        v-for="libro in libros"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>
  </section>
</template>

<script>
import Libro from "../components/Libro.vue";
import FormularioLibro from "../components/FormularioLibro.vue";
import { libros } from "../data/libros.js";
export default {
  name: "ListaLibros",

  components: {
    Libro,
    FormularioLibro,
  },

  data() {
    return {
      libros: [...libros],
    };
  },
  methods: {
    agregarLibro(nuevoLibro) {
      nuevoLibro.id = Date.now();

      this.libros.push(nuevoLibro);
    },

    eliminarLibro(id) {
      this.libros = this.libros.filter((libro) => libro.id !== id);
    },
  },
};
</script>

<style scoped>
.lista {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
}

.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
}

.subtitulo {
  font-size: 0.8rem;
  letter-spacing: 4px;
  font-weight: bold;
  margin-bottom: 8px;
}

h1 {
  font-size: 2.8rem;
  margin: 0 0 10px;
}

.encabezado p {
  margin: 0;
}

.contador {
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: bold;
  white-space: nowrap;
}

.libros-container {
  display: flex;
  flex-direction: column;
}

.sin-libros {
  text-align: center;
  padding: 80px 20px;
  border-radius: 15px;
}

.icono {
  font-size: 4rem;
  margin-bottom: 15px;
}

.sin-libros h2 {
  margin-bottom: 10px;
}

@media (max-width: 700px) {
  .encabezado {
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 2.2rem;
  }

  .contador {
    align-self: flex-start;
  }
}
</style>
