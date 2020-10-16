
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
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { user } = useAuth0();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">The Big Screen Bean Machine!</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <Input type="search" name="search" id="search" placeholder="search" />
            </NavItem> */}
            <NavItem>
              <NavLink><Link to="/My_List">MY LIST</Link></NavLink>
            </NavItem>
            <NavItem>
              <form onSubmit={props.onSubmit}>
              <input onChange={props.onChange}
                value={props.searchInput}
                name="search"
                placeholder="Search Movie Title"/>
                <button type="submit">Search</button>
              </form>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Recommended By:
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink><Link to="/Admin">Admin</Link></NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <p>{user ? "Hello, " + user.given_name: "" }</p>
          <LoginButton />
          <LogoutButton />
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;