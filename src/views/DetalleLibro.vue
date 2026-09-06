<template>
  <section class="detalle">
    <div v-if="libro" class="detalle-card">
      <div class="icono">📖</div>

      <div class="contenido">
        <span class="categoria">
          {{ libro.categoria }}
        </span>

        <h1>{{ libro.titulo }}</h1>

        <p class="autor">
          Autor: <strong>{{ libro.autor }}</strong>
        </p>

        <div class="descripcion">
          <h2>Descripción</h2>
          <p>{{ libro.descripcion }}</p>
        </div>

        <RouterLink to="/libros" class="volver">
          ← Volver al catálogo
        </RouterLink>
      </div>
    </div>

    <div v-else class="no-encontrado">
      <h1>Libro no encontrado</h1>

      <p>El libro que buscas no existe en nuestro catálogo.</p>

      <RouterLink to="/libros" class="volver">
        ← Volver al catálogo
      </RouterLink>
    </div>
  </section>
</template>

<script>
import { libros } from "../data/libros.js";

export default {
  name: "DetalleLibro",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    libro() {
      return libros.find((libro) => libro.id === Number(this.id));
    },
  },
};
</script>

<style scoped>
.detalle {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
}

.detalle-card {
  display: flex;
  gap: 40px;
  padding: 40px;
  border-radius: 20px;
}

.icono {
  font-size: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
}

.contenido {
  flex: 1;
}

.categoria {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

h1 {
  font-size: 3rem;
  margin: 20px 0 10px;
}

.autor {
  font-size: 1.1rem;
  margin-bottom: 35px;
}

.descripcion h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.descripcion p {
  line-height: 1.7;
}

.volver {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.no-encontrado {
  text-align: center;
  padding: 100px 20px;
}

@media (max-width: 700px) {
  .detalle-card {
    flex-direction: column;
    padding: 25px;
  }

  .icono {
    min-width: auto;
    font-size: 5rem;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>
