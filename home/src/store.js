import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 搜索数据
		search: '',
		// 所有的商品
		// products: [{price: 10}, {price: 50}, {price: 30}, {price: 100}, {price: '20'}]
		products: []
	},
	// 计算属性数据
	getters: {
		// 价格
		price(state) {
			// 如果没有成员
			if (state.products.length === 0) {
				// 返回0
				return '0.00'
			}
			// 遍历成员，求价格之和
			return state.products
				// 让每一个成员变成一个数字
				.map(item => item.price)
				// 每一个成员都是数字了
				.reduce((res, item) => +res + +item)
				// 保留两位小数
				.toFixed(2)
		}
	},
	mutations: {
		// 更新搜索数据的方法
		updateSearch(state, value) {
			state.search = value;
		},
		// 添加商品
		addProduct(state, data) {
			// console.log('addProduct', data)
			// 如果没有价格，不要添加
			if (isNaN(data.price)) {
				// 提示用户
				return alert('请正确添加商品！')
			}
			// 我们认为商品只能购买一次
			if (state.products.find(item => item._id === data._id)) {
				// 已经购买过
				return alert('该商品已经加入购物车！')
			}
			// 加入购物车
			state.products.push(data)
		},
		// 删除商品
		deleteProduct(state, data) {
			// console.log('deleteProduct', data)
			// 获取索引值
			let index = state.products.findIndex(item => item._id === data._id);
			// 如果不存在
			if (index === -1) {
				// 提示用户
				return alert('该商品不在购物车中！')
			}
			// 删除成员
			state.products.splice(index, 1);
		}
	},
	actions: {

	}
})
