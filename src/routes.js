import VueRouter from "vue-router";
import Home from './components/hero/Home';
import Movie from './components/movies/Movie.vue';
import Actors from './components/actors/Actors';
import ActorDetail from './components/actors/ActorDetail';

let router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/jmdb/',
         name: 'home',
         component: Home,
      },
      {
         path: '/movie/:id',
         name: 'movie',
         component: Movie,
      },
      {
         path: '/actors/',
         name: 'actors',
         component: Actors,
      },
      {
         path: '/actor/:id',
         name: 'actorDetail',
         component: ActorDetail,
      },
   ],
});

export default router;