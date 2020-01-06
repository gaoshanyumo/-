<template>
<div class="page-product-list">
	<h1 class="page-title">商品列表</h1>
	<div class="product-list">
		<!-- 商品卡片 -->
		<!-- img+h2+(p>span.price+span.type)+p.sales+div.btns>el-button[type=success]+el-button[type=danger] -->
		<!-- 测试数据中使用的图片（uplaod目录）要放在server/static目录下。 -->
		<el-card v-for="item in list" :key="item._id">
			<img :src="item.img" alt="">
			<h2>{{item.title}}</h2>
			<p class="info">
				<span class="price">￥{{item.price}}</span>
				<!-- <span class="type">{{dealType(item.type)}}</span> -->
				<span class="type">{{item.type | type}}</span>
			</p>
			<p class="sales">已销售{{item.sales}}份</p>
			<div class="btns">
				<!-- <el-button size="mini" type="success">修改</el-button> -->
				<router-link tag="el-button" :to="'/product/edit/' + item._id" class="el-button--success el-button--mini">修改</router-link>
				<el-button size="mini" type="danger" @click="removeItem(item._id)">删除</el-button>
			</div>
		</el-card>
	</div>
	<div class="navigation">
		<router-link tag="el-button" :to="'/product/list/' + (page < 2 ? 1 : page - 1)" class="is-round">&larr; 上一页</router-link>
		<!-- <router-link tag="el-button" :to="'/product/list/' + (+$route.params.page + 1)" class="is-round">下一页 &rarr;</router-link> -->
		<router-link tag="el-button" :to="'/product/list/' + (page + 1)" class="is-round">下一页 &rarr;</router-link>
		<!-- <el-button round>&larr; 上一页</el-button>
		<el-button round>下一页 &rarr;</el-button> -->
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.page-product-list {
	.product-list {
		display: flex;
		flex-wrap: wrap;
	    justify-content: space-evenly;
		.el-card {
			margin-bottom: 30px;
		}
		img {
			width: 240px;
			height: 135px;
		}
		h2 {
			width: 240px;
			font-size: 22px;
			font-weight: normal;
			text-align: center;
			margin: 0;
			padding: 20px 0 15px;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		p {
			margin: 0;
			padding-bottom: 10px;
		}
		.info {
			display: flex;
		}
		.price {
			font-size: 18px;
			color: #f30;
			flex: 1;
		}
		.btns {
			margin-top: 5px;
		}
	}
	.navigation {
		text-align: center;
		margin: 40px 0 60px;
	}
}
</style>
<script type="text/javascript">
// 分类数据
let type =  [
	{ id: 1, value: '美食' },
	{ id: 2, value: '电影' },
	{ id: 3, value: '酒店' },
	{ id: 4, value: '休闲' },
	{ id: 5, value: '外卖' },
	{ id: 6, value: 'KTV' },
	{ id: 7, value: '丽人' },
	{ id: 8, value: '周边游' },
	{ id: 9, value: '小吃' },
	{ id: 10, value: '火车票' }
]
// 组件
export default {
	// 接收属性
	props: ['page'],
	// 数据
	data() {
		return {
			list: []
		}
	},
	// 过滤器
	filters: {
		// 获取分类的值
		type(id) {
			// 查找成员
			let result = type.find(item => item.id == id);
			// 返回其值
			return result.value || '其它';
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 获取动态路由参数
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/admin/product/list', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 存储数据
						return this.list = data.data;
					}
					// 提示错误
					this.$message.error(data.msg);
					// 清空视图
					this.list = [];
				})
		},
		// 获取分类数据
		dealType(id) {
			// 查找成员
			let result = type.find(item => item.id == id);
			// 返回value值
			return result.value || '其它'
		},
		// 删除成员
		removeItem(id) {
			// 发送请求
			this.$http
				.post('/admin/product/remove', { id })
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 刷新页面
						return window.location.reload();
					}
					// 提示错误
					this.$message.error(data.msg)
				})
		}
	},
	// 组件创建完成
	created() {
		// 获取数据
		this.getData();
	},
	// 监听器
	watch: {
		// 路由改变
		$route() {
			// 获取数据
			this.getData();
		}
	}
}
</script>