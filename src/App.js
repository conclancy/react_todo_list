import React from 'react';
import Navbar from './components/layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskTable from './components/taskTable/TaskTable';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash', 
        completed: false
      },
      {
        id: 2,
        title: 'dishes', 
        completed: false
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <Navbar />
        <TaskTable todos={this.state.todos} toggleComplete={this.toggleComplete} delTask={this.delTask}/>
      </div>
    );
  }
}

export default App;
