import React from 'react';

export const LoginForm = (props: any) => {
  const { values, placeholder } = props;
  console.log(values);

  return (
    <div className="1">
      <div className="">
        <input type="email" placeholder={placeholder} />
        <div>mail error</div>
      </div>
    </div>
  );
};
