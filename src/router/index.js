import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ChapterList from '@/components/chapter/chapterList'
import ChapterCont from '@/components/chapter/chapterCont'

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/chapter/ChapterCont/:workid/:chapterid',
      name: 'ChapterCont',
      props: true, // 若个要解耦的 到组件中 props 中。
      component: ChapterCont
    }
  ]
})
