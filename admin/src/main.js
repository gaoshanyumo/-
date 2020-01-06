// 引入vue
import Vue from 'vue';
// 引入应用程序
import App from './App';
// 引入ElemneUI
import ElementUI from 'element-ui';
// 移入axios
import axios from 'axios';
// 引入store
import store from './store';
// 引入路由
import router from './router';
// 引入富文本编辑器
import QuillEditor from 'vue-quill-editor'
// 样式
import 'element-ui/lib/theme-chalk/index.css';
// 富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 安装
Vue.use(ElementUI);
// 安装富文本编辑器
Vue.use(QuillEditor);
// 安装axios
Vue.prototype.$http = axios;

// 实例化
new Vue({
	// 注册store
	store,
	// 注册路由
	router,
	// 渲染应用程序
	render: h => h(App)
// 挂载
}).$mount('#app')