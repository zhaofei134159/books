import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import chapterList from '@/components/chapter/chapterList'

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
      path: '/chapter/chapterList/:workid',
      name: 'chapterList',
      props: true, // 若个要解耦的 到组件中 props 中。
      component: chapterList
    }
  ]
})
