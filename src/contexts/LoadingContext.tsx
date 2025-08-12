import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface LoadingContextType {
  isLoadingComplete: boolean;
  setLoadingComplete: (complete: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const setLoadingComplete = useCallback((complete: boolean) => {
    setIsLoadingComplete(complete);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoadingComplete, setLoadingComplete }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};