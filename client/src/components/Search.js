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
              <DropdownItem>Cult Classics</DropdownItem>
              <DropdownItem>Kids</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Movies Watched</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Release Year</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;