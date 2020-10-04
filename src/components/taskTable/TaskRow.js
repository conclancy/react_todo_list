import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TaskItem extends Component {

    // Sets the BS class based on task completion status
    getClass = () => {
        let classString = 'mh-100';
        classString += this.props.todo.completed ? ' bg-success' : ' bg-secondary';
        return classString;
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <tr className={this.getClass()}>
                <td><input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/></td>
                <td>{ title }</td>
                <td><button type="button" className="float-right btn btn-danger btn-sm">delete</button></td>
            </tr>
            // <div className={this.getClass()}>
            //     <p>
            //         <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
            //         {' '}
            //         { title }
            //         <button type="button" className="float-right btn btn-danger btn-sm">delete</button>
            //     </p>
            // </div>
        )
    }
}

// PropTypes 
TaskItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TaskItem
