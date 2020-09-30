import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getClass = () =>{
        return {
            className= this.props.todo.completed ? 'bg-success' : 'bg-secondary'
        }
    }

    render() {
        return (
            <div {...this.getClass()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem
