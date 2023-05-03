import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping ,faMagnifyingGlass,faBars} from '@fortawesome/free-solid-svg-icons'
import '../../App.css';
function Header() {
  return (
    <>
    <Navbar className="color-navv" fixed="top"  >
        <FontAwesomeIcon icon={faBars} size="lg" style={{marginLeft:30}} />
      <Container>
      {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-cart-shopping" /> */}
      {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}

      <FontAwesomeIcon icon={faCartShopping} size="lg" style={{paddingRight:20}} />
        <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
      <Button style={{marginRight: 5}} variant="outline-dark"> Search</Button>
          </Form>
          <Button style={{marginLeft:5}} variant="outline-dark">Sign In</Button>
      </Container>
    </Navbar>
    </>
  )
}

export default Header