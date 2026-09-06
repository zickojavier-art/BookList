<template>
  <section class="detalle">
    <div v-if="libro" class="detalle-card">
      <div class="portada">
        <div class="icono">📖</div>
        <span>BOOKLIST</span>
      </div>

      <div class="contenido">
        <span class="categoria">
          {{ libro.categoria }}
        </span>

        <h1>{{ libro.titulo }}</h1>

        <p class="autor">Autor</p>

        <h2 class="nombre-autor">
          {{ libro.autor }}
        </h2>

        <div class="separador"></div>

        <div class="descripcion">
          <h2>Sobre este libro</h2>
          <p>{{ libro.descripcion }}</p>
        </div>

        <div class="acciones">
          <RouterLink :to="`/libros/${libro.id}/editar`" class="btn-editar">
            ✏️ Editar libro
          </RouterLink>

          <RouterLink to="/libros" class="volver">
            ← Volver al catálogo
          </RouterLink>
        </div>
      </div>
    </div>

    <div v-else class="no-encontrado">
      <div class="error-icon">📚</div>

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
  gap: 50px;
  padding: 45px;
  background: white;
  border: 1px solid #e5e1d8;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}

.portada {
  min-width: 220px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1f2933;
  color: white;
  border-radius: 18px;
  box-shadow: 8px 10px 25px rgba(0, 0, 0, 0.15);
}

.icono {
  font-size: 6rem;
  margin-bottom: 20px;
}

.portada span {
  font-size: 0.75rem;
  letter-spacing: 4px;
  font-weight: bold;
}

.contenido {
  flex: 1;
}

.categoria {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 20px;
  background: #eee8dc;
  color: #665a45;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  margin: 20px 0 15px;
  font-size: 3rem;
  line-height: 1.1;
  color: #1f2933;
}

.autor {
  margin: 0 0 4px;
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nombre-autor {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #444;
}

.separador {
  width: 60px;
  height: 3px;
  margin: 25px 0;
  background: #1f2933;
}

.descripcion h2 {
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #1f2933;
}

.descripcion p {
  margin: 0;
  color: #666;
  line-height: 1.8;
}

.acciones {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 35px;
}

.btn-editar,
.volver {
  display: inline-block;
  padding: 12px 20px;
  border-radius: 9px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.btn-editar {
  background: #1f2933;
  color: white;
}

.btn-editar:hover {
  background: #374151;
  transform: translateY(-2px);
}

.volver {
  border: 1px solid #ddd;
  color: #444;
}

.volver:hover {
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

@media (max-width: 700px) {
  .detalle {
    padding: 30px 15px;
  }

  .detalle-card {
    flex-direction: column;
    padding: 25px;
    gap: 30px;
  }

  .portada {
    min-width: auto;
    width: 100%;
    height: 240px;
  }

  .icono {
    font-size: 5rem;
  }

  h1 {
    font-size: 2.2rem;
  }

  .acciones {
    flex-direction: column;
  }

  .btn-editar,
  .volver {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
