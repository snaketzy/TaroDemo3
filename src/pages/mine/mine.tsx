import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavbarStyle, updateCommonState } from "../../store/commonSlice";
import "./mine.less";
import { ApplicationState } from 'src/store';
import { View, Text, Image } from '@tarojs/components';
import Taro, { useDidShow, useReady } from '@tarojs/taro';
import { getBankList, getIncomeLoanUnsignCount, getTobeSignedTotal } from "src/utils/api";
import { shopUrl } from "src/config/config";

interface Props {
  children?: React.ReactNode;
}

interface DataType {
  userInfo: any;
  tobeTotal: number;
  defaultAdd: any;
  defaultCompanyInfo: any;
  navbarStyle: NavbarStyle;
  bankCardTotal: number;
  balanceTotal: number;
  collectionTotal: number;
  orderTotal: number;
  incomeUnsign: number;
  loanUnsign: number;
}

const mine = (props: Props) => {

  const [data, setData] = useState<DataType>({
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
  })
  
  const commonModule = useSelector((state: ApplicationState) => state.commonSlice);
  const dispatch = useDispatch();

  
  useEffect(() => {
    return () => {
      console.log("Component will unmount")
    }
  }, [])

  useReady(() => {
    getNavbarPoxition();
  })

  useDidShow(() => {
    // Taro.showTabBar({
    //   animation:false
    // })
    const userInfo = Taro.getStorageSync('userInfo')
    if(userInfo) {
        getNavbarPoxition()
        getTobeSignedTotalData()
        getIncomeLoanUnsignCountData()
        // getDefaultAddress()
        // getDefaultCompany()
        getBankCardList()
        // getBalanceTotal()
        // getCollectionTotal()
    }
    // getMyOrderListData() // 获取商城订单total   
    setData(prev => ({
      ...prev,
      bankCardTotal: userInfo ? data.bankCardTotal : 0, // 当有userInfo的场景下，取当前值，否则视为未登录
      balanceTotal: userInfo ? data.balanceTotal : 0, // 当有userInfo的场景下，取当前值，否则视为未登录
      collectionTotal: userInfo ? data.collectionTotal : 0, // 当有userInfo的场景下，取当前值，否则视为未登录
      userInfo: userInfo || {}
    }))
  })

  const getNavbarPoxition = () => {
    const menuBottomInfo = Taro.getMenuButtonBoundingClientRect();
    Taro.getSystemInfo({
      success: (result) => {
        setData(pre => ({
          ...pre,
          navbarStyle: {
            ...pre.navbarStyle,
            menuBottomInfo,
            navBarHeight: menuBottomInfo.height,
            navBarTop: menuBottomInfo.top,
            navBarBottom: menuBottomInfo.bottom,
            safeArea: result.safeArea ? (result.safeArea.top ?? 0) : 0,
          }
        }))
      },
    });
  }

  const getTobeSignedTotalData = async() => {
    const userInfo = Taro.getStorageSync('userInfo') || {}
    const res: any = await getTobeSignedTotal({
      cardCode: userInfo.certNo
    })
    if (res?.result === 0) {
      setData(prev => ({
        ...prev,
        tobeTotal: res.data || 0
      }))
    }
  }

  // 获取借款/代收中待签约数
  const getIncomeLoanUnsignCountData = async () => {
    const userInfo = Taro.getStorageSync('userInfo') || {}
    const res: any = await getIncomeLoanUnsignCount({
      cardCode: userInfo.certNo
    })
    if (res?.result === 0) {
      setData(prev => ({
        ...prev,
        incomeUnsign: res.data.behalfCount || 0,
        loanUnsign: res.data.loanCount || 0
      }))
    }
  }

  /**
   * 获取银行卡数量
   */
  const getBankCardList = async () => {
    const res: any = await getBankList();
    let sum = 0;
    res?.data.forEach(item=>{
        if (item.cardType === "TWO" || item.cardType === "ONE") {
            sum++
        }
    })
    setData(prev => ({
      ...prev,
      bankCardTotal: sum
    }))
  }

  const goLogin = () => {
    Taro.navigateTo({
      url: '/pages/pre-login/preLogin',
    })
  };

  const goPage = (e) => {
    let path = e.currentTarget.dataset.path;
    const isToShare = e.currentTarget.dataset.istoshare || false;
    if(isToShare){
      path = '/pages/shop/share-goods-detail/shareGoodsDetail?url=' + encodeURIComponent(shopUrl + path)
    }
    const {
      userInfo
    } = data
    
    if(Object.keys(userInfo).length === 0) {
        Taro.navigateTo({
            url: "/pages/pre-login/preLogin"
        })
    }
    if (!userInfo.realName || (path === "/pages/certify/certify" && userInfo.certStatus === 3)) {
      return
    }
    Taro.navigateTo({
      url: path,
    })
  }

  return (
    <View className="mineContent">
      <View className="firstSettingBox">
        <Image className="minebg" src="/images/minebg.png" />
        <View
          className="navbarTxt"
          style={{
            height: `${ data.navbarStyle.navBarHeight }px`,
            top: `${ data.navbarStyle.navBarTop }px`,
            lineHeight: `${ data.navbarStyle.navBarHeight }px`,
          }}
        >
          <Text>我的</Text>
        </View>
        <View className="topBox">
          <View className="userInfoBox">
            <Image className="avatar" src={ data.userInfo?.picture || '/images/avatar.png'} />
            { data.userInfo?.realName ? (
              <View className="nameAndCompany">
                <View className="nameTxt">{ data.userInfo.realName }</View>
                <View className="companyTxt">{ data.defaultCompanyInfo.companyName }</View>
              </View>
            ) : (
              <View className="loginTxt" onClick={goLogin}>登录/注册</View>
            )}
          </View>
          <View className="settingBox numBox">
            <View className="boxTitle">
              <Text>我的钱包</Text>
              <View className="right" data-path="/pages/spdb/homepage/homepage" onClick={goPage}>
                查看更多
                <Image className="rightImg" src="/images/rightRow.png" />
              </View>
            </View>
            <View className="row">
              <View className="settingList" data-path="/pages/spdb/homepage/homepage" onClick={goPage}>
                <Text className="numTxt">{ data.bankCardTotal }</Text>
                <Text className="listName">银行卡</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="settingBox" style="margin-top: 120rpx;">
        <View className="boxTitle">其他功能</View>
        <View className="row">
          <View className="settingList" data-path="/pages/sign-list/signList" onClick={goPage}>
            <Image style="width: 40rpx;height: 42rpx;" src="/images/qianxue.png" />
            <text className="listName">我的签约</text>
            <View className="badge">{ data.tobeTotal > 99 ? "99+" : data.tobeTotal }</View>
          </View>
          <View className="settingList" data-path="/pages/setting-page/settingPage" onClick={goPage}>
            <Image style="width: 42rpx;height: 42rpx;" src="/images/shezhi-xianxing.png" />
            <text className="listName">设置</text>
          </View>
          <View className="settingList" data-path="/pages/income-collection/income-collection" onClick={goPage}>
            <Image style="width: 42rpx;height: 42rpx;" src="/images/dealCash.png" />
            <text className="listName">收入代收</text>
            {
              data.incomeUnsign > 0 &&
              <View className="badge">{ data.incomeUnsign > 99 ? "99+" : data.incomeUnsign }</View>
            }
            
          </View>
        </View>
        <View className="row p24">
          <View className="settingList employmentList" data-path="/pages/employment/employment" onClick={goPage}>
            <Image style="width: 42rpx;height: 42rpx;" src="/images/employment.png" />
            <Image className="tipImg" src="/images/employment_tip.png" />
            <text className="listName">灵活用工</text>
          </View>
          <View className="settingList" data-path="/pages/loan/loan" onClick={goPage}>
            <Image style="width: 42rpx;height: 42rpx;" src="/images/loanIcon.png" />
            <text className="listName">借款</text>
            {
              data.loanUnsign > 0 &&
              <View className="badge">{ data.loanUnsign > 99 ? "99+" : data.loanUnsign }</View>
            }
          </View>
        </View>
      </View>
    </View>
  );
}

export default mine

