import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const { 
    searchValue,
    setSearchValue,
    loading
  } = React.useContext(TodoContext);

  let input = (
      <input 
        className='TodoSearch' 
        placeholder="Pill Onion" 
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