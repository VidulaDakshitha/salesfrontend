import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback,FormGroup,Label } from 'reactstrap';
import queryString from 'query-string'
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      token:"",
      userId:"",
      password:"",
      confirmPass:"",
      valid:false,
      invalid:false,
      valid1:false,
      invalid1:false,

    }
  }


  componentDidMount=()=>{
    
     
    
  }

  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

    if(e.target.value.length<7)
    {
      console.log("visited")
      this.setState(
        {
          valid1: false,
          invalid1: true,
        }
      );

    }else{
      console.log("visited 2")
      this.setState(
        {
          invalid1: false,
          valid1: true,
        }
      );

    }
   
  }

  HandlepasswordConfirm=(e)=>{

    if (e.target.value === this.state.password) {
      this.setState(
        {
          valid: true,
          invalid: false,
        }
      );
    } else {
      this.setState(
        {
          invalid: true,
          valid: false,
        }
      );
    }
    // console.log(this.state.malidi);
  
  }

  onSubmitHandler=(e)=>{
e.preventDefault();

const regUsers={
  id:parseInt(this.state.userId),
  password:this.state.password,
  token:this.state.token
}

const url = "/user/update/";
BaseService.PostService(url, regUsers)
  .then((res) => {
    if (res.data.success === true) {
      alertify.success("Successfully Registered");
      window.location.href="/#/login";
    } else {
      alertify.alert("Cannot perform the operation");
    }
  })
  .catch((err) => {
    alertify.alert("Cannot perform the operation");
  });


  }
  
  render() {
    return (

      
      <div className="app flex-row align-items-center" style={{paddingTop:"350px"}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmitHandler}>
                    <h1>Customer Registration</h1>
                    <p className="text-muted">Create your account</p>
                    
            
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="First Name" name="firstname" value={this.state.firstname} autoComplete="new-password"  onChange={this.onChangeHandler}/>
                      
                    </InputGroup>
                    

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="User Name" name="username" value={this.state.username}  onChange={this.onChangeHandler}/>
                      
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="NIC" name="nic" value={this.state.nic}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup>


                    <FormGroup tag="fieldset">
                    <p className="text-muted">Gender</p>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Female
          </Label>
        </FormGroup>
        
        </FormGroup>
        <FormGroup>
        <p className="text-muted">Enter Birthdate</p>
        <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="Date" placeholder="Enter DOB" name="dob" value={this.state.dob}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup></FormGroup>




                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Address" name="address" value={this.state.address}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Contact Number" name="phone" value={this.state.phone}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup>


                    <InputGroup className="mb-3">
                      
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" value={this.state.password} autoComplete="new-password" valid={this.state.valid1} invalid={this.state.invalid1} onChange={this.onChangeHandler}/>
                      <FormFeedback>Password length should be more than 7</FormFeedback>
                    </InputGroup>
                    
                    
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" name="confirmPass" autoComplete="new-password" valid={this.state.valid} invalid={this.state.invalid} onChange={this.HandlepasswordConfirm}/>
                      <FormFeedback>Passwords doesn't match</FormFeedback>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
