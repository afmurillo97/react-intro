import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos() {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
    
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
    
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
  
      return todoText.includes(searchText);
    }
  );
    
  const completeTodo = (index) => {
    // First Version
    // const updatedTodos = todos.map((todo, i) =>
    //   i === index ? { ...todo, completed: !todo.completed } : todo
    // );

    // Second Version
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    saveTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    // First Version
    // const updatedTodos = todos.filter(
    //   (todo, i) => i !== index
    // );

    // Second Version
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);

    saveTodos(updatedTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({text, completed: false});

    saveTodos(newTodos);
  };

  return (
    { 
      loading,
      error,
      completedTodos, 
      totalTodos, 
      searchValue, 
      setSearchValue, 
      searchedTodos, 
      completeTodo, 
      deleteTodo, 
      addTodo,
      openModal,
      setOpenModal 
    }
  );
  
}

export { useTodos };