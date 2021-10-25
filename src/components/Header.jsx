import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import View from './View'


const Header = () => {
    return (
        <div>
            <View array={[1, 2, 4, 5, 6, 7, 8]} />

            <Navbar bg="light" expand="lg" >
                <Container>

                    <Navbar.Brand href="#home">First React Homework</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;