import React from 'react';
import './EmptyTodos.css';
import { TodoContext } from '../TodoContext';

function EmptyTodos() {

  const {
    totalTodos,
    searchValue
  } = React.useContext(TodoContext);

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