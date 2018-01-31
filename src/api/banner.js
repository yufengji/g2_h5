import jsonp from '@/common/js/jsonp.js'
import axios from 'axios'
import {options,commonParams} from '@/api/config.js'
export function getBanner() {
  const url = 'api/getBanner'
	const data = Object.assign({})
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
export function getNewsList(type,limit){
  const url = 'api/newsList'
  const data = Object.assign({
    type:type,
    limit:limit
  })
  return axios.get(url,{
    params:data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getNewsDetail(id){
  const url = 'api/newsDetail'
  const data = Object.assign({
    id:id
  })
  return axios.get(url,{
    params:data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
