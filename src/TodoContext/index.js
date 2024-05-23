import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const searchedTodos = todos.filter(
        (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
    
        return todoText.includes
            (searchText);
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
    
    const addTodo = (newTodo) => {
        saveTodos([...todos, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ 
            loading,
            error,
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodo, 
            deleteTodo, 
            addTodo 
        }}>
            { children }
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };