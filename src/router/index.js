import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ChapterList from '@/components/chapter/ChapterList'

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
      path: '/chapter/ChapterList/:id',
      name: 'ChapterList',
      props: true, // 若个要解耦的 到组件中 props 中。
      component: ChapterList
    }
  ]
})
