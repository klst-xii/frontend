import React, {useState} from 'react'
import {Navbar, Container, Nav, Form, Button, Offcanvas} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="primary" expand="lg" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Budol.ph</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><i class="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link href="#mycart"><i class="fa-solid fa-cart-shopping"></i> MyCart</Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/signup'>Sign up</Nav.Link>
            <Nav.Link type="button" class="btn btn-info" onClick={handleShow}>Log in</Nav.Link>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
              <Offcanvas.Title>Log in</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                      </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Stay log in" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Log in</Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
        
        </Navbar.Collapse>  
      </Container>
    </Navbar>

    
  )
}

export default Header