<template>
<div class="page-detail">
	<div class="image-part">
		<img :src="data.img" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price"><strong>{{data.price}}</strong>元</span>
		<span class="origin-price">门市价:{{data.originPrice}}元</span>
		<span 
			:class="{
				'buy-btn': true,
				'has-buy': data.hasBuy
			}" 
			@touchend="buyItem"
		>{{data.hasBuy ? '取消购买' : '立即购买'}}</span>
	</div>
	<ul class="sales-part">
		<li>支持立即退货</li>
		<li>支持随时退货</li>
		<li>销量: {{data.sales}}</li>
	</ul>
	<div class="store-part module">
		<div class="module-header">店家信息</div>
		<div class="module-body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="module-footer">查看其它{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part module">
		<div class="module-header">购买须知</div>
		<div class="module-body" v-html="data.content"></div>
	</div>
	<shopping-car></shopping-car>
</div>
</template>
<style type="text/css" lang="scss">
@import '@/base.scss';
.page-detail {
	padding-bottom: 80px;
	.image-part {
		position: relative;
		color: #fff;
		img {
			width: 100%;
			display: block;
		}
		h1, p {
			position: absolute;
			bottom: 15px;
			left: 10px;
		}
		h1 {
			bottom: 40px;
			font-size: 24px;
		}
	}
	.price-part {
		background-color: #fff;
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		border-bottom: 1px solid #ccc;
		.price {
			color: $navColor;
			margin-right: 6px;
			strong {
				font-size: 30px;
				font-weight: normal;
			}
		}
		.buy-btn {
			float: right;
			padding: 5px 10px;
			color: #fff;
			background-color: #f30;
			border-radius: 4px;
			font-size: 12px;
			line-height: 12px;
			margin-top: 14px;
			&.has-buy {
				background-color: #efefef;
				color: #333;
			}
		}
	}
	.sales-part {
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0;
		li {
			width: 50%;
			padding-left: 10px;
			box-sizing: border-box;
			color: yellowgreen;
			line-height: 28px;
			height: 28px;
			&:last-child {
				color: #000;
			}
		}
	}
	.module {
		margin-top: 10px;
		background-color: #fff;
		padding: 10px;
		.module-header {
			border-bottom: 1px solid #ccc;
			padding: 10px 0 8px;
			font-size: 20px;
		}
		.module-body {
			padding: 15px 0 10px;
			line-height: 28px;
			h1, h2, h3, h4, h5, h6 {
				font-size: 18px;
				padding: 15px 0 8px;
				color: #f30;
			}
		}
		.module-footer {
			border-top: 1px solid #ccc;
			color: skyblue;
			padding: 8px 0 5px;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import ShoppingCar from '@/components/ShoppingCar';
// 组件
export default {
	// 注册组件
	components: { ShoppingCar },
	// 数据
	data() {
		return {
			data: {}
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构数据
			let { params } = this.$route;
			// 发送请求
			this.$http
				.get('/data/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果数据在购物车中，设置hasBuy属性
					if (this.$store.state.products.find(item => item._id === data._id)) {
						// 设置hasBuy属性
						data.hasBuy = true;
					}
					// console.log(data)
					// 存储数据
					this.data = data;
				})
		},
		// 购买商品
		buyItem() {
			// 修改数据前判断
			this.$store.commit(this.data.hasBuy ? 'deleteProduct' : 'addProduct', this.data);
			// 设置购买状态
			// this.data.hasBuy = !this.data.hasBuy;
			// 解决数据丢失
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
			// console.log(111, this)
		}
	},
	// 组件创建完成
	created() {
		// 获取数据
		this.getData()
	},
	// 监听器
	watch: {
		// 监听路由变化
		$route() {
			// 获取数据
			this.getData()
		}
	}
}
</script>