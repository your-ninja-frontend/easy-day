import { configureStore } from '@reduxjs/toolkit';
import rootStateSlice from './rootSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      rootState: rootStateSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
