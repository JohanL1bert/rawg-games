import React from 'react';
import { Login } from 'common/components/login/LoginForm';
import { LoginLink } from 'common/components/login/LoginLink';

export const LogIn = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="login__wrapper">
          <div className="login">
            <h2 className="loing__header">Log in</h2>
            <Login />
            <LoginLink />
          </div>
        </div>
        <div className="social__wrapper">
          <div className="social">
            <h3 className="social__header">You can use social accounts to log in</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
