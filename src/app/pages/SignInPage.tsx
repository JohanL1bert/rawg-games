import React from 'react';
import { SociaLink } from 'common/components/SociaLink';
import { SignInForm } from 'common/components/sign-in/SignInForm';
import { SignInLink } from 'common/components/sign-in/SignInLink';

export const SignInPage = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="sign-in-wrapper">
          <h2 className="sign-in-header">Sign up</h2>
          <SignInForm />
          <SignInLink />
        </div>
        <div className="social__wrapper">
          <div className="social">
            <SociaLink />
          </div>
        </div>
      </div>
    </section>
  );
};
