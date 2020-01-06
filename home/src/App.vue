<template>
<div id="app">
	<!-- <Header title="爱创课堂团购网站">
		<div class="arrow" slot="left"></div>
		<div slot="right">登录</div>
	</Header> -->
	<Header>
		<div class="arrow" slot="left"></div>
		<router-link to="/" tag="h1">爱创课堂团购网站</router-link>
		<div slot="right">登录</div>
	</Header>
	<router-view/>
</div>
</template>

<style lang="scss">
// #app {
// 	background-image: url(/bg.png);
// 	background-repeat: no-repeat;
// 	background-position: center top;
// }
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html,
body {
	background-color: #efefef;
}
</style>
<script type="text/javascript">
// 引入组价
import Header from '@/components/Header';
// 组件
export default {
	// 注册组件
	components: { Header }
}
</script>
