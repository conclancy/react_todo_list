import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // Example from https://stackoverflow.com/questions/36209432/reactjs-add-dynamic-class-to-manual-class-names
    // getBadgeClasses() {
    //     let classes = "badge m-2 ";
    //     classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    //     return classes;
    // }

    getClass = () => {
        let classString = 'mh-100';
        classString += this.props.todo.completed ? ' bg-success' : ' bg-secondary';
        return classString;
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div className={this.getClass()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/>
                    {' '}
                    { title }
                    <button type="button" className="float-right btn btn-danger btn-sm">delete</button>
                </p>
            </div>
        )
    }
}

// PropTypes 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
