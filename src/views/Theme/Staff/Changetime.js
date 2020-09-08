import React, { Component } from 'react';
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
    ModalHeader
  } from "reactstrap";

class Changetime extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() { 
        return (  <Modal
            isOpen={this.state.large1}
            toggle={this.props.toggleLarge1}
            className={"modal-lg " + this.props.className}
          >
            <ModalHeader toggle={this.props.toggleLarge1}>
              Add New Staff Member
            </ModalHeader>
            <ModalBody>.
              </ModalBody>
             
              </Modal> );
    }
}
 
export default Changetime;