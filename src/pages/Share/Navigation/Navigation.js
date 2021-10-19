import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar
                bg="dark"
                variant="dark"
                sticky="top"
                collapseOnSelect
                expand="lg"
            >
                <Container>
                    <Navbar.Brand className="fs-1">
                        Well Pharma <i className="fas fa-pills"></i>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-4">
                        <ul className="d-flex mb-0">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/service">Service</Link>
                            </li>
                            <li>
                                <Link to="/skill">Skill</Link>
                            </li>
                        </ul>
                        {user?.email ? (
                            <Button
                                onClick={logOut}
                                variant="light"
                                className="m-3"
                            >
                                Log out
                            </Button>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}
                        <Navbar.Text>
                            Signed in as:{" "}
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
