import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {
  const initialArray = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((val,i)=>{
      return i!==index;
    })
    console.log(filteredTasks);
    setTasks(filteredTasks);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks,{title, description}])
    setTitle("");
    setDescription("");
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="Description" 
          value={description }
          onChange={e => setDescription(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      {tasks.map((item,index) => (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  )
}

export default Home