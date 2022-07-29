import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'common/const/AppRoutes.const';

export const LoginLink = () => {
  return (
    <div>
      <NavLink to={AppRoute.signIn}>Don&apos;t have an account? Sign ip. </NavLink>
      <NavLink to="/password_recovery">Forgot your password?</NavLink>
    </div>
  );
};
