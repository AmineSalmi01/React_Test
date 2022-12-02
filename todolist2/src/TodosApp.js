import React, { useState } from "react";
import TodosList from "./TodosList";
import TodoForm from "./TodosForm";
const {v4: uuidv4} = require('uuid')
 
function Todos (){
    const initialTodos = [
        { id: 1, Task: "Amine Salmi", completed: false },
        { id: 2, Task: "Ziad El Amrani", completed: true },
        { id: 3, Task: "Nada Bouyahya", completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodos = newTodosText => {
        setTodos([...todos, { id: uuidv4(), Task: newTodosText, completed: false }]);

    };

    const removeTodo = todoId => {
        const updatedTodo = todos.filter(todo =>todo.id !== todoId);
        setTodos(updatedTodo);
    }
    return (
        <div>
            <TodoForm addTodos={addTodos} />
            <TodosList todos={todos} removeTodo={removeTodo}/>
            
           
        </div>
    )
}
export default Todos;