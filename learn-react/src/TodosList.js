import React from "react";

function TodosList(props){
    return (
        <div>
            {props.todos.map(todo => (
                <li key={todo.id}>{todo.Task}</li>        
                ))}
        </div>
    );
}
export default TodosList;