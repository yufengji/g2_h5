import axios from 'axios'
export function gameList(limit,page) {
  const url = 'api/gameList'
	const data = Object.assign({
    limit:limit,
    page:page
  })
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
