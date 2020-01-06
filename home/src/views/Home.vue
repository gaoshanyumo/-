<template>
<div class="page-home">
	<ul class="types">
		<router-link tag="li" :to="'/list/' + item.id" v-for="item in types" :key="item.index">
			<img :src="'/static/img/icon/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 广告模块 -->
	<ul class="ads">
		<router-link tag="li" v-for="(item, index) in ad" :key="item._id" :to="'/detail/' + item.product">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="item.url" alt="">
		</router-link>
	</ul>
	<!-- 猜你喜欢 -->
	<div class="guess-list">
		<h2>猜你喜欢</h2>
	</div>
	<!-- 商品列表 -->
	<Product v-for="item in list" :key="item.id" :data="item"></Product>
</div>
</template>
<style type="text/css" lang="scss" scoped>
.page-home {
	.types {
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		padding-top: 15px;
		li {
			width: (100%/5);
			img {
				width: 60%;
			}
			p {
				font-size: 14px;
				margin: 6px 0 10px;
			}
		}
	}
	.ads {
		background-color: #fff;
		margin-top: 10px;
		display: flex;
		li {
			flex: 1;
			border-right: 1px solid #ccc;
			text-align: center;
			padding: 18px 0 20px;
			&:last-child {
				border-right: none;
			}
			img {
				width: 60%;
			}
			h3 {
				font-size: 16px;
				font-weight: normal;
			}
			p {
				font-size: 12px;
				margin: 8px 0;
			}
			// .color-0 {
			// 	color: red;
			// }
			// .color-1 {
			// 	color: green;
			// }
			// .color-2 {
			// 	color: purple;
			// }
			// 循环变量
			$i: 0;
			// 枚举循环
			@each $item in red, green, purple {
				.color-#{$i} {
					color: $item;
				}
				// 改变循环变量
				$i: $i + 1;
			}
		}
	}
	.guess-list {
		margin-top: 10px;
		padding: 0 10px;
		background-color: #fff;
		h2 {
			border-bottom: 1px solid #ccc;
			padding: 12px 0 8px;
			font-size: 20px;
			font-weight: normal;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '@/components/Product';
// 组件
export default {
	// 注册
	components: { Product },
	// 数据
	data() {
		return {
			// 分类按钮数据
			types: [
				{ id: '1',  img: '01.png', text: '美食' },
				{ id: '2',  img: '02.png', text: '电影' },
				{ id: '3',  img: '03.png', text: '酒店' },
				{ id: '4',  img: '04.png', text: '休闲' },
				{ id: '5',  img: '05.png', text: '外卖' },
				{ id: '6',  img: '06.png', text: 'ktv' },
				{ id: '7',  img: '07.png', text: '丽人' },
				{ id: '8',  img: '08.png', text: '周边游' },
				{ id: '9',  img: '09.png', text: '小吃' },
				{ id: '10',  img: '10.png', text: '火车票' }
			],
			// 初始化
			ad: [],
			list: []
		}
	},
	// 获取数据
	created() {
		// 获取数据
		this.$http
			.get('/data/home')
			// 监听数据返回
			.then(({ data }) => {
				// 存储数据
				this.ad = data.ad;
				this.list = data.list;
			})
	}
}
</script>