import fetchApi from "./fetchApi";
import * as config from "../config/config";

// 获取待签合同总数
export const getTobeSignedTotal = (params) => {
  return fetchApi("GET", config.urlHost() + `roster/employee/contract/countByCardCode?cardCode=${params.cardCode}`)
}

// 获取代收/借款待签约数
export const getIncomeLoanUnsignCount = (params) => {
  return fetchApi("post", config.urlHost() + `roster/employee/yxb/behalf/collection/count?cardCode=${params.cardCode}`, { noGetUserInfo: true })
}

/** 获取银行卡列表数据 */
export const getBankList = () => {
  return fetchApi("get", config.urlHost() + "moneybagApi/user/bank/cardsBySpdb")
}