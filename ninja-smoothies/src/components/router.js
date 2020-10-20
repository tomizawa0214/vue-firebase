import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';

Vue.use(Router)

new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
});