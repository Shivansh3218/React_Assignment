import "./App.css";
import React ,{useState} from "react";
function App(){

  let [todo,settodo]= useState([])
  let [task,settask]= useState("")
  let addtask = ()=>{
    settodo([...todo,task])
    task=""
  }
return(
  < div className="card">
    <h1 className="heading">To-Do-App</h1>
  <input className="content" type="text" value={task}onChange={(e)=>{
   settask( e.target.value)
  }}/>
  <button onClick={addtask} className = "submit">Submit</button>
  
  {
   todo.map((item, index)=><div className="covering">
    <input type="text" className="content" value={item}/>
    <button className="edit">edit</button>
    <button 
    className="delete"
    onClick={()=>{
    let filteredtask = todo.filter((value)=>value!==task);
    settodo([...filteredtask])
    }}
    >delete</button>
   </div>)
  }
  </div>
)

}
export default App;
