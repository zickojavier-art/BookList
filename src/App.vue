<template>
  <div id="app">
    <header class="navbar">
      <div class="logo">
        <span>📚</span>
        <strong>BookList</strong>
      </div>

      <nav>
        <RouterLink to="/" exact-active-class="activo"> Inicio </RouterLink>

        <RouterLink to="/libros" exact-active-class="activo">
          Catálogo
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>© 2026 BookList · Editorial Nova</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f7f5f0;
  color: #222;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #1f2933;
  color: white;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
}

.logo span {
  font-size: 1.6rem;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 9px 16px;
  border-radius: 8px;
  transition: 0.2s;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.12);
}

nav a.activo {
  background: white;
  color: #1f2933;
  font-weight: bold;
}

main {
  flex: 1;
}

footer {
  text-align: center;
  padding: 20px;
  background: #1f2933;
  color: white;
  margin-top: auto;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .navbar {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }

  nav {
    width: 100%;
    justify-content: center;
  }
}
</style>
