import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'common/components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
