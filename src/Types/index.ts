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

export type PopOverType = {
  popOverId: string;
  openPopOver: boolean;
  anchorEl: HTMLButtonElement | null;
  handlePopOverClose: () => void;
  notificationList: PopOverList[];
  setNotificationList: React.Dispatch<React.SetStateAction<PopOverList[]>>;
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
