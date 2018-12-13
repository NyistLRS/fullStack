import request from '../utils/request.js'

export function login(arg) {
	return request({
		url: '/add',
		method: 'post',
		data: {
			...arg
		}
	})
}
