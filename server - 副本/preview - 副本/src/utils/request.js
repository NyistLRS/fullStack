import axios from 'axios'

const service = axios.create({
	baseURL: '/api',
	timeout: 5000
})

service.interceptors.request.use(
)

service.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		console.log('error' + error)
		return Promise.reject(error)
	}
)

export default service
