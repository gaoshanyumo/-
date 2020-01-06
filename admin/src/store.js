// 引入vue和vuex
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 引入axios
import axios from 'axios';

// 安装
Vue.use(Vuex);

// 创建store
export default new Store({
	// 数据
	state: {
		username: ''
	},
	// 同步消息
	mutations: {
		// 更新数据的方法
		updateUsername(state, username) {
			// 更新数据
			state.username = username;
		}
	},
	// 异步消息
	actions: {
		// 获取用户信息
		userinfo(store) {
			// 直接发送请求
			// console.log(store)
			// 发送请求
			axios.get('/admin/userinfo')
				// 监听数据返回
				.then(({ data }) => {
					// 如果返回成功
					if (data.errno === 0) {
						// 存储数据
						store.commit('updateUsername', data.data)
					}
				})
		}
	}
})