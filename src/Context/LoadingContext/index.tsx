import React, { useState, createContext } from 'react';

import { PropType } from '../../Types';

export const LoadingContext = createContext<any>(null);

export const LoadingProvider: React.FC = (props: React.Props<PropType>) => {
  const { children } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const valueObj = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={valueObj}>
      {children}
    </LoadingContext.Provider>
  );
};
