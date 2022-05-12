import React from 'react'
import './navbar.css'
import img from '../../Assets/images/logo.png'
import { Navbar,Nav,Container } from 'react-bootstrap'
export default function NavbarSection() {
  return (
  <Navbar bg="light" expand="lg">
   <Container >
    <Navbar.Brand href="#">
        <img className='logo' src={img} alt=''/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="nav">
        <Nav.Link href="#action0">Home</Nav.Link>
        <Nav.Link href="#action1">About</Nav.Link>
        <Nav.Link href="#action2">Service</Nav.Link>
        <Nav.Link href="#action3">Pages</Nav.Link>
        <Nav.Link href="#action4">Blog</Nav.Link>
        <Nav.Link href="#action5">Contact</Nav.Link>
   
      </Nav>
      <i className="fas fa-search"></i>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
  )
}
