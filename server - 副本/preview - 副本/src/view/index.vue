<template>
	<div>
		<input type="text" name="" id="" v-model="name" />
		<input type="text" name="" id="" v-model="password" />
		<button type="button" @click="submit">登录</button>
	</div>
</template>

<script>
import { login } from '@/api/login.js'
	export default {
		data() {
			return {
				name: '',
				password: ''
			}
		},
		methods: {
			submit() {
				login({
					name: this.name,
					psw: this.password
				}).then(res => {
					debugger
				}).catch(res => {
					debugger
				})
			}
		}
	}
</script>

<style>
</style>