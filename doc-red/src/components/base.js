import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/styles.scss';
export default function Base(){
    return(
        <div>
            <div>
            <Navbar expand="lg" fixed="top" className="background">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    > */}
                    <Nav.Link className="color-text" href="#action1">DocRed</Nav.Link>
                    {/* </Nav> */}
                    <Form className="d-flex">
                    <Button className="border-search-icon"> <Icon.Search className="style-icon-search"/></Button>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2 border-search"
                        aria-label="Search"
                    />
                    </Form>
                    <Icon.House className="style-icon-home"/>
                    <NavDropdown title="Inicio" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="text-dropdown" href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item className="text-dropdown" href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider className="text-dropdown" />
                        <NavDropdown.Item className="text-dropdown" href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div className="style-paper">

            </div>

        </div>
    );
}