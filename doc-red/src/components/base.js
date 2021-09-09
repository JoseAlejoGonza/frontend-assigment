import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import Image from '../components/Image';
import background from '../img/degradado-difuminado-verde_1920x1080_7936.jpg'
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
            <Container fluid>
                <Row md={12}>
                    <Col className="stile-container-col-paper paper-style" md={8}>
                        <Image className="image" src={background}/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, urna non scelerisque tincidunt, ante quam tincidunt leo, id auctor sem odio in risus. Mauris vitae justo consequat quam vehicula aliquam. In vulputate luctus nisl eu commodo. In tincidunt, velit id pharetra congue, erat sapien mattis nisi, vel iaculis odio ex quis odio. Vestibulum at tellus sapien. In ac tempus sem. Morbi at dui vel neque vestibulum feugiat eget vel lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vel sodales risus. Nulla facilisi. Proin pellentesque aliquam dui vitae dapibus.

Integer tincidunt fermentum risus in rhoncus. Donec eget nibh tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet tortor at nibh mollis auctor. Ut auctor quam id odio ornare, a malesuada velit lobortis. Donec vel mi at purus eleifend vestibulum. Morbi in tortor nulla. Suspendisse tortor magna, sodales ac enim eget, eleifend commodo arcu. Donec vitae est sit amet mi bibendum volutpat dignissim quis diam. Maecenas orci nisl, tristique vel sapien ac, tincidunt tincidunt turpis. Phasellus sit amet rutrum felis. Vestibulum vitae tortor eleifend, ullamcorper turpis vel, suscipit est. Nulla congue hendrerit pharetra. Vivamus auctor pulvinar lobortis. Pellentesque vel lacus libero. Integer luctus ipsum ac ante viverra aliquet.</Col>
                    <Col className="stile-container-col-notice paper-style" md ={3}>2 of 2</Col>
                </Row>
            </Container>
            

        </div>
    );
}