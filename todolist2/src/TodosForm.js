import React from "react";
import useInputState from "./Hooks/useInputState";

function TodoForm({addTodos}) {
    const [value, handleChange, reset] = useInputState("");

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addTodos(value);
                reset(); 
            }} >
            <input value={value} onChange={handleChange} />
            </form>
        </div>
    )
}
export default TodoForm;