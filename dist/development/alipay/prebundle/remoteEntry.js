"use strict";
var taro_app_library;
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["taro_app_library"],{

/***/ "webpack/container/entry/taro_app_library":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var moduleMap = {
	"./react": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-XDFXK7K5_js"), __webpack_require__.e("node_modules_taro_alipay_prebundle_react_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react.js */ "./node_modules/.taro/alipay/prebundle/react.js")); }; });
	},
	"./react-redux": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-XDFXK7K5_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-52WVI2QE_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_react-redux_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react-redux.js */ "./node_modules/.taro/alipay/prebundle/react-redux.js")); }; });
	},
	"./redux": function() {
		return __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_redux_js").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux.js */ "./node_modules/.taro/alipay/prebundle/redux.js")); }; });
	},
	"./redux-thunk": function() {
		return __webpack_require__.e("node_modules_taro_alipay_prebundle_redux-thunk_js").then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux-thunk.js */ "./node_modules/.taro/alipay/prebundle/redux-thunk.js")); }; });
	},
	"./redux-logger": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_redux-logger_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux-logger.js */ "./node_modules/.taro/alipay/prebundle/redux-logger.js")); }; });
	},
	"./react/jsx-runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-XDFXK7K5_js"), __webpack_require__.e("node_modules_taro_alipay_prebundle_react_jsx-runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react_jsx-runtime.js */ "./node_modules/.taro/alipay/prebundle/react_jsx-runtime.js")); }; });
	},
	"./@tarojs/plugin-framework-react/dist/runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_tarojs_plugin-framework-react_dist_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_plugin-framework-react_dist_runtime.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_plugin-framework-react_dist_runtime.js")); }; });
	},
	"./@tarojs/runtime": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("node_modules_taro_alipay_prebundle_tarojs_runtime_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_runtime.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_runtime.js")); }; });
	},
	"./@tarojs/shared": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("node_modules_taro_alipay_prebundle_tarojs_shared_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_shared.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_shared.js")); }; });
	},
	"./@tarojs/taro": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_tarojs_taro_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_taro.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_taro.js")); }; });
	},
	"./react-dom": function() {
		return Promise.all([__webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-A7RMUCNB_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-2E6NRW52_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-XDFXK7K5_js"), __webpack_require__.e("vendors-node_modules_taro_alipay_prebundle_chunk-52WVI2QE_js"), __webpack_require__.e("node_modules_taro_alipay_prebundle_react-dom_js")]).then(function() { return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react-dom.js */ "./node_modules/.taro/alipay/prebundle/react-dom.js")); }; });
	}
};
var get = function(module, getScope) {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(function() {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = function(shareScope, initScope) {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: function() { return get; },
	init: function() { return init; }
});

var taroModuleMap = {
	"./react": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react.js */ "./node_modules/.taro/alipay/prebundle/react.js")); };
	},
	"./react-redux": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react-redux.js */ "./node_modules/.taro/alipay/prebundle/react-redux.js")); };
	},
	"./redux": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux.js */ "./node_modules/.taro/alipay/prebundle/redux.js")); };
	},
	"./redux-thunk": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux-thunk.js */ "./node_modules/.taro/alipay/prebundle/redux-thunk.js")); };
	},
	"./redux-logger": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/redux-logger.js */ "./node_modules/.taro/alipay/prebundle/redux-logger.js")); };
	},
	"./react/jsx-runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react_jsx-runtime.js */ "./node_modules/.taro/alipay/prebundle/react_jsx-runtime.js")); };
	},
	"./@tarojs/plugin-framework-react/dist/runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_plugin-framework-react_dist_runtime.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_plugin-framework-react_dist_runtime.js")); };
	},
	"./@tarojs/runtime": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_runtime.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_runtime.js")); };
	},
	"./@tarojs/shared": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_shared.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_shared.js")); };
	},
	"./@tarojs/taro": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/@tarojs_taro.js */ "./node_modules/.taro/alipay/prebundle/@tarojs_taro.js")); };
	},
	"./react-dom": function() {
		return function() { return (__webpack_require__(/*! ./node_modules/.taro/alipay/prebundle/react-dom.js */ "./node_modules/.taro/alipay/prebundle/react-dom.js")); };
	}
};
var taroGet = function(module) {
	return taroModuleMap[module]();
};
__webpack_require__.taro(taroGet);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("webpack/container/entry/taro_app_library"));
/******/ taro_app_library = __webpack_exports__;
/******/ }
]);