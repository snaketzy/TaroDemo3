"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/mine"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/mine!./src/pages/mine/mine.tsx":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/mine!./src/pages/mine/mine.tsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/api */ "./src/utils/api.ts");
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/config/config */ "./src/config/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const mine = props => {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    userInfo: {},
    tobeTotal: 0,
    defaultAdd: {},
    defaultCompanyInfo: {},
    navbarStyle: {
      navBarHeight: 0,
      navBarBottom: 0,
      navBarTop: 0,
      menuBottomInfo: undefined,
      safeArea: 0
    },
    bankCardTotal: 0,
    balanceTotal: 0,
    collectionTotal: 0,
    orderTotal: 0,
    incomeUnsign: 0,
    loanUnsign: 0
  });
  const commonModule = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.commonSlice);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useReady)(() => {
    getNavbarPoxition();
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.useDidShow)(() => {
    // Taro.showTabBar({
    //   animation:false
    // })
    const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('userInfo');
    if (userInfo) {
      getNavbarPoxition();
      getTobeSignedTotalData();
      getIncomeLoanUnsignCountData();
      // getDefaultAddress()
      // getDefaultCompany()
      getBankCardList();
      // getBalanceTotal()
      // getCollectionTotal()
    }
    // getMyOrderListData() // 获取商城订单total   
    setData(prev => ({
      ...prev,
      bankCardTotal: userInfo ? data.bankCardTotal : 0,
      // 当有userInfo的场景下，取当前值，否则视为未登录
      balanceTotal: userInfo ? data.balanceTotal : 0,
      // 当有userInfo的场景下，取当前值，否则视为未登录
      collectionTotal: userInfo ? data.collectionTotal : 0,
      // 当有userInfo的场景下，取当前值，否则视为未登录
      userInfo: userInfo || {}
    }));
  });
  const getNavbarPoxition = () => {
    const menuBottomInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getMenuButtonBoundingClientRect();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getSystemInfo({
      success: result => {
        setData(pre => ({
          ...pre,
          navbarStyle: {
            ...pre.navbarStyle,
            menuBottomInfo,
            navBarHeight: menuBottomInfo.height,
            navBarTop: menuBottomInfo.top,
            navBarBottom: menuBottomInfo.bottom,
            safeArea: result.safeArea ? result.safeArea.top ?? 0 : 0
          }
        }));
      }
    });
  };
  const getTobeSignedTotalData = async () => {
    const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('userInfo') || {};
    const res = await (0,src_utils_api__WEBPACK_IMPORTED_MODULE_3__.getTobeSignedTotal)({
      cardCode: userInfo.certNo
    });
    if (res?.result === 0) {
      setData(prev => ({
        ...prev,
        tobeTotal: res.data || 0
      }));
    }
  };

  // 获取借款/代收中待签约数
  const getIncomeLoanUnsignCountData = async () => {
    const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getStorageSync('userInfo') || {};
    const res = await (0,src_utils_api__WEBPACK_IMPORTED_MODULE_3__.getIncomeLoanUnsignCount)({
      cardCode: userInfo.certNo
    });
    if (res?.result === 0) {
      setData(prev => ({
        ...prev,
        incomeUnsign: res.data.behalfCount || 0,
        loanUnsign: res.data.loanCount || 0
      }));
    }
  };

  /**
   * 获取银行卡数量
   */
  const getBankCardList = async () => {
    const res = await (0,src_utils_api__WEBPACK_IMPORTED_MODULE_3__.getBankList)();
    let sum = 0;
    res?.data.forEach(item => {
      if (item.cardType === "TWO" || item.cardType === "ONE") {
        sum++;
      }
    });
    setData(prev => ({
      ...prev,
      bankCardTotal: sum
    }));
  };
  const goLogin = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: '/pages/pre-login/preLogin'
    });
  };
  const goPage = e => {
    let path = e.currentTarget.dataset.path;
    const isToShare = e.currentTarget.dataset.istoshare || false;
    if (isToShare) {
      path = '/pages/shop/share-goods-detail/shareGoodsDetail?url=' + encodeURIComponent(src_config_config__WEBPACK_IMPORTED_MODULE_5__.shopUrl + path);
    }
    const {
      userInfo
    } = data;
    if (Object.keys(userInfo).length === 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
        url: "/pages/pre-login/preLogin"
      });
    }
    if (!userInfo.realName || path === "/pages/certify/certify" && userInfo.certStatus === 3) {
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
      url: path
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "mineContent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "firstSettingBox",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
        className: "minebg",
        src: "/images/minebg.png"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "navbarTxt",
        style: {
          height: `${data.navbarStyle.navBarHeight}px`,
          top: `${data.navbarStyle.navBarTop}px`,
          lineHeight: `${data.navbarStyle.navBarHeight}px`
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          children: "\u6211\u7684"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "topBox",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "userInfoBox",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            className: "avatar",
            src: data.userInfo?.picture || '/images/avatar.png'
          }), data.userInfo?.realName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "nameAndCompany",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "nameTxt",
              children: data.userInfo.realName
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "companyTxt",
              children: data.defaultCompanyInfo.companyName
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "loginTxt",
            onClick: goLogin,
            children: "\u767B\u5F55/\u6CE8\u518C"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingBox numBox",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "boxTitle",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
              children: "\u6211\u7684\u94B1\u5305"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "right",
              "data-path": "/pages/spdb/homepage/homepage",
              onClick: goPage,
              children: ["\u67E5\u770B\u66F4\u591A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
                className: "rightImg",
                src: "/images/rightRow.png"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "settingList",
              "data-path": "/pages/spdb/homepage/homepage",
              onClick: goPage,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
                className: "numTxt",
                children: data.bankCardTotal
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
                className: "listName",
                children: "\u94F6\u884C\u5361"
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "settingBox",
      style: "margin-top: 120rpx;",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "boxTitle",
        children: "\u5176\u4ED6\u529F\u80FD"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingList",
          "data-path": "/pages/sign-list/signList",
          onClick: goPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: "width: 40rpx;height: 42rpx;",
            src: "/images/qianxue.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
            className: "listName",
            children: "\u6211\u7684\u7B7E\u7EA6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "badge",
            children: data.tobeTotal > 99 ? "99+" : data.tobeTotal
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingList",
          "data-path": "/pages/setting-page/settingPage",
          onClick: goPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: "width: 42rpx;height: 42rpx;",
            src: "/images/shezhi-xianxing.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
            className: "listName",
            children: "\u8BBE\u7F6E"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingList",
          "data-path": "/pages/income-collection/income-collection",
          onClick: goPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: "width: 42rpx;height: 42rpx;",
            src: "/images/dealCash.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
            className: "listName",
            children: "\u6536\u5165\u4EE3\u6536"
          }), data.incomeUnsign > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "badge",
            children: data.incomeUnsign > 99 ? "99+" : data.incomeUnsign
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "row p24",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingList employmentList",
          "data-path": "/pages/employment/employment",
          onClick: goPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: "width: 42rpx;height: 42rpx;",
            src: "/images/employment.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            className: "tipImg",
            src: "/images/employment_tip.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
            className: "listName",
            children: "\u7075\u6D3B\u7528\u5DE5"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "settingList",
          "data-path": "/pages/loan/loan",
          onClick: goPage,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: "width: 42rpx;height: 42rpx;",
            src: "/images/loanIcon.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("text", {
            className: "listName",
            children: "\u501F\u6B3E"
          }), data.loanUnsign > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "badge",
            children: data.loanUnsign > 99 ? "99+" : data.loanUnsign
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mine);

