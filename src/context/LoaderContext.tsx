import React, { createContext, useState } from 'react';

interface LoginProviderProps {
  children: React.ReactNode;
}

export const LoaderContext = createContext({
  isLoading: false,
  //  @ts-ignore
  setLoading: (isLoading: boolean) => {}
});

export const LoaderProvider = ({ children }: LoginProviderProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
