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
import { ChangeAlert } from '../ChangeAlert';

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
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      {loading && <TodosLoading/>}
      {error && <TodosError/>}

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        onError={ () => <TodosError /> }
        onLoading={ () => <TodosLoading /> }
        onEmptyTodos={ () => <EmptyTodos /> }
        onEmptySearchResults={ 
          (searchText) => <h1 className='TodoCounter'>No results for "{searchText}"</h1>
        }
        render={ (todo, i) => (
          <TodoItem 
            key={i} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(i)}
            onDelete={() => deleteTodo(i)}
          />
        ) }
      >
        {/* { (todo, i) => (
          <TodoItem 
            key={i} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(i)}
            onDelete={() => deleteTodo(i)}
          />
        ) } */}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} loading={loading}/>

      {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizeTodos}/>
    </>
  );
  
}

export default App;
