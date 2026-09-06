<template>
  <section class="formulario">
    <div class="form-header">
      <p class="subtitulo">NUEVO LIBRO</p>
      <h2>Agregar libro</h2>
      <p>Completa los datos para incorporar un libro al catálogo.</p>
    </div>

    <form @submit.prevent="agregarLibro">
      <div class="campo">
        <label for="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          v-model="libro.titulo"
          placeholder="Ej: El principito"
          required
        />
      </div>

      <div class="campo">
        <label for="autor">Autor</label>
        <input
          id="autor"
          type="text"
          v-model="libro.autor"
          placeholder="Ej: Antoine de Saint-Exupéry"
          required
        />
      </div>

      <div class="campo">
        <label for="categoria">Categoría</label>

        <select id="categoria" v-model="libro.categoria" required>
          <option value="">Selecciona una categoría</option>
          <option value="Novela">Novela</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Historia">Historia</option>
          <option value="Terror">Terror</option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <div class="campo">
        <label for="descripcion">Descripción</label>

        <textarea
          id="descripcion"
          v-model="libro.descripcion"
          placeholder="Escribe una breve descripción..."
          rows="4"
        ></textarea>
      </div>

      <div class="vista-previa">
        <h3>Vista previa</h3>

        <p>
          <strong>Título:</strong>
          {{ libro.titulo || "Sin título" }}
        </p>

        <p>
          <strong>Autor:</strong>
          {{ libro.autor || "Sin autor" }}
        </p>

        <p>
          <strong>Categoría:</strong>
          {{ libro.categoria || "Sin categoría" }}
        </p>
      </div>

      <button type="submit">Agregar libro</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "FormularioLibro",

  emits: ["agregar"],

  data() {
    return {
      libro: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
      },
    };
  },

  methods: {
    agregarLibro() {
      const nuevoLibro = {
        titulo: this.libro.titulo,
        autor: this.libro.autor,
        categoria: this.libro.categoria,
        descripcion: this.libro.descripcion,
      };

      this.$emit("agregar", nuevoLibro);

      this.libro = {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
      };
    },
  },
};
</script>

<style scoped>
.formulario {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 15px;
}

.form-header {
  margin-bottom: 30px;
}

.subtitulo {
  font-size: 0.8rem;
  letter-spacing: 3px;
  font-weight: bold;
}

.form-header h2 {
  font-size: 2rem;
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
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
}

.campo textarea {
  resize: vertical;
}

.vista-previa {
  margin: 25px 0;
  padding: 20px;
  border-radius: 10px;
}

.vista-previa h3 {
  margin-top: 0;
}

.vista-previa p {
  margin: 8px 0;
}

button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
}
</style>
