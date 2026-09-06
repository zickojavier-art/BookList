<template>
  <section class="inicio">
    <div class="contenido">
      <p class="subtitulo">EDITORIAL NOVA</p>

      <h1>Bienvenido a <span>BookList</span></h1>

      <p class="descripcion">
        Gestiona tu biblioteca de libros de forma rápida, sencilla e
        interactiva.
      </p>

      <RouterLink to="/libros" class="btn-libros"> Ver catálogo </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: "InicioView",
};
</script>

<style scoped>
.inicio {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.contenido {
  max-width: 750px;
}

.subtitulo {
  font-size: 0.9rem;
  letter-spacing: 4px;
  font-weight: bold;
  margin-bottom: 15px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

h1 span {
  font-weight: 800;
}

.descripcion {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 35px;
}

.btn-libros {
  display: inline-block;
  padding: 14px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn-libros:hover {
  transform: translateY(-3px);
}
</style>
