import React from 'react';
import { LogInConst } from 'common/const/LogIn.const';
import { ILogInConst } from 'common/interfaces/signLoginInterface';

export const SociaLink = () => {
  return (
    <div>
      <div>
        {LogInConst.map((el: ILogInConst) => (
          <i key={el.id}>
            <div>
              <img src={el.img} alt={el.alt} />
            </div>
            <div>
              <span>{el.title}</span>
            </div>
          </i>
        ))}
      </div>
    </div>
  );
};
