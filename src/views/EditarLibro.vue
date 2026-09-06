<template>
  <section class="editar">
    <div v-if="libro" class="editar-card">
      <div class="cabecera">
        <div class="icono">✏️</div>

        <div>
          <p class="subtitulo">BOOKLIST · EDITORIAL NOVA</p>
          <h1>Editar libro</h1>
          <p class="descripcion-cabecera">
            Actualiza la información de este libro.
          </p>
        </div>
      </div>

      <div class="separador"></div>

      <form @submit.prevent="guardarCambios">
        <div class="campo">
          <label for="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            v-model="formulario.titulo"
            placeholder="Ingresa el título del libro"
            required
          />
        </div>

        <div class="campo">
          <label for="autor">Autor</label>
          <input
            id="autor"
            type="text"
            v-model="formulario.autor"
            placeholder="Ingresa el nombre del autor"
            required
          />
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
            rows="6"
            placeholder="Escribe una descripción del libro..."
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
      <div class="error-icon">📚</div>

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
      librosActuales: [...libros],

      formulario: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
      },
    };
  },

  mounted() {
    const librosGuardados = localStorage.getItem("booklist_libros");

    if (librosGuardados) {
      this.librosActuales = JSON.parse(librosGuardados);
    }

    if (this.libro) {
      this.formulario = {
        titulo: this.libro.titulo,
        autor: this.libro.autor,
        categoria: this.libro.categoria,
        descripcion: this.libro.descripcion,
      };
    }
  },

  computed: {
    libro() {
      return this.librosActuales.find((libro) => libro.id === Number(this.id));
    },
  },

  methods: {
    guardarCambios() {
      const indice = this.librosActuales.findIndex(
        (libro) => libro.id === Number(this.id),
      );

      if (indice === -1) {
        return;
      }

      this.librosActuales[indice] = {
        ...this.librosActuales[indice],
        titulo: this.formulario.titulo,
        autor: this.formulario.autor,
        categoria: this.formulario.categoria,
        descripcion: this.formulario.descripcion,
      };

      localStorage.setItem(
        "booklist_libros",
        JSON.stringify(this.librosActuales),
      );

      this.$router.push(`/libros/${this.id}`);
    },
  },
};
</script>

<style scoped>
.editar {
  max-width: 850px;
  margin: 0 auto;
  padding: 60px 20px;
}

.editar-card {
  padding: 40px;
  background: white;
  border: 1px solid #e5e1d8;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.cabecera {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icono {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3eee3;
  border-radius: 16px;
  font-size: 2rem;
}

.subtitulo {
  margin: 0 0 6px;
  font-size: 0.75rem;
  letter-spacing: 3px;
  font-weight: bold;
  color: #888;
}

h1 {
  margin: 0;
  color: #1f2933;
  font-size: 2.5rem;
}

.descripcion-cabecera {
  margin: 8px 0 0;
  color: #777;
}

.separador {
  height: 1px;
  background: #e8e4dc;
  margin: 35px 0;
}

.campo {
  margin-bottom: 24px;
}

.campo label {
  display: block;
  margin-bottom: 8px;
  color: #1f2933;
  font-weight: bold;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 15px;
  border: 1px solid #d8d4cc;
  border-radius: 10px;
  background: #faf9f6;
  color: #333;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: 0.2s;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: #1f2933;
  background: white;
  box-shadow: 0 0 0 3px rgba(31, 41, 51, 0.08);
}

.campo textarea {
  resize: vertical;
  line-height: 1.6;
}

.acciones {
  display: flex;
  gap: 12px;
  margin-top: 35px;
}

.guardar,
.cancelar {
  padding: 13px 22px;
  border-radius: 9px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
}

.guardar {
  border: none;
  background: #1f2933;
  color: white;
}

.guardar:hover {
  background: #374151;
  transform: translateY(-2px);
}

.cancelar {
  border: 1px solid #ddd;
  background: white;
  color: #444;
}

.cancelar:hover {
  background: #f5f5f5;
}

.no-encontrado {
  text-align: center;
  padding: 100px 20px;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.no-encontrado h1 {
  font-size: 2.2rem;
}

.no-encontrado p {
  color: #777;
}

.volver {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 20px;
  border-radius: 9px;
  background: #1f2933;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  .editar {
    padding: 30px 15px;
  }

  .editar-card {
    padding: 25px 20px;
  }

  .cabecera {
    align-items: flex-start;
  }

  h1 {
    font-size: 2rem;
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
