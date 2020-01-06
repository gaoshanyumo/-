<template>
<!-- div.page-main.page-inner>h1+el-form>(el-form-item[label]>el-input[placeholder])*3+el-form-item>el-button[type=success]+el-button[type=warning] -->
<div class="page-main">
	<h1 class="page-title">修改密码</h1>
	<!-- 设置样式 1 设置label, 2 label-width, 3 placeholder -->
	<!-- 表单校验 1 v-model， 2 model， 3 prop， 4 rules -->
	<!-- 表单提交 1 绑定事件， 2 ref， 3 校验表单 -->
	<el-form label-width="200px" :model="data" :rules="rules" ref="manager">
		<el-form-item label="用户名" prop="username">
			<el-input placeholder="请输入用户名" v-model="data.username"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input placeholder="请输入密码" v-model="data.password" type="password"></el-input>
		</el-form-item>
		<el-form-item label="重复密码" prop="repeat">
			<el-input placeholder="请重复输入密码" v-model="data.repeat" type="password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitData">提交</el-button>
			<el-button type="warning" @click="resetData">重置</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验方法
import { checkUsername, checkPassword, checkRepeat } from '@t/validator';
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
					{ trigger: 'blur', validator: checkUsername }
				],
				// 密码
				password: [
					{ trigger: 'blur', validator: checkPassword }
				],
				// 重复密码
				repeat: [
					{ trigger: 'blur', validator: (...arg) => {
						// 方法的this默认是校验对象，要绑定组件实例化对象
						// console.log(this)
						// 执行校验方法
						checkRepeat(this.data.password, '密码', ...arg)
						// checkRepeat(this.data.username, '用户名', ...arg)
					} }
				],

			}
		}
	},
	// 方法
	methods: {
		// 提交数据
		submitData() {
			// 表单是否合法
			this.$refs.manager.validate(valid => {
				// 如果合法
				if (valid) {
					// 解构数据
					let { username, password } = this.data;
					// 提交数据
					this.$http
						.post('/admin/manager/update', { username, password })
						// 监听数据返回
						.then(({ data }) => {
							// 如果成功
							if (data.errno === 0) {
								// 刷新页面重新登录
								window.location.reload();
							} else {
								// 提示错误
								this.$message.error(data.msg)
							}
						})
				}
			})
		},
		// 重置数据
		resetData() {
			// console.log(this.$refs.manager)
			// 重置表单
			this.$refs.manager.resetFields();
		}
	}
}
</script>