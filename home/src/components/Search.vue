<template>
<div class="ickt-search">
	<input type="text" :placeholder="placeholder" v-model="msg" @keyup.enter="showSearchResult">
	<!-- 此时v-model只能在组件内部实现数据双向绑定，无法将数据传递给组件外部 -->
	<!-- <input type="text" v-model="value"> -->
	<!-- 我们此时要绑定事件 -->
	<!-- <input type="text" :value="value" @input="sendMessage"> -->
	<!-- 简写 -->
	<!-- <input type="text" :value="value" @input="e => this.$emit('input', e.target.value)"> -->
	<!-- <h1>search: {{value}}</h1> -->
</div>
</template>
<style type="text/css" lang="scss" scoped>
.ickt-search {
	background-color: #fff;
	display: flex;
	padding: 8px 20px;
	input {
		flex: 1;
		font-size: 14px;
		padding: 9px 20px;
		background-color: #efefef;
		border: none;
		outline: none;
		border-radius: 17px;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收属性
	// props: ['value', 'placeholder', 'search'],
	props: {
		value: String,
		placeholder: String,
		search: {
			default() {
				// 方法的返回值是默认值
				return () => {}
			}
		}
	},
	// 数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		// 展示搜索结果
		showSearchResult(e) {
			// 向父组件通信
			this.search(e.target.value)
			// 清空msg数据
			this.msg = ''
		}
		// sendMessage(e) {
		// 	// 发布消息
		// 	this.$emit('input', e.target.value)
		// }
	}
}
</script>