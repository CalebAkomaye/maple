import React from 'react';
import { FiMinus } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import Sidebar from './side-bar';

const nav = () => {
  return (
    <div className='border-b flex px-2 py-2 pt-3 justify-between items-center md:px-8'>
      <div>
        <div>
          <Sidebar />
        </div>
      </div>
      <div className=' inline-flex gap-4 items-center md:gap-8'>
        <FiMinus className='cursor-pointer' />
        <FiPlus className='cursor-pointer' />
      </div>
    </div>
  );
};

export default nav;
