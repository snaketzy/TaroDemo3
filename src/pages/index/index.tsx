import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCommonState } from "../../store/commonSlice";
import './index.less'
import { ApplicationState } from 'src/store';
import { Grid } from "@taroify/core";
import { PhotoOutlined } from "@taroify/icons";


// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion


interface Props {
  children?: React.ReactNode;
}

const Index = (props: Props) => {

  const commonModule = useSelector((state: ApplicationState) => state.commonSlice);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [props])

  useEffect(() => {
    return () => {
      console.log("Component will unmount")
    }
  }, [])


  return (
    <Grid columns={3} direction="horizontal">
      <Grid.Item icon={<PhotoOutlined />} text="文字" />
      <Grid.Item icon={<PhotoOutlined />} text="文字" />
      <Grid.Item icon={<PhotoOutlined />} text="文字" />
    </Grid>
  );
}

export default Index

