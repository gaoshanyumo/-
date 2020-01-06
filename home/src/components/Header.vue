<template>
<div class="ickt-header">
	<div class="left">
		<slot name="left"></slot>
	</div>
	<div class="title">
		<h1 v-if="title">{{title}}</h1>
		<slot v-else></slot>
	</div>
	<div class="right">
		<slot name="right"></slot>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
// 引入样式库文件
@import '@/base.scss';
.ickt-header {
	background-color: $navColor;
	color: #fff;
	display: flex;
	height: 50px;
	line-height: 50px;
	text-align: center;
	.left,
	.right {
		width: 60px;
	}
	.arrow {
		position: relative;
		&:before,
		&:after {
			@include arrow(10px, #fff, right);
			content: '';
			position: absolute;
			top: 15px;
			left: 10px;
		}
		&:after {
			border-right-color: $navColor;
			left: 13px;
			top: 15px;
		}
	}
	.title {
		flex: 1;
		font-size: 24px;
		text-indent: -10px;
		h1 {
			font-size: 24px;
			font-weight: normal;
		}
	}
}
</style>
<script type="text/javascript">
// 组件
export default {
	// 接收属性
	props: ['title']
}
</script>