import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';
import nbar from './components/layout/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskTable from './components/taskTable/TaskTable';
import AddTaskRow from './components/taskTable/AddTaskRow'
import About from './components/pages/About';


class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10&completed=false')
      .then(res => this.setState({todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
    //
  }

  // Add Task
  addTask = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
    //this.setState({ todos: [...this.state.todos, newTask]})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route path ="/" render={nbar} />
            <Route exact path="/" render={props => (
              <React.Fragment>
                 <TaskTable todos={this.state.todos} toggleComplete={this.toggleComplete} delTask={this.delTask}/>
              <AddTaskRow addTask={this.addTask} />
              </React.Fragment>
            )} />
            <Route path="/about" render={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
