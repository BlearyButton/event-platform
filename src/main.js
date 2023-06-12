import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import EventDetail from './EventDetail.vue'
import Home from './Home.vue'
import PeoplePage from './PeoplePage.vue';
import * as VueRouter from 'vue-router';


const routes = [
    { path: '/', component: Home },
    { path: '/peoples', component: PeoplePage},
    { path: '/event/:id', component: EventDetail },
  ]
  
  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 }
    },
    routes, // short for `routes: routes`
  })

const app = createApp(App)

app.use(router);

app.mount('#app');
