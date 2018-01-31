import axios from 'axios'
export function serverAction() {
  const url = 'api/serverAction'
	const data = Object.assign({})
	return axios.get(url,{
		params:data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
