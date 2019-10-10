import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import MovieCard from './components/MovieCard';
import MovieCardsTable from "./components/MovieCardsTable";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: MovieCardsTable, },
    { path: '/moviecard', name: 'moviecard', props: true, component: MovieCard },
  ],
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
