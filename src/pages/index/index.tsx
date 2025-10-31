import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCommonState } from "../../store/commonSlice";
import './index.less'
import { ApplicationState } from 'src/store';
import { Grid } from "@taroify/core";
import { PhotoOutlined } from "@taroify/icons";

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

