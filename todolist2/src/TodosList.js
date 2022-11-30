import React from "react";
import  SingleTodo  from "./Todo";


function TodosList(props){
    return (
        <div>
            

                <li>
                    <SingleTodo todos={props.todos}/>
                </li>       

        </div>
    );
}
export default TodosList;