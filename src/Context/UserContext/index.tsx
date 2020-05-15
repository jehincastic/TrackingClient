import React, { useState, createContext } from 'react';

import { PropType, UserState as User } from '../../Types';

const initialState: User = {
  firstName: '',
  lastName: '',
  email: '',
  isLoggedIn: false,
  notifications: [],
};

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC = (props: React.Props<PropType>) => {
  const { children } = props;
  const [userState, setUserState] = useState<User>(initialState);
  const valueObj = {
    userState,
    setUserState,
  };

  return (
    <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
  );
};
