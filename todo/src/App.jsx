import "./App.css";
import React, { useState } from "react";
function App() {
  let [todo, settodo] = useState([]);
  let [task, settask] = useState("");
  let addtask = () => {
    if(!task){
      alert("enter a valid task")
    }
    if(task)
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
          settask(e.target.value);
        }}
      />
      <button onClick={addtask} className="submit">
        Submit
      </button>

      {todo.map((item, index) => (
        <div className="covering">
          <input type="text" className="input_field" value={item} />
          <button
            className="edit"
            onClick={() => {
              let int = document.getElementsByClassName("input_field")[0];
              console.log(int);
              let btn = document.querySelector(".edit");
              if (btn.innerHTML === "Edit") {
                btn.innerHTML = "Save";
                int.removeAttribute("readonly", "readonly");
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
            onClick={() => {
              let filteredtask = todo.filter((value) => value !== task);
              settodo([...filteredtask]);
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
