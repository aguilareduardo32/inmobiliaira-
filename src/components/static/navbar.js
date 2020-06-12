import React from "react";
import { Link } from "react-router-dom";
import Background from "../../images/yes.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  ListGroup,
  Row,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const navbar = () => {
  return (
    <div className="naav">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          <img className="logo" src={Background} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="Xmr-auto">
            <Nav.Link href="/inmuebles"><p>Inmuebles en venta o renta</p></Nav.Link>
            <Nav.Link href="/informesVenta"><p>Vende o renta tu inmueble</p></Nav.Link>
            <Nav.Link href="/contactoBase"><p>Contacto</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav>
        <Link to="/">
          {" "}
          <img className="logo" src={Background} />
        </Link>
        <ul>
          <li>
            <Link to="/inmuebles">Inmuebles en venta o renta</Link>
          </li>
          <li>
            <Link to="/informesVenta">Vende o renta tu inmueble</Link>
          </li>

          <li>
            <Link to="/contactoBase">Contacto</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default navbar;
