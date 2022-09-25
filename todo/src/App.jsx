import "./App.css";
import React ,{useState} from "react";
function App(){

  let [todo,settodo]= useState([])
  let [task,settask]= useState("")
  let addtask = ()=>{
    settodo([...todo,task])
  }
return(
  <>
  <input type="text" value={task} onChange={(e)=>{
   settask( e.target.value)
  }} name="" id="" />
  <button onClick={addtask}>Submit</button>
  
  {
    todo.forEach(i=>{
      <h1>{i}</h1>
    })
  }
  </>
)

}



  

export default App;
