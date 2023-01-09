import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">
            <FontAwesomeIcon 
                icon={faPizzaSlice}
                rotation={270}
                className="me-2"
            />
            Platter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/restaurants">Restaurants</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavigationMenu;