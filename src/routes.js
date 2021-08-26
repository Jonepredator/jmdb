import VueRouter from "vue-router";
import Home from './components/Home';
import Movie from './components/movies/Movie.vue';

let router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home,
      },
      {
         path: '/movie/:id',
         name: 'movie',
         component: Movie,
      },
   ],
});

export default router;