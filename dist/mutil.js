/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(1)
	var extend = lang.extend

	extend(exports, lang)
	extend(exports, __webpack_require__(2))

	if(window) window.mutil = exports

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// 均分数组，将数组 array 平均分为 size 份数组组成一个数组返回，e.g 客户端分页
	exports.chunk = function (array, size) {
	  	var r = [], tmp = Math.ceil(array.length/size)
	  	while(tmp--) r.push(array.splice(0, size))
	  	return r
	}


	// 节流函数
	function throttle (func, wait) {
		var ctx, args, rtn, timeoutID // 缓存
		var last = 0  // 初始值

		return function throttled () {
			ctx = this
			args = arguments   
			var delta = new Date() - last 
			if (!timeoutID)
				if (delta >= wait) call()   
				else timeoutID = setTimeout(call, wait - delta)
			return rtn
		}

		function call () {
			timeoutID = 0
			last = +new Date()
			rtn = func.apply(ctx, args)
			ctx = null
			args = null
		}
	}
	// 导出节流函数
	exports.debounce = exports.throttle = throttle


	// 将对象 from 的属性混合进对象 to
	exports.extend = function (to, from) {
		var keys = Object.keys(from),
			i = keys.length
		while (i--) 
			to[keys[i]] = from[keys[i]]
		return to
	}

	// 更快的 indexOf 实现
	exports.indexOf = function (arr, obj) {
		var i = arr.length
		while (i--)
			if (arr[i] === obj) return i
		return -1
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// DOM 查询, 对 document.querySelector 的简单封装，添加了 id 查询，
	// getElementById 和 getElementsByClassName 查询性能更好
	// jsPerf: https://jsperf.com/getelementbyid-vs-queryselector/25
	exports.query = function (container, elStr) {
		var d , el
		if(container && container.COMMENT_NODE) 
			d = container
		else
			d = document

		if (elStr[0] === '#')
			el = d.getElementsById(elStr.replace(/^#/, ''))
		else if (elStr[0] === '.')
			el = d.getElementsByClassName(elStr.replace('/^\./', ''))[0]
		else
			el = d.querySelector(elStr)
		return el
	}

	// DOM 查询，对 document.querySelectorAll 的简单封装
	exports.querys = function(container, elStr) {
		var d , el
		if(container && container.COMMENT_NODE) 
			d = container
		else
			d = document
		return d.querySelector(elStr)
	}

	// 简单封装 addEventListener
	exports.on = function(el, event, cb) {
		el.addEventListener(el, event, cb)
	}

	// 简单封装 removeEventListener
	exports.off = function(el, event, cb) {
		el.removeEventListener(event, cb) 
	}

/***/ }
/******/ ]);