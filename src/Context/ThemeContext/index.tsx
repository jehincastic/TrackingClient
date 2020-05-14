import React, { useState, createContext } from 'react';

import { PropType } from '../../Types';

export const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC = (props: React.Props<PropType>) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(false);
  const valueObj = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={valueObj}>
      {children}
    </ThemeContext.Provider>
  );
};
