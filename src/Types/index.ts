import React from 'react';

export type PropType = {
  children: React.ReactNode;
};

export type PopOverList = {
  title: string;
  content: string;
  date: number;
  action: string;
  id: string;
};

export type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
  notifications: PopOverList[];
};

export type PopOverType = {
  popOverId: string;
  openPopOver: boolean;
  anchorEl: HTMLButtonElement | null;
  handlePopOverClose: () => void;
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
};

export type MenuType = {
  menuName: string;
  menuIcon: JSX.Element;
  menuUrl: string;
};

export type ResponseType = {
  status: string;
  message: any;
};
