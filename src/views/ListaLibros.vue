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
  max-width: 1150px;
  margin: 0 auto;
  padding: 60px 20px 80px;
}

/* ENCABEZADO */
.encabezado {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 20px;
  margin-bottom: 25px;
}

.subtitulo {
  margin: 0 0 8px;
  font-size: 0.75rem;
  letter-spacing: 4px;
  font-weight: 700;
  color: #8b7d6b;
}

h1 {
  margin: 0 0 10px;
  color: #1f2933;
  font-size: 2.8rem;
  line-height: 1.1;
}

.encabezado p {
  margin: 0;
  color: #777;
  font-size: 1.05rem;
}

/* CONTADOR */
.contador {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  padding: 10px 18px;
  border: 1px solid #e1dbd0;
  border-radius: 30px;
  background: #f8f6f1;
  color: #4a4a4a;
  font-size: 0.9rem;
  font-weight: 700;
  white-space: nowrap;
}

/* FILTROS */
.filtros {
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 14px;
  margin: 0 0 40px;
}

.filtros input,
.filtros select {
  width: 100%;
  padding: 15px 17px;
  box-sizing: border-box;
  border: 1px solid #ddd7cd;
  border-radius: 12px;
  background: #fff;
  color: #333;
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
}

.filtros input::placeholder {
  color: #999;
}

.filtros input:focus,
.filtros select:focus {
  border-color: #8b7d6b;
  box-shadow: 0 0 0 3px rgba(139, 125, 107, 0.1);
}

/* CONTENEDOR DE LIBROS */
.libros-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* SIN RESULTADOS */
.sin-libros {
  padding: 80px 20px;
  border: 1px dashed #d8d1c5;
  border-radius: 20px;
  background: #faf9f6;
  text-align: center;
}

.icono {
  margin-bottom: 15px;
  font-size: 4rem;
}

.sin-libros h2 {
  margin: 0 0 10px;
  color: #333;
}

.sin-libros p {
  margin: 0;
  color: #888;
}

/* TABLET */
@media (max-width: 700px) {
  .lista {
    padding: 40px 15px 60px;
  }

  .encabezado {
    grid-template-columns: 1fr;
    align-items: start;
  }

  h1 {
    font-size: 2.2rem;
  }

  .contador {
    justify-self: start;
  }

  .filtros {
    grid-template-columns: 1fr;
  }
}

/* CELULAR */
@media (max-width: 450px) {
  .lista {
    padding-top: 30px;
  }

  h1 {
    font-size: 1.9rem;
  }

  .encabezado p {
    font-size: 0.95rem;
  }

  .filtros {
    margin-bottom: 30px;
  }

  .filtros input,
  .filtros select {
    padding: 13px 14px;
  }
}
</style>
