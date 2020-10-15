import React from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup,  Form, FormGroup, Label, Input, NavLink, UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const SearchBox = (props) => {

  
  return (
    <div>
      <Row className="justify-content-center m-3 text-center">
          <Col xs="3">
            <Form>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Genre
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/#">Comedy</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/#">Drama</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/#">Horror</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/#">Cheesy Hallmark</NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            </Form>
          </Col>
          <Col xs="3">
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Movies Watched</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="List of movies watched" />
                </FormGroup>
            </Form>
          </Col>
          <Col xs="3">
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Release Year</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Search Year of movie release" />
                </FormGroup>
            </Form>
          </Col>
      </Row>
    </div>
  );
};

export default SearchBox;