import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

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
      name: 'chapterList',
      props: true, // 若个要解耦的 到组件中 props 中。
      component: resolve => require(['@/components/chapter/chapterList'], resolve)
    }
  ]
})
