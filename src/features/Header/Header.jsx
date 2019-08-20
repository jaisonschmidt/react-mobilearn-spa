import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './Header.module.scss'

export default class Header extends React.Component {
    render(){
        return (
            <Navbar expand="lg" bg="primary" variant="dark">
                <Container>

                    <Navbar.Brand href="#">
                        Mobilearn
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Quem somos</Nav.Link>
                            <Nav.Link href="#pricing">Instrutores</Nav.Link>
                            <Nav.Link href="#pricing">Nossos Cursos</Nav.Link>
                            <Nav.Link href="#pricing">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        )
    }
}