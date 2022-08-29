import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="#fef2f2" expand="lg" style={{fontFamily: 'Inter', background: '#fef2f2'}}> 
            <Container>
                <Navbar.Brand style={{fontFamily: 'Inter', color: '#286f6d', fontWeight: '600'}} href="#/">Home</Navbar.Brand>
                <Navbar.Toggle style={{fontFamily: 'Inter'}} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{fontFamily: 'Inter'}} className="me-auto">
                        <Nav.Link  href="#aboutMe">Acerca de mí</Nav.Link>
                        <Nav.Link href="#myAbilities">Mis habilidades</Nav.Link>
                        <Nav.Link href="#experience">Experiencia</Nav.Link>
                        <Nav.Link href="#portfolio">Portafolio</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;