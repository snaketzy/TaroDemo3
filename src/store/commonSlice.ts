import { createSlice, current }  from "@reduxjs/toolkit";

/** 自定义导航栏接口 */
export interface NavbarStyle {
  navBarHeight: number;
  navBarTop: number;
  navBarBottom: number;
  menuBottomInfo: any;
  safeArea: number;
}
interface CountObject {
  num: number;
}

export interface CommonState {
  count: CountObject;
}

export const initialCommonState: CommonState = {
  count: {
    num: 0
  }
}

export const commonSlice = createSlice({
  name: "commonModule",
  initialState: initialCommonState,
  reducers: {
    updateCommonState: (state, action) => {
      const currentDraft = current(state);
      return {
        ...currentDraft,
        ...action.payload
      }
    }
  }
})

export const { updateCommonState } = commonSlice.actions;

export default commonSlice.reducer;