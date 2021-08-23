import React from 'react'
import {Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navmenu() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Coupon</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Brands</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search Coupon"
        className=""
        aria-label="Search"
      />
      <Button variant="outline-success " className="ms-1">Search </Button>
    </Form>
    </Container>
  </Navbar>
 
      </>
        
    )
}

export default Navmenu