/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOADING_MESSAGE: function() { return /* binding */ LOADING_MESSAGE; },
/* harmony export */   appId: function() { return /* binding */ appId; },
/* harmony export */   bindCardRemindH5Notice: function() { return /* binding */ bindCardRemindH5Notice; },
/* harmony export */   defaultPreUrl: function() { return /* binding */ defaultPreUrl; },
/* harmony export */   defaultProUrl: function() { return /* binding */ defaultProUrl; },
/* harmony export */   fetchWxInfoHost: function() { return /* binding */ fetchWxInfoHost; },
/* harmony export */   fileUploadUrl: function() { return /* binding */ fileUploadUrl; },
/* harmony export */   isProduct: function() { return /* binding */ isProduct; },
/* harmony export */   loginHost: function() { return /* binding */ loginHost; },
/* harmony export */   mallUrl: function() { return /* binding */ mallUrl; },
/* harmony export */   ocrHost: function() { return /* binding */ ocrHost; },
/* harmony export */   shopHost: function() { return /* binding */ shopHost; },
/* harmony export */   shopUrl: function() { return /* binding */ shopUrl; },
/* harmony export */   ssqHost: function() { return /* binding */ ssqHost; },
/* harmony export */   uploadHost: function() { return /* binding */ uploadHost; },
/* harmony export */   urlHost: function() { return /* binding */ urlHost; },
/* harmony export */   xiangmaHost: function() { return /* binding */ xiangmaHost; }
/* harmony export */ });
// export const isProduct = true;
const isProduct = false;

// export const defaultPreUrl = "https://preexinbaoh5.zhenyetong.com/";
const defaultPreUrl = "http://localhost:10011/";
const defaultProUrl = "https://exinbaoh5.zhenyetong.com/";
const fileUploadUrl = "filemanager/upload";
const appId = 1602;
const LOADING_MESSAGE = "加载中...";
const urlHost = () => {
  if (isProduct) {
    return "https://exinbaoh5.zhenyetong.com/";
  } else {
    return "https://test-exinbaoh5.zhenyetong.com/";
    // return "http://192.168.181.19:13051/";
  }
};

