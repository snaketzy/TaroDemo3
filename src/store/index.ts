import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    commonSlice: commonReducer
    // 其他 reducer...
  },
});

// 推荐定义 RootState 和 AppDispatch 类型，方便在使用 useSelector 和 useDispatch 时获得类型推断
export type ApplicationState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;