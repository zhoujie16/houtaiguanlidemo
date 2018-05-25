<template>
	<el-form class="login-container">
		<h3 class="title">系统登录</h3>
		<el-form-item>
			<el-input type="text" placeholder="账号"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input type="password" placeholder="密码"></el-input>
		</el-form-item>
		<el-checkbox class="remember">记住密码</el-checkbox>
		<el-form-item style="width: 100%;">
			<el-button @click="loginClick" type="primary" :loading="logining" style="width: 100%;">登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				logining: false,
			}
		},
		methods: {
			loginClick() {
				window.isLogin = true;
				this.logining = true;
				setTimeout(() => {
					this.$router.push({
						path: '/'
					});
				}, 1000)

			}
		}
	}
</script>

<style>
	.login-container {
		border-radius: 5px;
		margin: 180px auto;
		width: 350px;
		padding: 35px 35px 15px 35px;
		border: solid 1px #eaeaea;
	}
	
	.title {
		margin: 0px auto 40px auto;
		text-align: center;
		color: #505458;
	}
	
	.remember {
		margin: 0px 0px 35px 0px;
	}
</style>