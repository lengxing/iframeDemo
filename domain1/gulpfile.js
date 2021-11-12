const { series, parallel, task, src, dest, watch } = require('gulp')
const connect = require('gulp-connect') //启动本地服务器

// server
const webserver = parallel(function (cb) {
	connect.server({
		livereload: true,
		port: 1026,
		host: '127.0.0.1',
	})
	cb()
})

exports.default = series(webserver)
