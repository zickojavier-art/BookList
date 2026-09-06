<template>
  <article class="libro-card">
    <div class="libro-icon">📖</div>

    <div class="libro-info">
      <span class="categoria">
        {{ libro.categoria }}
      </span>

      <h3>{{ libro.titulo }}</h3>

      <p class="autor">✍️ {{ libro.autor }}</p>

      <p v-if="libro.descripcion" class="descripcion">
        {{ libro.descripcion }}
      </p>
    </div>

    <div class="acciones">
      <RouterLink :to="`/libros/${libro.id}`" class="btn-detalle">
        Ver detalle →
      </RouterLink>

      <button
        type="button"
        @click="$emit('eliminar', libro.id)"
        class="btn-eliminar"
      >
        Eliminar
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Libro",

  props: {
    libro: {
      type: Object,
      required: true,
    },
  },

  emits: ["eliminar"],
};
</script>

<style scoped>
.libro-card {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 24px;
  margin-bottom: 18px;
  background: white;
  border: 1px solid #e5e1d8;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.libro-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.1);
}

.libro-icon {
  min-width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3eee3;
  border-radius: 16px;
  font-size: 2rem;
}

.libro-info {
  flex: 1;
}

.libro-info h3 {
  margin: 7px 0 5px;
  font-size: 1.35rem;
  color: #1f2933;
}

.autor {
  margin: 0 0 8px;
  color: #666;
  font-size: 0.95rem;
}

.descripcion {
  margin: 0;
  color: #777;
  font-size: 0.9rem;
  line-height: 1.5;
}

.categoria {
  display: inline-block;
  padding: 5px 11px;
  border-radius: 20px;
  background: #eee8dc;
  color: #665a45;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.acciones {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-detalle,
.btn-eliminar {
  padding: 10px 15px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
}

.btn-detalle {
  background: #1f2933;
  color: white;
}

.btn-detalle:hover {
  background: #374151;
}

.btn-eliminar {
  background: #f3dede;
  color: #a32929;
}

.btn-eliminar:hover {
  background: #eacaca;
}

@media (max-width: 700px) {
  .libro-card {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .libro-icon {
    margin: 0 auto;
  }

  .acciones {
    flex-direction: column;
    width: 100%;
  }

  .btn-detalle,
  .btn-eliminar {
    width: 100%;
  }

  .descripcion {
    text-align: left;
  }
}
</style>
