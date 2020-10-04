import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Todos from './components/todos/Todos';
import TaskTable from './components/taskTable/TaskTable'

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

  render() {
    return (
      <div className="App">
       <h1>App</h1>
       <TaskTable todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
