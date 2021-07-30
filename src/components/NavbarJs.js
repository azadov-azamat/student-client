import React from "react";
import {Button, Collapse, Nav, Navbar, NavbarBrand} from "reactstrap";

export default function NavbarJs(){
    return(
        <div>
            <Navbar>
                <NavbarBrand href="/">STUDENTS</NavbarBrand>
                    <Nav>
                        <Button  color="primary">Your Account</Button>
                    </Nav>
            </Navbar>
        </div>
    )
}
