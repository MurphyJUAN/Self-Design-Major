import Vue from 'vue';
import Router from 'vue-router';
import ProgramPage from '@/components/ProgramPage/mainPage';
import Test from '@/components/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgramPage',
      component: ProgramPage,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