// 商城地址
const shopUrl = isProduct ? "https://apph5.zhenyetong.com/shoppingmarket/#/" : "https://test-web.zhenyetong.com/shoppingmarket/#/";

/**企业专场 */
const mallUrl = isProduct ? "https://mall.zhenyetong.com/mallspecial/" : "https://test-mallh5.zhenyetong.com/mallspecial/";
const ssqHost = () => {
  if (isProduct) {
    return "https://wx107.bestsign.cn";
  }
  return "https://wx105.bestsign.info";
};

/**微信用户信息鉴权服务 */
const fetchWxInfoHost = () => {
  if (isProduct) {
    return "https://exinbaoh5.zhenyetong.com";
  } else {
    return "https://test-exinbaoh5.zhenyetong.com";
  }
};

/**上传文件的服务 */
const uploadHost = () => {
  if (isProduct) {
    return "https://uploadv2.zhenyetong.com/";
  } else {
    return "https://test-uploadv2.zhenyetong.com/";
  }
};

/**登录的服务 */
const loginHost = () => {
  if (isProduct) {
    return "https://cust.zhenyetong.com/custOpenApi/";
  } else {
    return "https://test-cust.zhenyetong.com/custOpenApi/"; //"http://116.62.30.7:26202/custOpenApi/";
  }
};

/**OCR的服务 */
const ocrHost = () => {
  if (isProduct) {
    return "https://cert.zhenyetong.com/"; // http://114.67.112.101:9009/auth/sync/ocr/card
  } else {
    return "https://cert.zhenyetong.com/"; //http://114.67.112.101:9009/auth/sync/ocr/card;
  }
};

/**相马的服务 */
const xiangmaHost = () => {
  if (isProduct) {
    return "https://xiangmayun.cn/hrTrading/";
  } else {
    return "https://prehrapi.zhenyetong.com/hrTrading/"; //"http://121.40.171.180:28000/hrTrading/";
  }
};

/**商城服务 */
const shopHost = () => {
  if (isProduct) {
    return "https://api.zhenyetong.com/";
  } else {
    return "https://test-api.zhenyetong.com/exinbaoapi/";
  }
};

/** 绑卡提示 */
const bindCardRemindH5Notice = "本次绑卡后如需更换收款卡，请进入我的-我的钱包-添加银行卡，并设为收款卡提交";

/***/ }),

/***/ "./src/pages/mine/mine.tsx":
/*!*********************************!*\
  !*** ./src/pages/mine/mine.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/mine!./mine.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mine/mine!./src/pages/mine/mine.tsx");


var config = {"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#4382f6","navigationBarTextStyle":"white","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/mine/mine', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mine_mine_mine_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBankList: function() { return /* binding */ getBankList; },
/* harmony export */   getIncomeLoanUnsignCount: function() { return /* binding */ getIncomeLoanUnsignCount; },
/* harmony export */   getTobeSignedTotal: function() { return /* binding */ getTobeSignedTotal; }
/* harmony export */ });
/* harmony import */ var _fetchApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchApi */ "./src/utils/fetchApi.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");



// 获取待签合同总数
const getTobeSignedTotal = params => {
  return (0,_fetchApi__WEBPACK_IMPORTED_MODULE_0__["default"])("GET", _config_config__WEBPACK_IMPORTED_MODULE_1__.urlHost() + `roster/employee/contract/countByCardCode?cardCode=${params.cardCode}`);
};

// 获取代收/借款待签约数
const getIncomeLoanUnsignCount = params => {
  return (0,_fetchApi__WEBPACK_IMPORTED_MODULE_0__["default"])("post", _config_config__WEBPACK_IMPORTED_MODULE_1__.urlHost() + `roster/employee/yxb/behalf/collection/count?cardCode=${params.cardCode}`, {
    noGetUserInfo: true
  });
};

/** 获取银行卡列表数据 */
const getBankList = () => {
  return (0,_fetchApi__WEBPACK_IMPORTED_MODULE_0__["default"])("get", _config_config__WEBPACK_IMPORTED_MODULE_1__.urlHost() + "moneybagApi/user/bank/cardsBySpdb");
};

/***/ }),

/***/ "./src/utils/fetchApi.ts":
/*!*******************************!*\
  !*** ./src/utils/fetchApi.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export loginShopApp */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

const app = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getApp();
const config = __webpack_require__(/*! ../config/config */ "./src/config/config.ts");
const showTip = (title, icon = "none") => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
  icon,
  title
});

/**跳转登录 */
const toLogin = () => {
  app.globalData.flagModal = true;
  setTimeout(() => {
    app.globalData.flagModal = false;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: "/pages/pre-login/preLogin"
    });
  }, 500);
};
let flagCertModal = false;

