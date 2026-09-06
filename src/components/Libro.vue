<template>
  <article class="libro-card">
    <div class="libro-info">
      <span class="categoria">
        {{ libro.categoria }}
      </span>

      <h3>{{ libro.titulo }}</h3>

      <p class="autor">Por {{ libro.autor }}</p>

      <p v-if="libro.descripcion">
        {{ libro.descripcion }}
      </p>

      <p v-else>Este libro no tiene descripción.</p>
    </div>

    <div class="libro-acciones">
      <button @click="$emit('eliminar', libro.id)">🗑️ Eliminar</button>

      <RouterLink :to="`/libros/${libro.id}`" class="btn-detalle">
        Ver detalle →
      </RouterLink>
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
