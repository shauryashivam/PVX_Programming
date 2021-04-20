import React from 'react';
import classnames from 'classnames';

import CppLogo from '../../assets/images/cpp.svg';

function Card() {
  return (
    <div className={classnames(
      'rounded-lg bg-white shadow-lg py-4 px-8 flex flex-col space-y-3 justify-center',
      'transition duration-500 ease-in-out transform hover:scale-105'
    )}>
      <div className="text-center text-3xl font-semibold">
        C++
      </div>
      <div>
        <img src={CppLogo} alt="cpplogo"/>
      </div>
      <div className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde porro illo corporis, qui sunt reprehenderit perspiciatis dolor fuga soluta recusandae blanditiis in a consectetur commodi, ea dignissimos eaque ratione veritatis!
      </div>
      <div className="flex flex-row space-x-2 justify-end items-center">
        <div className="px-5 py-1 rounded-full bg-blue-200 text-blue-700">Hard</div>
        <div className="px-5 py-1 rounded-full bg-blue-200 text-blue-700">Horror</div>
        <div className="px-5 py-1 rounded-full bg-blue-200 text-blue-700">Thriller</div>
      </div>
    </div>
  );
};

export default Card;