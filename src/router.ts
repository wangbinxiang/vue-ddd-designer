import Vue from 'vue';
import Router from 'vue-router';
import HomeBox from './views/layout/HomeBox.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeBox,
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('./views/hello_world/HelloWorld.vue'),
        },
        {
          path: 'page_table',
          name: 'page_table',
          component: () => import('./views/page_table/PageTable.vue'),
        },
      ],
    },
  ],
});


