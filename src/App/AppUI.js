import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

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

            <CreateTodoButton />

        </>
    );
}


export { AppUI };