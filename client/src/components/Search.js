import React, { useState } from 'react';
import {
  Col, Row, Form, FormGroup, Label, Input, DropdownToggle, Dropdown, DropdownMenu, DropdownItem 
} from 'reactstrap';

const SearchBox = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Row>
        <Col>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              Genre
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Comedy</DropdownItem>
              <DropdownItem>Drama</DropdownItem>
              <DropdownItem>Horror</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Romance</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              What have you seen?
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Watched</DropdownItem>
                <DropdownItem>Unwatched</DropdownItem>
              </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;