import React from 'react';
import TaskRow from '././TaskRow';
import PropTypes from 'prop-types';

class TaskTable extends React.Component {
    render() {
        return <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Complete</th>
                    <th scope="col">Task</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.todos.map((todo) => (
                        <TaskRow key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTask={this.props.delTask}/>
                    ))
                }
            </tbody>
        </table>
  }
}

// PropTypes 
TaskTable.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TaskTable;
