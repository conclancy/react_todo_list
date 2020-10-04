import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

export default function nbar() {
    // todo: this probably needs to move to index.js for proper navbar functionality
    return (
        <Navbar variant="light" bg="light">
            <Navbar.Brand href="/">Todo List</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
        
    )
}
