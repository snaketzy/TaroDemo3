import Taro from '@tarojs/taro';

const app = Taro.getApp();
const config = require("../config/config")

const showTip = (title: string, icon: "none" | "success" | "error" | "loading" | undefined = "none") =>
  Taro.showToast({ icon, title });

/**跳转登录 */
const toLogin = () => {
  app.globalData.flagModal = true
  setTimeout(() => {
    app.globalData.flagModal = false
      Taro.navigateTo({
        url: "/pages/pre-login/preLogin"
      })
  },500)
}
let flagCertModal = false

/**跳转认证 */
const toCertify = () => {
  flagCertModal = true
  Taro.showModal({
    title: "提示",
    content: "您还未进行实名认证，请先实名！",
    showCancel: true,
    confirmText: "去实名",
    cancelText: "重新登录",
    confirmColor: "#2878FF",
    success(res) {
      flagCertModal = false;
      if (res.confirm) {
        Taro.navigateTo({
          url: "/pages/certify/certify"
        })
      } else if (res.cancel) {
        Taro.navigateTo({
          url: "/pages/pre-login/preLogin"
        })
      }
    },
    fail(res) {
      Taro.navigateTo({
        url: "/pages/pre-login/preLogin"
      })
    }
  })
}

/**获取用户信息 */
const fetchUserInfo = () => {
  const userInfo = Taro.getStorageSync('userInfo')
  const userCompnayInfo = Taro.getStorageSync('companyInfo')
  Taro.showLoading({title: config.LOADING_MESSAGE})
  return new Promise((succ, fail) => {
    Taro.request({
      url: config.urlHost() + `roster/employee/user/getUserInfo?accessToken=${userInfo.token}`,
      method: "GET",
      data: {},
      header: {
        "Authorization": userInfo?.token || "",
        "Mscid": userCompnayInfo?.companyId || "288572",
      },
      success: res => {
        Taro.hideLoading()
        if (res?.statusCode != 200) {
          showTip("获取数据异常");
          return succ(undefined);
        } else if (res?.data?.result == 0) {
          return succ(res.data)
        } else {
          if (res?.data?.result == 401) {
            if (!app.globalData.flagModal) {
              toLogin()
            }
            return succ(undefined);
          }
          return succ(undefined);
        }
      },
      fail: () => {
        Taro.hideLoading()
        Taro.hideToast()
        showTip("获取数据失败");
        return fail();
      }
    });
  });
}

// 登录商城
export const loginShopApp = () => {
  const userInfo = Taro.getStorageSync('userInfo')
  Taro.showLoading()
  return new Promise((succ, fail) => {
    Taro.request({
      url: config.shopHost() + "account/syncToken",
      method: "POST",
      data: userInfo,
      success: res => {
        Taro.hideLoading()
        if (res?.statusCode != 200) {
          showTip("获取数据异常");
          return succ(undefined);
        } else if (res?.data) {
          return succ(res.data)
        } else {
          return succ(undefined);
        }
      },
      fail: () => {
        Taro.hideLoading()
        showTip("登录商城失败");
        return fail();
      }
    });
  });
}

/**
 * 通用请求方法
 * @param method
 * @param url
 * @param data
 * @param header
 */
const fetchApi = async (method, url, data?, header?) => {
  console.log("接口入参：", {
    url: url,
    header: header || {},
    data: data || {}
  })
  const userInfo = Taro.getStorageSync('userInfo')
  // 当常规接口请求时，检查是否有用户信息，无用户信息则跳转登录页
  if(!data?.noGetUserInfo && !userInfo) {
      toLogin()
      return;
  }
  let hideError = null;
  if (data?.hideError) {
    hideError = data.hideError;
    delete data.hideError;
  }
  let next = true
  if (!data?.noGetUserInfo) {
    const res: any = await fetchUserInfo()
    if (res?.result === 0) {
      const user = res?.data?.extra || {}
      const oldUserInfo = Taro.getStorageSync('userInfo')
      Taro.setStorageSync('userInfo', {
        ...user,
        token: oldUserInfo.token
      })
      if (user.certStatus != 3) {
        if (!flagCertModal) {
          toCertify()
        }
        next = false
      }
    } else {
      next = false
    }
  }
  if (data?.noGetUserInfo) {
    delete data.noGetUserInfo;
  }
  const userCompnayInfo = Taro.getStorageSync('companyInfo')
  if (next) {
    
    if(url.includes("roster/employee/yxb/save")) {
      Taro.showLoading({
        title: '生成中，请稍后'
      })
    } else {
      Taro.showLoading()
    }
    return new Promise((succ, fail) => {
      Taro.request({
        url,
        method: method || "get",
        data: data || {},
        header: {
          "Authorization": userInfo?.token || "",
          "Mscid": userCompnayInfo?.companyId || "288572",
          ...header,
        },
        success: res => {
          Taro.hideLoading()
          console.log("接口返回报文：", res)
          if (header) {
            return succ(res?.data)
          }
          if (res?.statusCode != 200) {
            showTip("获取数据异常");
            return succ(undefined);
          } else if (res?.data?.result == 0 || res?.data?.result == 10086 || hideError) {
            if(res?.data?.result == 10086){
              showTip(res?.data?.detail);
              return;
            }
            return succ(res.data)
          } else {
            if (res?.data?.result == 401) {
              if (!app.globalData.flagModal) {
                toLogin()
              }
              return succ(undefined);
            }
            if(res?.data?.result === 2112787) {
              return succ(res.data)
            }
            if (res?.data?.detail?.length > 8) {
              Taro.showModal({
                title: "提示",
                content: res.data.detail,
                showCancel: false,
                confirmText: "确认",
                confirmColor: "#2878FF",
              })
            } else {
              showTip(res?.data?.detail || "获取数据错误");
            }
            return succ(undefined);
          }
        },
        fail: () => {
          Taro.hideLoading()
          Taro.hideToast()
          showTip("获取数据失败");
          return fail();
        }
      });
    });
  } else {
    return new Promise((succ, fail) => {
      succ(undefined)
    })
  }
}

export default fetchApi;
