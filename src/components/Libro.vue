<template>
  <article class="libro-card">
    <div class="libro-icon">📖</div>

    <div class="libro-info">
      <h3>{{ libro.titulo }}</h3>

      <p class="autor">
        {{ libro.autor }}
      </p>

      <span class="categoria">
        {{ libro.categoria }}
      </span>
    </div>

    <div class="acciones">
      <RouterLink :to="`/libros/${libro.id}`" class="btn-detalle">
        Ver detalle
      </RouterLink>

      <button @click="$emit('eliminar', libro.id)" class="btn-eliminar">
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
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: 0.3s;
}

.libro-card:hover {
  transform: translateY(-3px);
}

.libro-icon {
  font-size: 2.5rem;
}

.libro-info {
  flex: 1;
}

.libro-info h3 {
  margin: 0 0 6px;
}

.autor {
  margin: 0 0 10px;
}

.categoria {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.acciones {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn-detalle,
.btn-eliminar {
  padding: 9px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
}

.btn-eliminar {
  background: #dc3545;
  color: white;
}

@media (max-width: 700px) {
  .libro-card {
    flex-direction: column;
    text-align: center;
  }

  .acciones {
    flex-direction: column;
    width: 100%;
  }

  .btn-detalle,
  .btn-eliminar {
    width: 100%;
  }
}
</style>
