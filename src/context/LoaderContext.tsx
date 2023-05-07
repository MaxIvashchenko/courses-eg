import React, { createContext, useState } from 'react';

interface LoginProviderProps {
  children: React.ReactNode;
}

export const LoaderContext = createContext({
  isLoading: false,
  setLoading: (_: boolean): void => {}
});

export const LoaderProvider = ({ children }: LoginProviderProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
