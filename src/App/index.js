import React from 'react';
import { useTodos } from './useTodos';
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

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

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
        <EmptyTodos 
          totalTodos={totalTodos} 
          searchValue={searchValue}
        />
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
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

    </>
  );
  
}

export default App;
