<template>
<!-- div.page-product-create>h1.page-title{创建商品}+el-form>(el-form-item[label]>el-input[placeholder])*13 -->
<div class="page-product-create">
	<h1 class="page-title">{{title}}</h1>
	<!-- 样式：1 label, 2 label-width, 3 placeholder -->
	<!-- 校验：1 v-model, 2 model, 3 prop, 4 rules -->
	<!-- 提交：1 ref, 2 事件, 3 validate -->
	<el-form label-width="200px" :model="data" :rules="rules" ref="product">
		<el-form-item label="商品标题" prop="title">
			<el-input placeholder="请输入商品标题" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="商品描述" prop="description">
			<el-input placeholder="请输入商品描述" v-model="data.description" type="textarea"></el-input>
		</el-form-item>
		<el-form-item label="商品价格" prop="price">
			<el-input placeholder="请输入商品价格" v-model="data.price" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品原价" prop="originPrice">
			<el-input placeholder="请输入商品原价" v-model="data.originPrice" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品评分" prop="evaluate">
			<el-rate show-score allow-half v-model="data.evaluate"></el-rate>
		</el-form-item>
		<el-form-item label="商品分类" prop="type">
			<el-select placeholder="请输入商品分类" v-model="data.type">
				<el-option v-for="item in types" :key="item.id" :value="item.id" :label="item.value"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="商品销量" prop="number">
			<el-input placeholder="请输入商品销量" v-model="data.sales" type="number"></el-input>
		</el-form-item>
		<el-form-item label="商品店名" prop="storeName">
			<el-input placeholder="请输入商品店名" v-model="data.storeName"></el-input>
		</el-form-item>
		<el-form-item label="商店地址" prop="storeAddress">
			<el-input placeholder="请输入商店地址" v-model="data.storeAddress"></el-input>
		</el-form-item>
		<el-form-item label="商品分店" prop="storeNum">
			<el-input placeholder="请输入商品分店" type="number" v-model="data.storeNum"></el-input>
		</el-form-item>
		<el-form-item label="商品图片" prop="img">
			<el-upload
				action="/admin/product/upload"
				:on-success="uploadSuccess"
				:on-error="uploadError"
				:show-file-list="false"
			>
				<el-button type="primary">上传</el-button>
				<span class="ickt-upload-tips" slot="tip">请选择商品图片</span>
			</el-upload>
			<!-- 当前版本中，不必设置v-if指令 -->
			<img class="ickt-upload-img" :src="data.img" v-if="data.img" alt="">
		</el-form-item>
		<el-form-item label="商品内容" prop="content">
			<quill-editor v-model="data.content"></quill-editor>
		</el-form-item>
		<el-form-item>
			<el-button type="success" @click="submitData">提交</el-button>
		</el-form-item>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入方法
import { checkNotEmpty } from '@t/validator';
// 组件
export default {
	// 数据
	data() {
		// 设置校验字段
		let rules = {};
		// 添加策略
		["img", "title", "description", "sales", "price", "originPrice", "type", "evaluate", "storeName","storeAddress","storeNum", "content"].forEach(item => 
			rules[item] = [ { trigger: 'blur', validator: checkNotEmpty } ]
		)
		return {
			// 数据
			data: {},
			// 校验策略
			rules: rules,
			// 分类数据
			types: [
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
			],
			// 不同的数据
			title: '创建商品',
			// 提交数据的地址
			submitUrl: '/admin/product/create'
		}
	},
	// 计算属性数据数据
	computed: {
		// 处理数据类型
		dealData() {
			// 处理字段
			["sales", "price", "originPrice", "type", "evaluate", "storeNum"].forEach(item => this.data[item] = +this.data[item])
			// 返回结果
			return this.data
		}
	},
	// 方法
	methods: {
		// 上传成功
		uploadSuccess({ errno, data, msg }) {
			// console.log('uploadSuccess', arguments)
			// 如果成功
			if (errno === 0) {
				// this.data.img = data;
				// 避免数据丢失
				this.$set(this.data, 'img', data)
			} else {
				// 提示错误信息
				this.$message.error(msg);
			}
			// console.log(this)
		},
		// 上传失败
		uploadError() {
			console.log('uploadError', arguments)
		},
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.product.validate(valid => {
				// 如果合法，提交请求
				if (valid) {
					// 提交请求
					this.$http.post(this.submitUrl, this.dealData)
						// 监听数据返回
						.then(({ data }) => {
							// 如果成功
							if (data.errno === 0) {
								// 进入列表页查看结果
								return this.$router.replace('/product/list/1')
							}
							this.$message.error(data.msg)
						})
				}
			})
		}
	}
}
</script>