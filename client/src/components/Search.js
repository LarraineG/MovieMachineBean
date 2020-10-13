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
      <Row>
          <Col>
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
          <Col>
            <Form>
<<<<<<< HEAD
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
=======
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                What have you seen:
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="/#">Watched!</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/#">Unwatched!</NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
            </Form>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
>>>>>>> f99bf7add29dca88a4e8631fe8a581cff7c14307
          </Col>
      </Row>
    </div>
  );
};

export default SearchBox;