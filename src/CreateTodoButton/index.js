import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton({ setOpenModal, loading }) {

  return (
    <>
      { !loading && (
        <button 
          className='CreateTodoButton'
          onClick={ 
            () => {
              setOpenModal(state => !state);
            } 
          }
        >+</button>
      ) }
    </>
  );
}

export { CreateTodoButton };