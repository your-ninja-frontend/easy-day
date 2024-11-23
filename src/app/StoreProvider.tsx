'use client';
import { AppStore, makeStore } from '@/store/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: ILayoutProps) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
