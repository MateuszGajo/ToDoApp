import React, { Component } from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList'

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="todo">
        <h1 className="center-align">TODO APP</h1>
        <AddTask />
        <TaskList />
      </div >
    );
  }
}

export default App;