/**跳转认证 */
const toCertify = () => {
  flagCertModal = true;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
    title: "提示",
    content: "您还未进行实名认证，请先实名！",
    showCancel: true,
    confirmText: "去实名",
    cancelText: "重新登录",
    confirmColor: "#2878FF",
    success(res) {
      flagCertModal = false;
      if (res.confirm) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/certify/certify"
        });
      } else if (res.cancel) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: "/pages/pre-login/preLogin"
        });
      }
    },
    fail(res) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: "/pages/pre-login/preLogin"
      });
    }
  });
};

/**获取用户信息 */
const fetchUserInfo = () => {
  const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('userInfo');
  const userCompnayInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('companyInfo');
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
    title: config.LOADING_MESSAGE
  });
  return new Promise((succ, fail) => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: config.urlHost() + `roster/employee/user/getUserInfo?accessToken=${userInfo.token}`,
      method: "GET",
      data: {},
      header: {
        "Authorization": userInfo?.token || "",
        "Mscid": userCompnayInfo?.companyId || "288572"
      },
      success: res => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
        if (res?.statusCode != 200) {
          showTip("获取数据异常");
          return succ(undefined);
        } else if (res?.data?.result == 0) {
          return succ(res.data);
        } else {
          if (res?.data?.result == 401) {
            if (!app.globalData.flagModal) {
              toLogin();
            }
            return succ(undefined);
          }
          return succ(undefined);
        }
      },
      fail: () => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideToast();
        showTip("获取数据失败");
        return fail();
      }
    });
  });
};

// 登录商城
const loginShopApp = () => {
  const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('userInfo');
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
  return new Promise((succ, fail) => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      url: config.shopHost() + "account/syncToken",
      method: "POST",
      data: userInfo,
      success: res => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
        if (res?.statusCode != 200) {
          showTip("获取数据异常");
          return succ(undefined);
        } else if (res?.data) {
          return succ(res.data);
        } else {
          return succ(undefined);
        }
      },
      fail: () => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
        showTip("登录商城失败");
        return fail();
      }
    });
  });
};

/**
 * 通用请求方法
 * @param method
 * @param url
 * @param data
 * @param header
 */
const fetchApi = async (method, url, data, header) => {
  console.log("接口入参：", {
    url: url,
    header: header || {},
    data: data || {}
  });
  const userInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('userInfo');
  // 当常规接口请求时，检查是否有用户信息，无用户信息则跳转登录页
  if (!data?.noGetUserInfo && !userInfo) {
    toLogin();
    return;
  }
  let hideError = null;
  if (data?.hideError) {
    hideError = data.hideError;
    delete data.hideError;
  }
  let next = true;
  if (!data?.noGetUserInfo) {
    const res = await fetchUserInfo();
    if (res?.result === 0) {
      const user = res?.data?.extra || {};
      const oldUserInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('userInfo');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('userInfo', {
        ...user,
        token: oldUserInfo.token
      });
      if (user.certStatus != 3) {
        if (!flagCertModal) {
          toCertify();
        }
        next = false;
      }
    } else {
      next = false;
    }
  }
  if (data?.noGetUserInfo) {
    delete data.noGetUserInfo;
  }
  const userCompnayInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('companyInfo');
  if (next) {
    if (url.includes("roster/employee/yxb/save")) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
        title: '生成中，请稍后'
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
    }
    return new Promise((succ, fail) => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        url,
        method: method || "get",
        data: data || {},
        header: {
          "Authorization": userInfo?.token || "",
          "Mscid": userCompnayInfo?.companyId || "288572",
          ...header
        },
        success: res => {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
          console.log("接口返回报文：", res);
          if (header) {
            return succ(res?.data);
          }
          if (res?.statusCode != 200) {
            showTip("获取数据异常");
            return succ(undefined);
          } else if (res?.data?.result == 0 || res?.data?.result == 10086 || hideError) {
            if (res?.data?.result == 10086) {
              showTip(res?.data?.detail);
              return;
            }
            return succ(res.data);
          } else {
            if (res?.data?.result == 401) {
              if (!app.globalData.flagModal) {
                toLogin();
              }
              return succ(undefined);
            }
            if (res?.data?.result === 2112787) {
              return succ(res.data);
            }
            if (res?.data?.detail?.length > 8) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: "提示",
                content: res.data.detail,
                showCancel: false,
                confirmText: "确认",
                confirmColor: "#2878FF"
              });
            } else {
              showTip(res?.data?.detail || "获取数据错误");
            }
            return succ(undefined);
          }
        },
        fail: () => {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideToast();
          showTip("获取数据失败");
          return fail();
        }
      });
    });
  } else {
    return new Promise((succ, fail) => {
      succ(undefined);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (fetchApi);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/mine/mine.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=mine.js.map