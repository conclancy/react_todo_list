import React, { Component } from 'react'

export class AddTaskRow extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);    
        this.setState({ title: '' })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            
                <form onSubmit={this.onSubmit} className="form">
                    <div className="container inline-block">
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-auto flex-fill">
                            <input 
                                type="text" 
                                name="title" //referenced by [e.target.name] in onChange func
                                placeholder="Add task" 
                                className="form-control" 
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-1 flex-fill">
                            <input 
                                type="submit" 
                                value="Submit" 
                                className="btn btn-primary float-right"
                            />
                        </div>
                    </div>
                    </div>
                </form>
            
        )
    }
}

export default AddTaskRow
