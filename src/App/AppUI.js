import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      {loading && <TodosLoading/>}
      {error && <TodosError/>}

      <TodoList>
      {!loading && searchedTodos.length === 0 && 
        <EmptyTodos />
      }

      {searchedTodos.map((todo, i) => 
        <TodoItem 
          key={i} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completeTodo(i)}
          onDelete={() => deleteTodo(i)}
        />
      )}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal}/>

      {openModal && (
        <Modal>
        <TodoForm/>
        </Modal>
      )}

    </>
  );
}


export { AppUI };