import React, { Component } from "react";

import {
  Button,
  Col,
  Row,
  CardBody,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Jumbotron,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Container,
} from "reactstrap";
import Scissor from "../../../assets/Scissor.png";

class EditService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
      console.log("rendered")
    return (
      <Modal
        isOpen={this.props.modelLarge}
        toggle={this.props.toggleModel}
        className={"modal-lg " + this.props.className}
      >
        {/*table model*/}
        <ModalHeader toggle={this.props.toggleModel}>Edit Service</ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" sm="6">
              <Card style={{ border: "transparent" }}>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="company">Service Name</Label>
                    <Input
                      type="text"
                      id="company"
                      placeholder="Enter service name"
                    />
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">catergory</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select Catergory</option>
                   
                      </Input>
                    </Col>
                  </FormGroup>
                  <hr />
                  <Jumbotron fluid>
                    <p
                      style={{
                        color: "grey",
                        textDecoration: "italic",
                        paddingTop: -200,
                      }}
                    >
                      Select stylists performing the services
                    </p>
                    <hr />
                    <Container fluid>
                      <FormGroup row className="my-0">
                        <Col xs="6">
                          <FormGroup row>
                            <Label htmlFor="select" style={{ marginLeft: 10 }}>
                              catergory
                            </Label>

                            <Input
                              type="select"
                              name="select"
                              id="select"
                              style={{ marginLeft: 10 }}
                            >
                              <option value="0">Select Time</option>

                              <option value="1">15 min</option>
                              <option value="1">30 min</option>
                              <option value="1">45 min</option>
                              <option value="1">1 hr</option>
                              <option value="1">1 hr 15 min</option>
                              <option value="1">1 hr 30 min</option>
                              <option value="1">1 hr 45 min</option>
                              <option value="1">2 hr</option>
                            </Input>

                            <hr />
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup>
                            <Label htmlFor="lastName">Price</Label>
                            <Input
                              type="number"
                              id="lastName"
                              placeholder="LKR"
                            />
                          </FormGroup>
                        </Col>
                      </FormGroup>
                      <FormGroup row className="my-0">
                        <Col xs="6">
                          <FormGroup>
                            <Label htmlFor="city">Cost</Label>
                            <Input type="number" id="city" placeholder="LKR" />
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup>
                            <Label htmlFor="lastName">Price Name</Label>

                            <Input
                              type="text"
                              id="lastName"
                              placeholder="Enter Last Name"
                            />
                            <FormText color="muted">This is optional</FormText>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </Container>
                  </Jumbotron>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6">
              <Card style={{ border: "transparent" }}>
                <CardBody>
              
                  <img src={Scissor} alt="img" style={{ paddingTop: 50 }} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggleLarge}>
            Delete
          </Button>{" "}
          <Button color="success" onClick={this.toggleLarge}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default EditService;
