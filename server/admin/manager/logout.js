// 接口
module.exports = (req, res) => {
	// 注销登录
	delete req.session.username;
	// 返回登录页面
	res.redirect('/admin')
}