import React, { Component} from 'react';


import {
    Badge,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "reactstrap";
  import {
    Card,
    CardBody,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    CardTitle,
  } from "reactstrap";
  import {
    CardFooter,
    CardHeader,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
  } from "reactstrap";



class Payment extends Component{

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

<div className="animated fadeIn">
    <Card><CardBody>
        <CardTitle>
           
                           <h3>Overhead Expense</h3>

        <div className="text-right">
        <i className="fa fa-plus-circle fa-lg " onClick={()=>{this.toggleLarge()}}></i>
        </div>
        </CardTitle>
                <Table responsive className="table table-hover">
                <thead>
                  <tr>
                  <i className="fa fa-reorder fa-lg mt-4" style={{paddingTop:12}}></i>
                    <th>
                    
                      <i className="fa fa-user-circle-o fa-fw"></i>Expense ID
                    </th>

                    <th>
                    <i className="fa fa-id-card fa-fw mt-4"></i>
                     Expense
                    </th>
                    <th>
                      <i className="fa fa-phone fa-fw"></i>Amount
                    </th>
                    <th>
                      <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                     Payment Mode
                    </th>
                    <th>
                      <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                     Date
                    </th>
                    <th>
                      <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                     Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr >
                        <i
                      className="fa fa-edit fa-lg mt-4"
                      onClick={()=>{}}
                    ></i>
                      <td>001</td>
                      <td>Rent</td>
                      <td>10000.0</td>
                      <td>
                        Checque
                      </td>
                      <td>
                        2020-10-01
                      </td>
                      <td><Button>View Details</Button></td>
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
                      Add Overhead Expense
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.submitHandler}>
                        <Row>
                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                                <FormGroup>
                                  <Label htmlFor="firstName">Expense</Label>
                                  <Input
                                    type="text"
                                    id="Expense"
                                    name="Expense"
                                    placeholder="Enter Expense"
                                    value={this.state.Expense}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="mobileNumber">
                                    Amount
                                  </Label>
                                  <Input
                                    type="Number"
                                    id="Amount"
                                    name="Amount"
                                    placeholder="Enter Amount"
                                    value={this.state.Amount}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                               
                              </CardBody>
                            </Card>
                          </Col>

                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                       
                                <FormGroup>
                                  <Label htmlFor="street">Date</Label>
                                  <Input
                                    type="Date"
                                    id="Date"
                                    name="Date"
                                    placeholder="Add Date"
                                    value={this.state.Date}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="street">Payment Mode</Label>
                                  <Input
                                    type="select"
                                    id="mode"
                                    name="mode"
                                    
                                    
                                    onChange={this.changeHandler}
                                  >
                                      <option value="0">Select Catergory</option>
                            
                              <option value="1">Cheque</option>
                              <option value="2">Cash</option>
                              <option value="2">Bank</option>
                        
                                  </Input>
                                </FormGroup>

                         

                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                        <Button
                          type="submit"
                          color="primary"
                          className="pull-right"
                        >
                          Save
                        </Button>
                      </form>
                    </ModalBody>
                  </Modal>
             </div>
            );
        }
    }



export default Payment;