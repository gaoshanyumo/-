<template>
<div class="page-list">
	<!-- <Search placeholder="请输入搜索词" :search="showSearchResult"></Search> -->
	<Search placeholder="请输入搜索词" :search="value => $store.commit('updateSearch', value)"></Search>
	<!-- 创建列表 -->
	<ul class="order-list">
		<li v-for="item in orders" :key="item.id" @touchend="orderList(item.id)">
			<span>{{item.text}}</span>
		</li>
	</ul>
	<!-- 创建商品列表 -->
	<!-- 对list过滤，要动态获取list -->
	<!-- <Product v-for="item in dealList" :key="item._id" :data="item"></Product> -->
	<Product v-for="item in list" :key="item._id" :data="item"></Product>
	<!-- 查看更多按钮 -->
	<!-- 为了避免点击穿透，我们使用touchend -->
	<div class="load-more" @touchend="showMore" v-show="others.length">
		<span>查看其它{{others.length}}条数据</span>
	</div>
	<!-- <Search v-model="msg"></Search> -->
	<!-- 数据双向绑定指令的实现 -->
	<!-- <input type="text" v-model="msg"> -->
	<!-- 实现v-model -->
	<!-- <input type="text" :value="msg" @input="demo"> -->
	<!-- <input type="text" :value="msg" @input="e => this.msg = e.target.value"> -->
	<!-- <h1>list page - {{msg}}</h1> -->
</div>
</template>
<style type="text/css" lang="scss">
// 引入库
@import '@/base.scss';
.page-list {
	.order-list {
		background-color: #fff;
		display: flex;
		li {
			flex: 1;
			border-bottom: 1px solid #ccc;
			border-right: 1px solid #ccc;
			font-size: 12px;
			text-align: center;
			line-height: 30px;
			&:last-child {
				border-right: none;
			}
			span:after {
				@include arrow(4px);
				content: '';
				position: relative;
				left: 2px;
			}
		}
	}
	.load-more {
		background-color: #fff;
		border-bottom: 1px solid #ccc;
		line-height: 40px;
		text-align: center;
		text-indent: -10px;
		span {
			font-size: 16px;
			color: $navColor;
			position: relative;
			&:before,
			&:after {
				@include arrow(8px, $navColor);
				content: '';
				position: absolute;
				top: 9px;
				right: -22px;
			}
			&:after {
				border-top-color: #fff;
				top: 6px;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Search from '@/components/Search';
// 引入商品组件
import Product from '@/components/Product';
// 定义组件
export default {
	// 注册组件
	components: { Search, Product },
	// 数据
	data() {
		return {
			// msg: 'hello'
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'originPrice' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
			],
			// 数据初始化
			list: [],
			// 备份数据
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 对list数据做过滤
		dealList() {
			// 数组过滤
			return this.list.filter(item => 
				// 忽略大小写
				item.title.toUpperCase().indexOf(
					this.$store.state.search.toUpperCase()
				) >= 0)
		},
		// 代理store中的数据
		searchValue() {
			// 返回state中的数据
			return this.$store.state.search;
		}
	},
	// 方法
	methods: {
		// demo(e) {
		// 	// console.log(e.target.value)
		// 	// 将视图中的数据，存储在模型中
		// 	this.msg = e.target.value;
		// }
		// 展示搜索结果
		// showSearchResult(value) {
		// 	console.log(value)
		// },
		// 展示更多的数据
		showMore() {
			// 将other中的数据存储在list中
			this.list = this.list.concat(this.others);
			// 清空others
			this.others = [];
		},
		// 商品排序
		orderList(id) {
			// console.log(id)
			// // 如果是优惠
			// if (id === 'discount') {
			// 	// a的优惠： a.originPrice - a.price
			// 	// b的优惠： b.originPrice - b.price
			// 	// 升序
			// 	// return this.list.sort((a, b) => (a.originPrice - a.price) - (b.originPrice - b.price))
			// 	// 降序
			// 	return this.list.sort((a, b) => (b.originPrice - b.price) - (a.originPrice - a.price))
			// }
			// // 对list排序
			// // 升序
			// // this.list.sort((a, b) => a[id] - b[id])
			// // 降序
			// this.list.sort((a, b) => b[id] - a[id])

			// 后端实现要发送请求
			this.$http
				.get('/data/order', {
					params: {
						type: this.$route.params.id,
						id,
						// 升序还是降序
						desc: -1
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					// 存储前三个
					this.list = data.slice(0, 3);
					// 存储剩余的数据
					this.others = data.slice(3);
				})
		},
		// 获取数据
		getData() {
			// console.log(this.$route)
			// 解构数据
			let { params } = this.$route;
			// 获取数据
			this.$http
				// .get('/data/list', {
				// 	// query数据
				// 	params: {
				// 		id: params.id
				// 	}
				// })
				// .get('/data/list', {
				// 	// query数据
				// 	params: params
				// })
				// 省略写法
				.get('/data/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// this.list = data
					// 存储前三个
					this.list = data.slice(0, 3);
					// 存储剩余的数据
					this.others = data.slice(3);
				})
		}
	},
	// 组件创建完成
	created() {
		// 获取数据
		this.getData();
		// this.$http
		// 	.get('/data/list')
		// 	// 监听数据返回
		// 	.then(({ data }) => console.log(data))
	},
	// 数据监听器
	watch: {
		// 路由的变化
		$route() {
			// 获取数据
			this.getData();
		},
		// 监听状态中的数据。
		// '$store.state.search'(value) {
		// 	console.log(222, value)
		// },
		// 监听数据的变化
		searchValue(value) {
			// 发送请求
			this.$http
				.get('/data/search', {
					params: {
						type: this.$route.params.id,
						// value: this.$store.state.search
						// value: this.searchValue
						value
					}
				})
				// 监听数据返回
				.then(({ data }) => {
					// console.log(data)
					// 存储前三个
					this.list = data.slice(0, 3);
					// 存储剩余的数据
					this.others = data.slice(3);
				})
		}
	}
}
</script>