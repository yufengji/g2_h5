import axios from 'axios'
export function recomGame(limit, type) {
  const url = 'api/recomGame'
	const data = Object.assign({
    limit:limit,
    type:type
  })
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
