import React, { Component} from 'react';

import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table,
    Button,
    ModalBody,
    ModalHeader,
    Modal,
    ModalFooter,
    FormGroup,
    Input,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
  } from "reactstrap";

class EmployeeDashboard extends Component{

    constructor(props){
        super(props);
        this.state={

            large: false,
        }
    }

    toggleLarge=()=> {
        this.setState({
          large: !this.state.large,
        });
      }

    render(){

        return(
<div>
<Card><CardBody>
    <CardHeader><h4>Employee Details</h4>
    
    <div className="text-right">
        <i className="fa fa-plus-circle fa-lg " onClick={()=>{this.toggleLarge()}}></i>
        </div>
    </CardHeader>
<Table responsive className="table table-hover hover">
            <thead>
              <tr>
                <i
                  className="fa fa-reorder fa-lg mt-4"
                  style={{ paddingTop: 12 }}
                ></i>
                 <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Employee ID
                </th>
                <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Full name
                </th>
                <th>
                  <i className="fa fa-id-card fa-fw mt-4"></i>
                  Email
                </th>
                <th>
                  <i className="fa fa-calendar fa-fw mt-4"></i>
                  Role
                </th>
              </tr>
            </thead>

            <tbody>
             
                <tr>
                  <i
                    className="fa fa-edit fa-lg mt-4"
                    onClick={() => {
                     
                     
                    }}
                  ></i>

                <td>001</td>
                  <td>Nipuni Nadeeshani</td>
                  <td>Nipuni@gmail.com</td>
                  <td>Cashier</td>
                  
                   
                 
                
                </tr>
            
            </tbody>
          </Table>
          </CardBody></Card>



          <Modal
                    isOpen={this.state.large}
                    toggle={this.toggleLarge}
                    className={"modal-lg " + this.props.className}
                  >
              <ModalHeader toggle={this.toggleLarge}>
                      Add Employee
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.submitHandler}>
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

                    <FormGroup tag="fieldset">
                    <p className="text-muted">Gender</p>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          
          <Label check>
            <Input type="radio" name="gender" />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          <Label check>
            <Input type="radio" name="gender" />{' '}
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
                      <Input type="text" placeholder="NIC" name="nic" value={this.state.nic}   onChange={this.onChangeHandler}/>
                      
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
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Address" name="address" value={this.state.address}   onChange={this.onChangeHandler}/>
                      
                    </InputGroup>




                    <FormGroup tag="fieldset">
                    <p className="text-muted">Status</p>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          
          <Label check>
            <Input type="radio" name="status" />{' '}
            Single
          </Label>
        </FormGroup>
        <FormGroup check className="mt-4" style={{paddingLeft:"30px"}}>
          <Label check>
            <Input type="radio" name="status" />{' '}
           Married
          </Label>
        </FormGroup>
        
        </FormGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Basic Salary" name="salary" value={this.state.salary}  onChange={this.onChangeHandler}/>
                      
                    </InputGroup>









                


                 

                    <Button color="success" >Add Employee</Button>

                      </form>
                    </ModalBody>
                  </Modal>
</div>
            );
        }
    }



export default EmployeeDashboard;