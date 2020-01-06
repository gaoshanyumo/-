<template>
<div id="app">
	<!-- <h1>app part</h1>
	<el-button>hello</el-button> -->
	<!-- <Home v-if="$store.state.username"></Home> -->
	<!-- 路由容器 -->
	<router-view v-if="$store.state.username"></router-view>
	<Login v-else></Login>
</div>
</template>
<style type="text/css" lang="scss">
// @import '@/base.scss';
// h1 {
// 	color: $color;
// }
html, body {
	background-color: #efefef;
	margin: 0;
	padding: 0;
	height: 100%;
}
#app {
	height: 100%;
}
</style>
<script type="text/javascript">
// 引入组件
import Home from '@v/Home';
import Login from '@v/Login';
export default {
	// 注册组件
	components: { Home, Login },
	// 组件创建后
	created() {
		// 获取用户信息
		this.$store.dispatch('userinfo')
	}
	// data() {
	// 	return {}
	// }
}
</script>