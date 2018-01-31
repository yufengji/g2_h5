import axios from 'axios'
export function giftAction() {
  const url = 'api/giftAction'
	const data = Object.assign({})
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
