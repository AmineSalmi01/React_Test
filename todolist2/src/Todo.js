import React from 'react'

 const SingleTodo = (props) => {
  return (
    <div>
        {props.todos.map(todo => (
            <ul key={todo.id}>  
                 <li>{todo.Task}</li>
            </ul>
           
        ))}
        
    </div>
  )
}
export default SingleTodo;