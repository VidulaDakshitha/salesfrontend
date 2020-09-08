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


        }
    }
        render(){

            return(

<div className="animated fadeIn">
    <Card><CardBody>
        <CardTitle><h3>Payment</h3></CardTitle>
                {/* <Table responsive className="table table-hover">
                <thead>
                  <tr>
                  <i className="fa fa-reorder fa-lg mt-4" style={{paddingTop:12}}></i>
                    <th>
                    
                      <i className="fa fa-user-circle-o fa-fw"></i>Invoice Number
                    </th>

                    <th>
                    <i className="fa fa-id-card fa-fw mt-4"></i>
                     Cashier NUmber
                    </th>
                    <th>
                      <i className="fa fa-phone fa-fw"></i>Bill Amount
                    </th>
                    <th>
                      <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                      Date
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
                      <td>Cashier2</td>
                      <td>1500.0</td>
                      <td>
                        Date
                      </td>
                      <td><Button>View Invoice</Button></td>
                    </tr>
                  
                </tbody>
              </Table> */}
              </CardBody></Card>
             </div>
            );
        }
    }



export default Payment;