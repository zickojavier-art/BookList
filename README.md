# 📚 BookList — Gestor de Libros

Aplicación web SPA desarrollada con **Vue.js 3** para gestionar una colección de libros de forma sencilla, dinámica y responsive.

El proyecto fue desarrollado como parte de la evaluación del **Módulo 6 de Frontend**, aplicando conceptos fundamentales de Vue.js, componentes, formularios, eventos, Vue Router y persistencia de datos.

---

## 🎯 Objetivo

Crear una aplicación interactiva para **Editorial Nova** que permita administrar un catálogo de libros.

La aplicación permite:

- Agregar nuevos libros.
- Visualizar el catálogo.
- Buscar libros por título o autor.
- Filtrar libros por categoría.
- Ver el detalle de cada libro.
- Editar información de libros.
- Eliminar libros.
- Mantener los datos utilizando `localStorage`.
- Navegar entre diferentes vistas mediante Vue Router.

---

## ✨ Funcionalidades

### 📖 Gestión de libros

- Crear libros mediante un formulario.
- Validación de campos obligatorios.
- Visualización inmediata del nuevo libro.
- Edición de libros existentes.
- Eliminación de libros.
- Visualización detallada de cada libro.

### 🔎 Búsqueda y filtros

El catálogo incluye:

- Búsqueda por título.
- Búsqueda por autor.
- Filtro por categoría.
- Actualización reactiva de los resultados.

### 💾 Persistencia de datos

Los libros se almacenan utilizando:

```text
localStorage
```

🧭 Navegación

La aplicación utiliza Vue Router.

Rutas principales
Ruta Descripción
/ Página de inicio
/libros Catálogo de libros
/libros/:id Detalle de un libro
/libros/:id/editar Edición de un libro
/:pathMatch(._)_ Página 404
🧩 Componentes

El proyecto utiliza una estructura modular basada en componentes reutilizables.

Componentes
src/
├── components/
│ ├── Libro.vue
│ └── FormularioLibro.vue
Vistas
src/
├── views/
│ ├── InicioView.vue
│ ├── ListaLibros.vue
│ ├── DetalleLibro.vue
│ ├── EditarLibro.vue
│ └── NoEncontradoView.vue
📁 Estructura del proyecto
BookList/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── Libro.vue
│ │ └── FormularioLibro.vue
│ │
│ ├── data/
│ │ └── libros.js
│ │
│ ├── router/
│ │ └── index.js
│ │
│ ├── views/
│ │ ├── InicioView.vue
│ │ ├── ListaLibros.vue
│ │ ├── DetalleLibro.vue
│ │ ├── EditarLibro.vue
│ │ └── NoEncontradoView.vue
│ │
│ ├── App.vue
│ └── main.js
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
🛠️ Tecnologías utilizadas
Vue.js 3
Vite
Vue Router
JavaScript
HTML5
CSS3
LocalStorage
Git
GitHub
Visual Studio Code
🧠 Conceptos de Vue utilizados

Durante el desarrollo se aplicaron diferentes conceptos fundamentales de Vue.js:

v-model
v-if
v-for
v-show
@click
@submit.prevent
Props
Emits
Computed Properties
Data reactiva
Métodos
Lifecycle Hooks
Vue Router
Rutas dinámicas
Componentización
🚀 Instalación y ejecución

1. Clonar el repositorio
   git clone https://github.com/zickojavier-art/BookList.git
2. Entrar al proyecto
   cd BookList
3. Instalar dependencias
   npm install
4. Ejecutar el proyecto
   npm run dev

Vite mostrará en la terminal la dirección local donde estará disponible la aplicación.

📱 Diseño Responsive

BookList fue desarrollado considerando diferentes tamaños de pantalla.

La interfaz se adapta a:

💻 Computadores.
📱 Smartphones.
📲 Tablets.

Se utilizaron Media Queries CSS para adaptar los componentes y formularios a pantallas pequeñas.

🔄 Flujo principal de la aplicación
Inicio
↓
Catálogo
↓
Agregar libro
↓
Libro agregado
↓
Ver detalle
↓
Editar libro
↓
Guardar cambios
↓
Detalle actualizado

Los cambios se almacenan en localStorage para mantener la información después de actualizar la página.

🔐 Persistencia

La aplicación utiliza la siguiente clave para almacenar los libros:

booklist_libros

Los datos se convierten a JSON antes de ser almacenados y posteriormente se recuperan al cargar la aplicación.

🎓 Proyecto académico

Este proyecto corresponde a la evaluación del:

Módulo 6 — Vue.js

Proyecto:

BookList SPA — Gestor de Libros Interactiva con Vue.js

El desarrollo busca demostrar la aplicación práctica de los fundamentos de Vue.js mediante una SPA funcional, modular y responsive.

👨‍💻 Autor

Francisco Javier Carroza Valdés

GitHub:

zickojavier-art

📌 Repositorio

Repositorio oficial del proyecto:

https://github.com/zickojavier-art/BookList

⭐ Estado del proyecto

Proyecto funcional y en desarrollo.

Se continúa trabajando en mejoras de experiencia de usuario, diseño y funcionalidades para entregar una aplicación completa y profesional.

### Ahora haz solamente esto

1. Guarda `README.md` con **Ctrl + S**.
2. **No hagas Git todavía.**
3. Mira que el archivo quede guardado en la raíz:

```text
booklist/
├── README.md
├── package.json
├── src/
└── ...
```
