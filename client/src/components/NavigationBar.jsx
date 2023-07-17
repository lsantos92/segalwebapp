import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as Icon from "react-bootstrap-icons"

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom p-2">
            <Container>
                <Navbar.Brand href="/">SEGAL DATA CENTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link className="text-decoration-none text-white p-2" to="/">
                            <Icon.HouseFill className='mb-1 mx-1' />
                            Home
                        </Link>
                        <NavDropdown
                            className="text-decoration-none text-white"
                            title={
                                <span className="text-decoration-none text-white">
                                    <Icon.InfoCircleFill className='mb-1 mx-1' />
                                    Projects
                                </span>
                            }
                        >
                            <NavDropdown.Item href="/grc">GRC</NavDropdown.Item>
                            <NavDropdown.Item href="*">EPOS</NavDropdown.Item>
                            <NavDropdown.Item href="*">GEMOP</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            className="text-decoration-none text-white"
                            title={
                                <span className="text-decoration-none text-white">
                                    <Icon.Database className='mb-1 mx-1' />
                                    Data & Products
                                </span>
                            }
                        >
                            <NavDropdown.Item href="*">Archive Acess</NavDropdown.Item>
                            <NavDropdown.Item href="/filebrowser">
                                File Browser
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/rinex">Rinex Search</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="*">Station List</NavDropdown.Item>
                            <NavDropdown.Item href="*">Stream List</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/holdings">Holdings</NavDropdown.Item>
                            <NavDropdown.Item href="*">Status and Errors</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="text-decoration-none text-white p-2" to="/links">
                            <Icon.Link45deg className='mb-1 mx-1' />
                            Links
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default NavigationBar;