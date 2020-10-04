import React from 'react';
import {v4 as uuid} from 'uuid';
import Navbar from './components/layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskTable from './components/taskTable/TaskTable';
import AddTaskRow from './components/taskTable/AddTaskRow';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'take out the trash', 
        completed: false
      },
      {
        id: uuid(),
        title: 'dishes', 
        completed: false
      },
      {
        id: uuid(),
        title: 'feed hellen', 
        completed: false
      },
    ]
  }

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  // Delete Todo Task
  delTask = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Task
  addTask = (title) => {
    const newTask = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTask]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
          <TaskTable todos={this.state.todos} toggleComplete={this.toggleComplete} delTask={this.delTask}/>
          <AddTaskRow addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
