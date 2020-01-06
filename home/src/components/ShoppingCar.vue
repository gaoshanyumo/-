<template>
<div class="ickt-shopping-car">
	<div class="price">共￥{{$store.getters.price}}元</div>
	<div class="btn" @touchend="showPaymentPage">选好了</div>
</div>
</template>
<style type="text/css" lang="scss">
.ickt-shopping-car {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	line-height: 50px;
	background-color: #484d54;
	color: #fff;
	display: flex;
	text-align: center;
	font-size: 18px;
	.price {
		flex: 1;
	}
	.btn {
		width: 100px;
		background-color: #fe2947;
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 方法
	methods: {
		// 展示购买页面
		showPaymentPage() {
			// 如果购物车中，没有购买的商品，要提示用户
			if (this.$store.state.products.length === 0) {
				// 提示用户
				return alert('请购买商品！')
			}
			// 通过路由进入
			this.$router.push('/payment')
		}
	}
}
</script>