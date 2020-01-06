<template>
<router-link :to="'/detail/' + data._id" tag="div" class="ickt-product">
	<div class="inner">
		<img :src="data.img" alt="">
		<div class="content">
			<h2>{{data.title}}</h2>
			<p>
				<span class="price">{{data.price}}元</span>
				<span class="origin-price">门市价:{{data.originPrice}}元</span>
				<span class="sales">销量{{data.sales}}</span>
			</p>
		</div>
	</div>
</router-link>
</template>
<style type="text/css" lang="scss" scoped>
@import '@/base.scss';
.ickt-product {
	background-color: #fff;
	padding: 0 10px;
	.inner {
		border-bottom: 1px solid #ccc;
		padding: 10px 0;
		display: flex;
		img {
			width: 100px;
			height: 60.5px;
		}
		.content {
			flex: 1;
			margin-left: 10px;
			h2 {
				height: 41px;
				font-size: 16px;
			}
			p {
				font-size: 14px;
			}
			.price {
				color: $navColor;
				margin-right: 5px;
			}
			.sales {
				float: right;
			}
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收属性
	props: ['data']
}
</script>