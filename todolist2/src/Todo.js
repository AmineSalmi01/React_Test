import React from 'react'

 const SingleTodo = ({ Task, id, removeTodo }) => {
  return (
    <div>
        
            <ul>  
                 <li>{Task}</li>
                 <button onClick={() => removeTodo(id)}>Delete</button>
                 <button>Edit</button>
            </ul>
            
           

        
    </div>
  )
}
export default SingleTodo;