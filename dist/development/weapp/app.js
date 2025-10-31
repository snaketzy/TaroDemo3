"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_taroify_core_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-GI3TOUPS_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-XR5KPIQD_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_reduxjs_toolkit_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-XDFXK7K5_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-64XLMAQ4_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-J2X4FILQ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_taroify_icons_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react-dom_js.js");

require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const App = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_1__.store,
    children: props.children
  });
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./app.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/mine/mine","pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"测试振业宝迁移","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/store/commonSlice.ts":
/*!**********************************!*\
  !*** ./src/store/commonSlice.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports initialCommonState, commonSlice, updateCommonState */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);


/** 自定义导航栏接口 */

const initialCommonState = {
  count: {
    num: 0
  }
};
const commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "commonModule",
  initialState: initialCommonState,
  reducers: {
    updateCommonState: (state, action) => {
      const currentDraft = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.current)(state);
      return {
        ...currentDraft,
        ...action.payload
      };
    }
  }
});
const {
  updateCommonState
} = commonSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (commonSlice.reducer);

/***/ }),

/***/ "./src/store/counterSlice.ts":
/*!***********************************!*\
  !*** ./src/store/counterSlice.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports counterSlice, increment, decrement, incrementByAmount */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// 导出自动生成的 action creators
const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions;
// 导出 reducer
/* harmony default export */ __webpack_exports__["default"] = (counterSlice.reducer);

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterSlice */ "./src/store/counterSlice.ts");
/* harmony import */ var _commonSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commonSlice */ "./src/store/commonSlice.ts");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    counterSlice: _counterSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    commonSlice: _commonSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
    // 其他 reducer...
  }
});

// 推荐定义 RootState 和 AppDispatch 类型，方便在使用 useSelector 和 useDispatch 时获得类型推断

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map