import React from 'react';
import { NavLink } from 'react-router-dom';

export const LoginLink = () => {
  return (
    <div>
      <NavLink to="/sign-in">Don&apos;t have an account? Sign ip. </NavLink>
      <NavLink to="/password_recovery">Forgot your password?</NavLink>
    </div>
  );
};
