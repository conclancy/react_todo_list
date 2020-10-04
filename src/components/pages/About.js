import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function About() {
    return (
        <div>
            <Jumbotron>
                <h1 className="text-center">About</h1>
            </Jumbotron>
            <p className="text-center">This is the TodoList app v1.0.0</p>        
        </div>
    )
}
