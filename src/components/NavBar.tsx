import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.png";

export default function NavBar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="py-3 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: "50px", borderRadius: "10px" }}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="px-3 text-white">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="px-3 text-white">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="px-3 text-white">
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="px-3 text-white">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}