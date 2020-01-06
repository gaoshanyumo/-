<template>
<el-container class="page-home">
	<el-header>
		<router-link tag="h1" to="/">爱创课堂后台管理系统</router-link>
		<div class="status">
			<span>您好 </span>
			<span>{{$store.state.username}}</span>
			<span> 欢迎回来 ! </span>
			<a href="/admin/logout">退出</a>
		</div>
	</el-header>
	<el-container>
		<el-aside width="250px">
			<!-- 菜单组件 -->
			<el-menu :router="true">
				<el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
					<template #title>
						<i class="el-icon-menu"></i>
						<span>{{item.value}}</span>
					</template>
					<!-- <span slot="title">{{item.value}}</span> -->
					<!-- 字列表 -->
					<!-- 根据index属性值做切换 -->
					<el-menu-item v-for="childItem in item.children" :key="childItem.link" :index="childItem.link">{{childItem.value}}</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-main>
			<!-- 子路由渲染位置 -->
			<router-view></router-view>
		</el-main>
	</el-container>
</el-container>
</template>
<style type="text/css" lang="scss">
.page-home {
	height: 100%;
	.el-header {
		height: 60px;
		background-color: #fff;
		margin-bottom: 10px;
		display: flex;
		h1 {
			flex: 1;
		}
		.status {
			display: inline-block;
			margin-top: 30px;
		}
	}
	.el-aside {
		background-color: #fff;
		margin-right: 10px;
	}
	.el-main {
		background-color: #fff;
	}
	.page-title {
		border-bottom: 1px solid #ccc;
		margin-top: 0;
		padding: 10px;
		margin-bottom: 30px;
		font-size: 24px;
		font-weight: normal;
	}
	.el-input,
	.el-textarea,
	.el-select {
		width: 50%;
		.el-input {
			width: 100%;
		}
	}
	.ickt-upload-tips {
		margin-left: 10px;
		color: #999
	}
	.ickt-upload-img {
		margin-top: 20px;
		max-width: 100%;
		max-height: 200px;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 数据
	data() {
		return {
			menu: [
				// 每一个成员代表一个模块
				{
					value: '商品模块',
					children: [
						{ value: '创建商品', link: '/product/create' },
						{ value: '商品列表', link: '/product/list/1' }
					]
				},
				{
					value: '首页模块',
					children: [
						{ value: '首页广告', link: '/home/ads' },
						{ value: '首页分类', link: '/home/types' }
					]
				},
				{
					value: '用户模块',
					children: [
						{ value: '创建用户', link: '/user/create' },
						{ value: '用户列表', link: '/user/list/1' }
					]
				}
			]
		}
	}
}
</script>