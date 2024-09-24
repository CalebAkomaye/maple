import React from 'react';
import { FiSearch } from 'react-icons/fi';
const Search = () => {
  return (
    <div className=' fixed inline-flex items-center bottom-0 right-0 px-2 py-2 border rounded-md m-2  md:mr-8'>
      <input
        type='text'
        placeholder='search'
        className=' outline-none hidden'
      />
      <FiSearch className='cursor-pointer' />
    </div>
  );
};

export default Search;
