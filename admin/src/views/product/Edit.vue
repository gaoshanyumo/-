<script type="text/javascript">
// 引入Create组件
import Create from './Create';
// 组件
export default {
	// 混合
	mixins: [Create, {
		// 混合中重写
		// data() {
		// 	return {
		// 		title: '编辑商品'
		// 	}
		// }
	}],
	// 重写数据
	data() {
		return {
			title: '编辑商品',
			submitUrl: '/admin/product/update'
		}
	},
	// 方法
	methods: {
		// 获取数据
		getData() {
			// 解构动态路由参数
			let { params } = this.$route;
			// 获取商品详情
			this.$http
				.get('/admin/product/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 成功
					if (data.errno === 0) {
						// 存储数据
						this.data = data.data;
					} else {
						// 出现错误
						// 提示错误
						this.$message.error(data.msg);
						// 清空视图
						this.data = {}
						// 返回上一个页面
						this.$router.go(-1);
					}
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