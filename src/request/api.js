import {Service} from '@/request/http.js'

/*
例如:
export function getConfigsByProductId(productId) {
  return Service({
    url: '/manager/getConfigsByProductId',
    params: { productId: productId }
  })
}
export function getAllAndroidPlugins() {
  return Service({
    url: '/manager/getAndroidPlugin ',
    method: 'get'
  })
}
export function addNewAndroidPlugin(data) {
  return Service({
    url: '/manager/addAndroidPlguin',
    data: JSON.stringify(data)
  })
}
*/

export function getHomeByBooks(page) {
  return Service({
    url: '/api/work',
    method: 'get',
    params: { page: page }
  })
}
export function getFamouWorkInfo(workId) {
  return Service({
    url: '/api/work/getFamouWorkInfo',
    method: 'get',
    params: { workId: workId }
  })
}
export function getFamouWorkCont(workId, chapterId) {
  return Service({
    url: '/api/work/getFamouWorkCont',
    method: 'get',
    params: { workId: workId, chapterId: chapterId }
  })
}
export function getPictureList(page, tagId) {
  return Service({
    url: '/api/work/getPictureList',
    method: 'get',
    params: { page: page, tag: tagId }
  })
}

export function getLoginUserInfo() {
  return Service({
    url: '/api/work/getLoginUserInfo',
    method: 'get',
    params: {}
  })
}

