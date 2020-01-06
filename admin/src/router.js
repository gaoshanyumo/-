// 引入vue和路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入页面组件
import Home from '@v/Home';
// 商品模块
import ProductCreate from '@v/product/Create';
import ProductEdit from '@v/product/Edit';
import ProductList from '@v/product/List';
// 用户模块
import UserCreate from '@v/user/Create';
import UserEdit from '@v/user/Edit';
import UserList from '@v/user/List';
// 首页
import HomeTypes from '@v/home/Types';
import HomeAds from '@v/home/Ads';
// 默认页面
import Main from '@v/Main';

// 安装
Vue.use(VueRouter);

// 实例化
export default new VueRouter({
	// 定义规则
	routes: [
		// 首页
		{
			path: '/',
			component: Home,
			// 子路由
			children: [
				// 商品模块
				{ path: '/product/create', component: ProductCreate },
				// { path: '/product/list/:page', component: ProductList, props: true },
				{ path: '/product/list/:page', component: ProductList, props(route) {
					// 将page转化成数字
					return { page: +route.params.page }
				} },
				{ path: '/product/edit/:id', component: ProductEdit },
				// 用户模块
				{ path: '/user/create', component: UserCreate },
				{ path: '/user/list/:page', component: UserList },
				{ path: '/user/edit/:id', component: UserEdit },
				// 首页模块
				{ path: '/home/ads', component: HomeAds },
				{ path: '/home/types', component: HomeTypes },
				// 默认页面
				{ path: '*', component: Main }
			]
		}
	]
})