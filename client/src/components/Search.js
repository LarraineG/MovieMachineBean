import React from 'react';
import {Col, Row,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup,  Form, FormGroup, Label, Input
} from 'reactstrap';

const SearchBox = (props) => {



  return (
    <div>
      <Row>
          <Col>
            <Form>
                <FormGroup>
                <Label for="exampleEmail">Search Movie Genres</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
            </Form>
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