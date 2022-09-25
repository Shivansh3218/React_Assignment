import "./App.css";
import React, { useState } from "react";
function App() {
  let [todo, settodo] = useState([]);
  let [task, settask] = useState("");
  let addtask = () => {
    if(!task){
      alert("enter a valid task")
    }
    if(task )
    {
      settodo([...todo, task]);  
    }
    
  };
  return (
    <div className="card">
      <h1 className="heading">To-Do-App</h1>
      <input
        className="content"
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => {
          settask(e.target.value)
        }}
      />
      <button onClick={addtask} className="submit">
        Submit
      </button>

      {todo.map((item, index) => (
        <div className="covering">
          <p type="text" id={item} className="input_field" >{item}</p>
          <button
            className="edit"
            onClick={(e) => {
              let int = document.getElementsByClassName("input_field")[0];
                let btn = document.querySelector(".edit");
                if (btn.innerHTML === "Edit") {
                  btn.innerHTML = "Save";
                  int.removeAttribute( "readonly");
                } else if (btn.innerHTML === "Save") {
                  btn.innerHTML = "Edit";
                  int.setAttribute("readonly", "readonly");
              }
            
            }}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={(i) => {
              let int = document.getElementsByClassName("input_field")[0];
              let on=int.innerHTML
              let filteredtask = todo.filter((value) => value !==on);
              settodo([...filteredtask]);
              // const newTodos = [...todo];
              // newTodos.splice(i,1)
              // settodo([newTodos]);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default App;
