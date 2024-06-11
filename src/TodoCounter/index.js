import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {

    let counterMessage = (
        <>
            You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> TODO'S 
        </>
    )

    if (completedTodos > 0 && completedTodos === totalTodos) {
        counterMessage = "Congratulations!!! You completed all TODO's";
    } else if (loading) {
        counterMessage = '';
    }

    return (
        <h1 className="TodoCounter">
            {counterMessage}
        </h1>
    );

}

export { TodoCounter };