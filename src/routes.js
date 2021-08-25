import VueRouter from "vue-router";
import Home from './components/Home';

let router = new VueRouter({
   mdoel: 'history',
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home,
      }
   ]
});

export default router;