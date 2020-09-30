import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/todos/Todos';

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

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
       <h1>App</h1>
       <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
