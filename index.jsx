import React from 'react';
import { useState } from 'react'

function App() {
  const styles = {
    listItem : {
      display:'flex'
    }
  }
  const [text, setText] = useState('')
  const [completed, setCompleted] = useState(false)
  const [todo ,setTodo] = useState([])

  const addTodo = (text) => {
       if (text) {
           const newTodo = {
                text:text,
                completed:false
           }  
           setTodo([...todo,newTodo])
           setText('')
           console.log('todo is',todo)
           alert('Todo List task added successfully')
       }
  }
  
const updateTodo = (index,status)=>{
       const updatedTodo = todo.map((todo,i) =>{
         return ( i === index ? {...todo ,completed:status} : todo )
       })
       
       setTodo(updatedTodo)
}

const deleteTodo = (index)=>{
  const updatedTodo = todo.filter((item,i)=>{
    return i !== index
  })
  setTodo(updatedTodo)
}

  return (
    <div>
      <input type='text' placeholder ='Add Your Todo Here'
      onChange = {(e) =>setText(e.target.value)}
      value ={text}></input>
      <div>
        <button onClick ={()=>addTodo(text)}>
          Add Todo 
        </button>
      </div>
      
      <div>
    
          {todo.map((todo,index) =>  {
            return(
            <div style = {styles.listItem} key={index}>
              <span>
                {todo.text}
              </span>
              <input type='checkbox'
              checked={todo.completed}
              onChange={()=> {
                 const status = !todo.completed;
                 updateTodo(index,status)
                 
              }
              }/>
              
              <button onClick={()=>deleteTodo(index)}> Remove </button>
            </div>
            )
          })}
          
      
      </div>
      
    </div>
  )
}

export default App
