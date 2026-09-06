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
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  margin-bottom: 18px;
  background: #ffffff;
  border: 1px solid #e5e1d8;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.libro-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #8b7d6b;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s ease;
}

.libro-card:hover {
  transform: translateY(-5px);
  border-color: #d8d0c3;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.09);
}

.libro-card:hover::before {
  transform: scaleY(1);
}

/* ICONO */
.libro-icon {
  flex-shrink: 0;
  width: 70px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #f5f0e7, #e9e1d3);
  border-radius: 8px 12px 12px 8px;
  box-shadow:
    4px 5px 0 #d8cfbf,
    0 8px 18px rgba(0, 0, 0, 0.08);
  font-size: 2.2rem;
  transition: transform 0.25s ease;
}

.libro-card:hover .libro-icon {
  transform: rotate(-2deg) translateY(-2px);
}

/* INFORMACIÓN */
.libro-info {
  flex: 1;
  min-width: 0;
}

.categoria {
  display: inline-block;
  padding: 5px 11px;
  margin-bottom: 3px;
  border: 1px solid #e2dacd;
  border-radius: 20px;
  background: #f7f4ee;
  color: #665a45;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.libro-info h3 {
  margin: 6px 0 5px;
  color: #1f2933;
  font-size: 1.4rem;
  line-height: 1.25;
}

.autor {
  margin: 0 0 9px;
  color: #666;
  font-size: 0.95rem;
}

.descripcion {
  max-width: 650px;
  margin: 0;
  color: #777;
  font-size: 0.9rem;
  line-height: 1.6;

  /* Evita tarjetas demasiado altas */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* BOTONES */
.acciones {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-shrink: 0;
}

.btn-detalle,
.btn-eliminar {
  padding: 11px 16px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.btn-detalle {
  border: 1px solid #1f2933;
  background: #1f2933;
  color: white;
}

.btn-detalle:hover {
  background: #374151;
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(31, 41, 51, 0.2);
}

.btn-eliminar {
  border: 1px solid #edd2d2;
  background: #fdf1f1;
  color: #a32929;
}

.btn-eliminar:hover {
  background: #f8dddd;
  transform: translateY(-2px);
}

/* TABLET */
@media (max-width: 800px) {
  .libro-card {
    align-items: flex-start;
  }

  .acciones {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-detalle,
  .btn-eliminar {
    white-space: nowrap;
  }
}

/* CELULAR */
@media (max-width: 600px) {
  .libro-card {
    flex-direction: column;
    align-items: stretch;
    padding: 22px;
    text-align: center;
  }

  .libro-card::before {
    width: 100%;
    height: 4px;
    top: 0;
    bottom: auto;
    transform: scaleX(0);
    transform-origin: left;
  }

  .libro-card:hover::before {
    transform: scaleX(1);
  }

  .libro-icon {
    margin: 0 auto 5px;
  }

  .libro-info h3 {
    font-size: 1.3rem;
  }

  .descripcion {
    text-align: left;
  }

  .acciones {
    width: 100%;
    margin-top: 8px;
  }

  .btn-detalle,
  .btn-eliminar {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
