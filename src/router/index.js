import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },

  {
    path: '/libros',
    name: 'libros',
    component: ListaLibros
  },

  {
  path: "/libros/:id",
  name: "detalle-libro",
  component: () => import("../views/DetalleLibro.vue"),
  props: true,
},
{
  path: "/libros/:id/editar",
  name: "editar-libro",
  component: () => import("../views/EditarLibro.vue"),
  props: true,
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router