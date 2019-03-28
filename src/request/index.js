import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = axios.create({})

ajax.interceptors.request.use((config) => {
  Indicator.open('Loading...')
  return config
})

ajax.interceptors.response.use((resp) => {
  Indicator.close()
  return resp
})

// 首页的数据
export const bxbanner = () => {
  return ajax.get('/api/tab/1?start=0')
}
export const bxchange = () => {
  return ajax.get('/api/tab/3?start=0')
}
<<<<<<< HEAD

=======
export const getCateNav = () => {
  return ajax.get('/api/tabs?sa=')
}
export const getProducts = (tabid) => {
  return ajax.get(`/api/tab/${tabid}?start=0`)
}
export const getList = (id) => {
  return ajax.get(`/api/category/${id}/items?start=0&sort=0`)
}
>>>>>>> 8ca2a3631c67d22db84cfd2a1cfcdd38063478c4
// 获取商品详情
export const getDetail = () => {
  return ajax.get(`/api/detail?id=10324636&normal=1&sa=`)
}
