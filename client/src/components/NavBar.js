import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Movies!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Input type="search" name="search" id="search" placeholder="search" />
            </NavItem>
            <NavItem>
              <NavLink href="./UserList">MY LIST</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Recommended By:
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/Larraine">Larraine</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/Calum">Calum</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/Chloe">Chloe</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/Angela">Angela</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/login">login</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;