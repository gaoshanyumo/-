// 校验用户名
export function checkUsername(field, value, cb) {
	// 必须输入内容
	if (!value) {
		// 提示错误
		return cb(new Error('请输入用户名'))
	}
	// 判断内容
	if (!/^\w{4,8}$/.test(value)) {
		return cb(new Error('用户名是4-8位的字母数字下划线!'))
	}
	// 合法执行cb
	cb();
}

// 校验密码
export function checkPassword(field, value, cb) {
	// 必须输入内容
	if (!value) {
		// 提示错误
		return cb(new Error('请输入密码'))
	}
	// 包含字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 提示错误
		return cb(new Error('密码必须包含字母和数字!'))
	}
	// 合法执行cb
	cb();
}
// 校验重复密码
export function checkRepeat(data, name, filed, value, cb) {
	// console.log(arguments)
	// 如果没有数据
	if (!value) {
		return cb(new Error(`请输入重复${name}`))
	}
	// 不一致
	if (data !== value) {
		// 提示凑五
		return cb(new Error(`${name}与重复${name}不一致`))
	}
	// 合法
	cb();
}

// 必填项校验
export function checkNotEmpty(filed, value, cb) {
	// 不为空
	if (!value) {
		// 提示错误
		return cb(new Error('请输入数据'))
	}
	// 合法
	cb();
}