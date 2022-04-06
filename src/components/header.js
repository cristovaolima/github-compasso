import React from 'react';
import { 
        Navbar,
        NavbarBrand,
        Collapse,
        Nav,
        NavItem,
        NavLink
} from 'reactstrap';

export default function NavbarSite() {
  return (
    <div>
      <Navbar color="primary" expand="md" dark>
        <NavbarBrand href="/">Github Compasso</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}