"use client"
import { Provider } from "react-redux";
import React, { ReactNode } from 'react';
import { store } from './store'; // Import your Redux store

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
