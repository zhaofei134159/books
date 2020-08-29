import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import chapterList from '@/components/chapter/chapterList'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      component: chapterList
    }
  ]
})
