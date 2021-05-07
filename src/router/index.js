import { createRouter, createWebHistory } from 'vue-router';
// import About from '../views/About.vue'
import LastArticles from '../components/LastArticles';
import Blog from '../components/Blog';
import Formulario from '../components/Formulario';
import Página from '../components/Página';
import ErrorComponent from '../components/ErrorComponent';
import Pagina2 from '../components/Pagina2';
import Movies from '../components/Movies';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: LastArticles,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // }

  {
      path: '/ultimos-articulos',
      name: 'LastArticles',
      component: LastArticles,
  },

  {
      path: '/blog',
      name: 'Blog',
      component: Blog,
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: Formulario,
  },
  {
    path: '/pagina/:id?',
    name: 'Página',
    component: Página,
  },
  {
    path: '/pagina2/',
    name: 'Pagina2',
    component: Pagina2,
  },
  {
    path: "/:catchAll(.*)",
    name: 'Error',
    component: ErrorComponent,
  },

  {
    path: "/movies",
    name: 'Movies',
    component: Movies,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
