<template>
  <div id="app">
    <header>
      <h1>📚 BookList</h1>

      <nav>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/libros">Libros</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
