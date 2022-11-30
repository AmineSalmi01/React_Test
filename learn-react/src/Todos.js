import React, { useState } from "react";
import TodosList from "./TodosList";
import TodoForm from "./TodosForm";


function Todos (){
    const initialTodos = [
        { id: 1, Task: "Amine Salmi", completed: false },
        { id: 2, Task: "Ziad El Amrani", completed: true },
        { id: 3, Task: "Nada Bouyahya", completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodos = newTodosText => {
        setTodos([...todos, { id: 4, Task: newTodosText, completed: false }]);

    };
    return (
        <div>
            <TodoForm addTodos={addTodos} />
            <TodosList todos={todos} />
           
        </div>
    )
}
export default Todos;