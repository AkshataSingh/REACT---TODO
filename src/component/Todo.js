import React, { useState } from 'react'
import Work from './Work'
const Todo = (props) => {
  const [add,setAdd] = useState([])
  const [text,setText] = useState("")
  const Add_task = ()=>{
    setAdd((newtask)=>{
      return [...newtask,text]
    })
    setText("")
  }

const deleteTodo =(id)=>{

  setAdd((newtask)=>{
    return newtask.filter((elem,index)=>{
      return id!==index
    })
  })
}

const handleonchange = (event)=>{
    setText(event.target.value)
}
const handleonaddtask = (event) =>{
  setAdd(event.target.value)
}
  return (
    <div className='row justify-content-center'>
          <div className="col-md-8 akshata">
                <textarea className="ayushman" value={text} placeholder={"Add a todo item"} onChange={handleonchange} style={{backgroundColor: props.mode==="light" ? "white" : "#3b3769", color: props.mode==="light" ? "#110c4e" : "white"}}></textarea>

                <button className=' ayush btn btn-primary' id='Add' onChange={handleonaddtask} onClick={Add_task}>Add task</button>
          </div>
    <div>
      <div className="col-md-8" style={{"marginLeft":"212px"}}>
          <button className="btn btn-dark" type="button" style = {{"margin" : "5px" , "padding" : "10px" , "width" : "190px"}}>Completed Tasks</button>
          <button className="btn btn-dark" type="button" style = {{"margin" : "5px" , "padding" : "10px" , "width" : "190px"}}>Pending tasks</button>
      </div>
    </div>
    {/* console.log(add) */}
    <div className='row my-3'>
      {
        add.map((elem,index)=>
        {
          return <Work key={index} id={index} val={elem} onselect={deleteTodo}/>
        })
        }
    </div>

  </div>
  )
}

export default Todo