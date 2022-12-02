import React from "react";
import  SingleTodo  from "./Todo";


function TodosList({ todos, removeTodo }){
    return (
        <div>

                {todos.map(todo => (

                   <li key={todo.id}> <SingleTodo id={todo.id} Task={todo.Task}
                    removeTodo={removeTodo} 
                    /></li>
                ))}

                {/* <li>
                   
                </li>        */}

        </div>
    );
}
export default TodosList;