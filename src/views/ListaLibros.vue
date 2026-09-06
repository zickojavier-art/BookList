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
      <div class="filtros">
        <input
          type="text"
          v-model="busqueda"
          placeholder="🔎 Buscar por título o autor..."
        />

        <select v-model="categoriaSeleccionada">
          <option value="">Todas las categorías</option>
          <option value="Novela">Novela</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Historia">Historia</option>
          <option value="Terror">Terror</option>
          <option value="Romance">Romance</option>
          <option value="Distopía">Distopía</option>
        </select>
      </div>
    </div>

    <div v-if="librosFiltrados.length === 0" class="sin-libros">
      <div class="icono">📚</div>
      <h2>No hay libros registrados</h2>
      <p>Agrega tu primer libro para comenzar.</p>
    </div>

    <div v-else class="libros-container">
      <Libro
        v-for="libro in librosFiltrados"
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
      busqueda: "",
      categoriaSeleccionada: "",
    };
  },

  mounted() {
    const librosGuardados = localStorage.getItem("booklist_libros");

    if (librosGuardados) {
      this.libros = JSON.parse(librosGuardados);
    }
  },

  computed: {
    librosFiltrados() {
      return this.libros.filter((libro) => {
        const texto = this.busqueda.toLowerCase();

        const coincideBusqueda =
          libro.titulo.toLowerCase().includes(texto) ||
          libro.autor.toLowerCase().includes(texto);

        const coincideCategoria =
          this.categoriaSeleccionada === "" ||
          libro.categoria === this.categoriaSeleccionada;

        return coincideBusqueda && coincideCategoria;
      });
    },
  },

  methods: {
    agregarLibro(nuevoLibro) {
      nuevoLibro.id = Date.now();

      this.libros.push(nuevoLibro);

      localStorage.setItem("booklist_libros", JSON.stringify(this.libros));
    },

    eliminarLibro(id) {
      this.libros = this.libros.filter((libro) => libro.id !== id);

      localStorage.setItem("booklist_libros", JSON.stringify(this.libros));
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

.filtros {
  display: flex;
  gap: 15px;
  margin: 25px 0 30px;
}

.filtros input,
.filtros select {
  flex: 1;
  padding: 13px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
}

@media (max-width: 700px) {
  .filtros {
    flex-direction: column;
  }
}
</style>
