<template>
  <section class="no-encontrado">
    <div class="icono">📚</div>

    <p class="subtitulo">BOOKLIST · 404</p>

    <h1>Página no encontrada</h1>

    <p class="mensaje">La página que buscas no existe o fue movida.</p>

    <RouterLink to="/" class="volver"> ← Volver al inicio </RouterLink>
  </section>
</template>

<script>
export default {
  name: "NoEncontradoView",
};
</script>

<style scoped>
.no-encontrado {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.icono {
  font-size: 5rem;
  margin-bottom: 20px;
}

.subtitulo {
  margin: 0 0 10px;
  font-size: 0.75rem;
  letter-spacing: 4px;
  font-weight: bold;
  color: #888;
}

h1 {
  margin: 0;
  color: #1f2933;
  font-size: 3rem;
}

.mensaje {
  margin: 15px 0 30px;
  color: #777;
  font-size: 1.05rem;
}

.volver {
  padding: 13px 22px;
  border-radius: 9px;
  background: #1f2933;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
}

.volver:hover {
  background: #374151;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.2rem;
  }
}
</style>
