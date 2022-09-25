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
   todo.map(item=><div>
    <h1 className="content" >{item}</h1>
    <button>edit</button>
    <button 
    onClick={()=>{
    let filteredtask = todo.filter((value)=>value!==task);
    settodo([...filteredtask])
    }}
    >delete</button>
   </div>)
  }
  </>
)

}
export default App;
