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
