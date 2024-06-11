import React from 'react';
import './EmptyTodos.css';

function EmptyTodos({ totalTodos, searchValue }) {

  let emptyMessage = ( <> Make your first todo... </> );

  if (totalTodos.length === 0 && searchValue !== '') {
    emptyMessage =  ( <> No Coincidences.. </> );
  }

  return (
    <h1 className='TodoCounter'>
      {emptyMessage}
    </h1>
  );
}

export { EmptyTodos };