<template>
<div class="page-login">
	<div class="login-inner">
		<h1>请您登录</h1>
		<!-- 设置样式 -->
		<!-- 1 设置label内容 -->
		<!-- 2 label-width -->
		<!-- 3 placeholder -->
		<!-- 校验表单 -->
		<!-- 1 设置v-model -->
		<!-- 2 为el-form设置model -->
		<!-- 3 为el-form-item设置prop -->
		<!-- 4 设置校验规则rules -->
		<!-- 提交校验 -->
		<!-- 1 绑定事件 -->
		<!-- 2 设置ref -->
		<!-- 3 获取组件，调用validate方法校验表单合法性 -->
		<el-form label-width="100px" :model="data" :rules="rules" ref="login">
			<el-form-item label="用户名" prop="username">
				<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input placeholder="请输入密码" type="password" v-model="data.password"></el-input>
			</el-form-item>
			<el-button type="success" @click="submitData">登录</el-button>
		</el-form>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-login {
	.login-inner {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 400px;
		padding: 20px;
		margin-left: -220px;
		margin-top: -160px;
		border-radius: 10px;
		background-color: #fff;
		h1 {
			font-size: 20px;
			font-weight: normal;
			border-bottom: 1px solid #ccc;
			padding-bottom: 8px;
			margin-bottom: 20px;
			text-align: center;
			margin-top: 5px;
		}
		.el-button {
			width: 100%;
			display: block;
		}
	}
}
</style>
<script type="text/javascript">
// 引入校验方法
import { checkUsername, checkPassword } from '@t/validator';
// 组件
export default {
	// 数据
	data() {
		return {
			// 绑定的数据
			data: {},
			// 校验规则
			rules: {
				// 用户名
				username: [
					// 每一个成员对象代表一条校验规则。
					// { trigger: 'blur', validator() { console.log(arguments) } }
					{ trigger: 'blur', validator: checkUsername }
				],
				// 密码
				password: [
					{ trigger: 'blur', validator: checkPassword }
				]
			}
		}
	},
	// 方法
	methods: {
		// 提交数据
		submitData() {
			// console.log(this)
			// console.log(this.$refs)
			// 校验表单
			this.$refs.login.validate(valid => {
				// 如果合法
				if (valid) {
					// 登录
					this.$http
						.post('/admin/login', this.data)
						// 监听数据返回
						.then(({ data }) => {
							// 如果登录成功
							if (data.errno === 0) {
								// 展示首页
								this.$store.commit('updateUsername', data.data)
							} else {
								// 提示错误
								// this.$alert(data.msg)
								this.$message.error(data.msg)
							}
						})
				}
			})
		}
	}
}
</script>