import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import chapterLis from '@/components/chapter/chapterList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chapter/chapterList/:workId',
      name: 'chapterLis',
      component: chapterLis
    }
  ]
})
