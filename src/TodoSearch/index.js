import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch({ searchValue, setSearchValue, loading }) {


  let input = (
      <input 
        className='TodoSearch' 
        placeholder='Sweep from the garden' 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
    />
  );

  if (loading) {
    input = '';
  }

  return (
    <>
      {input}
    </>
  );
}

export { TodoSearch };