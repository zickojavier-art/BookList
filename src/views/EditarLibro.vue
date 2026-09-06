<template>
  <section class="editar">
    <div v-if="libro" class="editar-card">
      <div class="encabezado">
        <p class="subtitulo">BOOKLIST</p>
        <h1>Editar libro</h1>
        <p>Modifica la información del libro.</p>
      </div>

      <form @submit.prevent="guardarCambios">
        <div class="campo">
          <label for="titulo">Título</label>

          <input id="titulo" type="text" v-model="formulario.titulo" required />
        </div>

        <div class="campo">
          <label for="autor">Autor</label>

          <input id="autor" type="text" v-model="formulario.autor" required />
        </div>

        <div class="campo">
          <label for="categoria">Categoría</label>

          <select id="categoria" v-model="formulario.categoria" required>
            <option value="">Selecciona una categoría</option>
            <option value="Novela">Novela</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Historia">Historia</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
            <option value="Distopía">Distopía</option>
          </select>
        </div>

        <div class="campo">
          <label for="descripcion">Descripción</label>

          <textarea
            id="descripcion"
            v-model="formulario.descripcion"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="acciones">
          <button type="submit" class="guardar">💾 Guardar cambios</button>

          <RouterLink :to="`/libros/${libro.id}`" class="cancelar">
            Cancelar
          </RouterLink>
        </div>
      </form>
    </div>

    <div v-else class="no-encontrado">
      <h1>Libro no encontrado</h1>

      <p>No encontramos el libro que intentas editar.</p>

      <RouterLink to="/libros" class="volver">
        ← Volver al catálogo
      </RouterLink>
    </div>
  </section>
</template>

<script>
import { libros } from "../data/libros.js";

export default {
  name: "EditarLibro",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      formulario: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
      },
    };
  },

  computed: {
    libro() {
      return libros.find((libro) => libro.id === Number(this.id));
    },
  },

  created() {
    if (this.libro) {
      this.formulario = {
        titulo: this.libro.titulo,
        autor: this.libro.autor,
        categoria: this.libro.categoria,
        descripcion: this.libro.descripcion,
      };
    }
  },

  methods: {
    guardarCambios() {
      if (!this.libro) {
        return;
      }

      this.libro.titulo = this.formulario.titulo;
      this.libro.autor = this.formulario.autor;
      this.libro.categoria = this.formulario.categoria;
      this.libro.descripcion = this.formulario.descripcion;

      this.$router.push(`/libros/${this.libro.id}`);
    },
  },
};
</script>

<style scoped>
.editar {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
}

.editar-card {
  padding: 35px;
  border-radius: 20px;
}

.encabezado {
  margin-bottom: 30px;
}

.subtitulo {
  font-size: 0.8rem;
  letter-spacing: 4px;
  font-weight: bold;
}

h1 {
  font-size: 2.8rem;
  margin: 10px 0;
}

.campo {
  margin-bottom: 20px;
}

.campo label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.campo textarea {
  resize: vertical;
}

.acciones {
  display: flex;
  gap: 12px;
  margin-top: 30px;
}

.guardar,
.cancelar {
  padding: 13px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.no-encontrado {
  text-align: center;
  padding: 100px 20px;
}

.volver {
  display: inline-block;
  margin-top: 25px;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  .editar-card {
    padding: 20px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .acciones {
    flex-direction: column;
  }

  .guardar,
  .cancelar {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
