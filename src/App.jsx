import React, {useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {
  const [todo, setTodo] = useState({
    activity: '',
    description: ''
  });

  const [todos, setTodos] = useState([{
    activity: '',
    description: '',
    _id: ''
  }])
  useEffect(() => {
   fetch('/todos')
   .then((res) => {
     return res.json();
   })
   .then ((jsonRes) => setTodos(jsonRes))
   .catch((err) => console.log(err))
  },[todos])

  const [isPut, setIsPut] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    activity: '',
    description: '',
    id: ''
  })

  

  const handleChange = (event) => {
    const {name, value} = event.target;
    setTodo((previousInput) => {
      return {
        ...previousInput,
        [name]: value
      }
    })
    console.log(todo);
  }
  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      activity: todo.activity,
      description: todo.description
    }
    axios.post('/newtodo', newTodo);
    setTodo({
      activity: '',
      description: ''
    })
  }
  const deleteTodo = (id) => {
    axios.delete('/delete/' + id);
    alert ('todo deleted');
    console.log(`deleted todo with ${id}`)
  }
  const openUpdate = (id) => {
    setIsPut(true);
    setUpdatedTodo(previousInput => {
      return({
        ...previousInput,
        id: id
      })
    })
  }
  const updateTodo = (id) => {
    axios.put('/put/' + id, updatedTodo);
    alert('todo updated');
    console.log(`item updated with id: ${id}`)
    setUpdatedTodo({
      activity: '',
      description: ''
    })
    setIsPut(false);
  }

  const handleUpdate = (event) => {
    const {name, value} = event.target;
    setUpdatedTodo((previousInput) => {
      return({
        ...previousInput,
        [name] : value
      })
    })
    console.log(updatedTodo)
  }

  return (
    <div>
      {!isPut ? 
      (<div style={{textAlign: 'center'}} >
        <input onChange={handleChange} value={todo.activity} type="text" name="activity" placeholder="activity"></input>
        <input onChange={handleChange} value={todo.description} type="text" name="description" placeholder="description"></input>
        <button onClick={addTodo} >add todo</button>
      </div>) : (
        <div style={{textAlign: 'center'}}>
          <input onChange={handleUpdate} value={updatedTodo.activity} type="text" name="activity" placeholder="activity"></input>
          <input onChange={handleUpdate} value={updatedTodo.description} type="text" name="description" placeholder="description"></input>
          <button onClick={() => updateTodo(updatedTodo.id)} >update todo</button>
        </div>
      )}
      <div style={{paddingBottom: '40px'}} ></div>
      {todos.map((todo) => {
        return (
          <div key={todo._id} style={{border: 'solid black 1px', textAlign: 'center' ,justifyContent:'center'}} >
            <p><span style={{color: 'red'}} >ACTIVITY: </span>{todo.activity}</p>
            <p><span style={{color: 'red'}} >DESCRIPTION: </span>{todo.description}</p>
            <button onClick={() => deleteTodo(todo._id)} >delete</button> 
            <button onClick={() => openUpdate(todo._id)} >update</button> 
        </div>
        )
        
      })}
    </div>
  )
}

export default App
