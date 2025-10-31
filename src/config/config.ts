// export const isProduct = true;
export const isProduct = false;

// export const defaultPreUrl = "https://preexinbaoh5.zhenyetong.com/";
export const defaultPreUrl = "http://localhost:10011/";
export const defaultProUrl = "https://exinbaoh5.zhenyetong.com/";
export const fileUploadUrl = "filemanager/upload";
export const appId = 1602

export const LOADING_MESSAGE = "加载中...";

export const urlHost = () => {
  if (isProduct) {
    return "https://exinbaoh5.zhenyetong.com/";
  } else {
    return "https://test-exinbaoh5.zhenyetong.com/";
    // return "http://192.168.181.19:13051/";
  }
}

// 商城地址
export const shopUrl = isProduct ? "https://apph5.zhenyetong.com/shoppingmarket/#/" : "https://test-web.zhenyetong.com/shoppingmarket/#/";

/**企业专场 */
export const mallUrl = isProduct ? "https://mall.zhenyetong.com/mallspecial/" : "https://test-mallh5.zhenyetong.com/mallspecial/";

export const ssqHost = () => {
  if (isProduct) {
    return "https://wx107.bestsign.cn"
  }
  return "https://wx105.bestsign.info"
}

/**微信用户信息鉴权服务 */
export const fetchWxInfoHost = () => {
  if (isProduct) {
    return "https://exinbaoh5.zhenyetong.com"
  } else {
    return "https://test-exinbaoh5.zhenyetong.com"
  }
}

/**上传文件的服务 */
export const uploadHost = () => {
  if (isProduct) {
    return "https://uploadv2.zhenyetong.com/";
  } else {
    return "https://test-uploadv2.zhenyetong.com/";
  }
}


/**登录的服务 */
export const loginHost = () => {
  if (isProduct) {
    return "https://cust.zhenyetong.com/custOpenApi/";
  } else {
    return "https://test-cust.zhenyetong.com/custOpenApi/";  //"http://116.62.30.7:26202/custOpenApi/";
  }
}

/**OCR的服务 */
export const ocrHost = () => {
  if (isProduct) {
    return "https://cert.zhenyetong.com/"; // http://114.67.112.101:9009/auth/sync/ocr/card
  } else {
    return "https://cert.zhenyetong.com/";  //http://114.67.112.101:9009/auth/sync/ocr/card;
  }
}

/**相马的服务 */
export const xiangmaHost = () => {
  if (isProduct) {
    return "https://xiangmayun.cn/hrTrading/";
  } else {
    return "https://prehrapi.zhenyetong.com/hrTrading/";  //"http://121.40.171.180:28000/hrTrading/";
  }
}

/**商城服务 */
export const shopHost = () => {
  if (isProduct) {
    return "https://api.zhenyetong.com/";
  } else {
    return "https://test-api.zhenyetong.com/exinbaoapi/";
  }
}

/** 绑卡提示 */
export const bindCardRemindH5Notice = "本次绑卡后如需更换收款卡，请进入我的-我的钱包-添加银行卡，并设为收款卡提交";
