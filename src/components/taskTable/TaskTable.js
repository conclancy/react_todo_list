import React from 'react';
import TaskRow from '././TaskRow';
import PropTypes from 'prop-types';

class TaskTable extends React.Component {
    render() {
        return <table className="table">
            <tr>
                <th>Complete</th>
                <th>Task</th>
                <th></th>
            </tr>
            {
                this.props.todos.map((todo) => (
                    <TaskRow key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete}/>
                ))
            }
        </table>
  }
}

// PropTypes 
TaskTable.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TaskTable;
