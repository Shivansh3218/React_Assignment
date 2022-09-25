import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
    };
  }
  change = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };
  createtodo = () => {
      <div>{
        <input type="text" value={this.state.todo} id="" />
        }</div>
  };
  render() {
    return (
      <>
        <div>
          <input type="text" onChange={this.change} />
          <button onClick={this.createtodo}>create to do</button>
        </div>
      </>
    );
  }
}

export default App;
