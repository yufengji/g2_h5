import axios from 'axios'
export function gameDetail(id) {
  const url = 'api/gameDetail'
	const data = Object.assign({
    id:id
  })
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
