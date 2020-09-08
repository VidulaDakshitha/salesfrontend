import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as BaseService from "../../../BaseService.js";
import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
    }
  }
  


  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

  }

  onSubmitHandler=(e)=>{
    e.preventDefault();
    const login={
      username:this.state.username,
      password:this.state.password
    }

//     const url = "/user/varify/";
// BaseService.PostService(url, login)
//   .then((res) => {
//     if (res.data.success === true) {
//       alertify.success("Successfully logged in");
//       localStorage.setItem('AccessToken',res.data.Access_Token);
//       localStorage.setItem('RefreshToken',res.data.Refresh_Token);
//       localStorage.setItem('type',res.data.type);
//       window.location.href="/#/dashboard";
//     } else {
//       alertify.alert("Cannot perform the operation");
//     }
//   })
//   .catch((err) => {
//     alertify.alert("Cannot perform the operation");
//   });

if(this.state.username==="sales" && this.state.password==="sales")
{
  window.location.href="#/salesmanagement"
  localStorage.setItem("user","sales");
}else if(this.state.username==="employee" && this.state.password==="employee"){

  window.location.href="#/employee/employeemanagement"
  localStorage.setItem("user","employee");
  
}else{
  alert("Invalid logins");
}
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmitHandler}>
                      <h1>Login to proceed</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange={this.onChangeHandler} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChangeHandler} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
