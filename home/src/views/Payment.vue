<template>
<div class="page-payment">
	<div class="price-part">
		<span class="title">商品总价：</span>
		<span class="num">￥{{$store.getters.price}}</span>
	</div>
	<div class="btns">
		<span class="btn-cancel" @touchend="$router.go(-1)">取消购买</span>
		<span class="btn-buy" @touchend="buyItem">立即付款</span>
	</div>
	<h2 class="list-title">购买商品</h2>
	<Product v-for="item in $store.state.products" :key="item._id" :data="item"></Product>
</div>
</template>
<style type="text/css" lang="scss">
.page-payment {
	.price-part {
		background-color: #fff;
		padding: 30px 20px 20px;
		font-size: 18px;
		.num {
			color: #f30;
			font-size: 28px;
		}
	}
	.btns {
		text-align: center;
		background-color: #fff;
		span {
			display: inline-block;
			padding: 4px 10px;
			font-size: 12px;
			background-color: #999;
			color: #fff;
			border-radius: 4px;
			margin: 0 10px;
			&.btn-buy {
				background-color: #f30;
			}
		}
	}
	.list-title {
		background-color: #fff;
		font-size: 20px;
		font-weight: normal;
		padding: 30px 20px 8px;

	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '@/components/Product';
// 组件
export default {
	// 注册组件
	components: { Product },
	// 方法
	methods: {
		// 购买商品
		buyItem() {
			// 发送请求
			this.$http
				.post('/data/buy', {
					// 将商品id作为数组来传递
					ids: this.$store.state.products.map(item => item._id) 
				})
				// 监听数据返回
				// .then(({ data }) => console.log(data))
		}
	}
}
</script>