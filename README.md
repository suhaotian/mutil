# About

类似 Vue.js[github.com/vuejs/vue] 的 util，慢慢增加ing...

注意，仅适用于现代浏览器！

# Usage

打包基于 webpack，所以要安装
```js
	npm i webpack && npm i webpack -g
```

引入 dist/mutil.min.js 就可以使用了：
```js
	var _ = window.mutil
	_.on(document.body, 'click', function () {
		alert('You click body')
	})
	var func = function () {
		alert(1)
	}
	_.on(window, 'scroll', _.throttle(func, 250))
```