import React, { Component } from "react";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
import axios from "axios";

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
} from "reactstrap";
import {
  Button,
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
import AddService from "./AddService";
import EditServices from "./EditService";


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serv: [
        {
          id: 1,
          service: "hair cut",
          time: "1h 30min",
          price: "LKR500",
          catergory: "Hair",
        },
        {
          id: 2,
          service: "Facial Hair Trim",
          time: "1h 30min",
          price: "LKR500",
          catergory: "Face",
        },
        {
          id: 3,
          service: "Beard Trim",
          time: "1h 30min",
          price: "LKR500",
          catergory: "Beard",
        },
      ],
      large: false,
      large1: false,
      dropdownOpen: new Array(6).fill(false),
      showComponent: false,
      serviceName: "",
      servCatergory: "",
      price: "",
      cost: "",
      time: "",
      data:[],
      data2:[],
      data3:[],
      data4:[],
      pageNumber:1,
      limit:10,
      pageCount:null,
      updateId:null,
      loading:true,
    };
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleLarge1 = this.toggleLarge1.bind(this);
    this.toggle = this.toggle.bind(this);
    this.pass = this.pass.bind(this);
  }


  componentWillMount = () => {
    axios({
      method: "GET",
      url:
        "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/category/get/",
    })
      .then((res) => {
        this.setState({
          data: res.data.data,
        });

        //console.log("length " + this.state.data.length);

        this.state.data.map((item) => {
          const values = {
            id: item.id,
            name: item.name,
          };
          this.setState({
            data2: [values,...this.state.data2],
          });
        });
       // console.log(this.state.data2);
      })
      .catch((err) => console.log(err));

      this.receivedData(1,1);

this.loaderService();
   
  };


  receivedData=(e,index)=>{
    

    console.log("index"+index)
    this.setState({
      pageNumber:index,
      data3:[],
      data4:[]
    },()=>{

    axios({
      method: "GET",
      url:
        "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/service/getbypage/",
        params:{page:this.state.pageNumber,limit:this.state.limit}
    })
      .then((res) => {
        this.setState({
          data3: res.data.data,
          pageCount:Math.ceil(res.data.count / this.state.limit),

          
        });
        this.loaderService();
        console.log("length of limit" + this.state.data3.length);

        this.state.data3.map((item) => {

          const index1=this.state.data2.findIndex((res)=>{
            
            return res.name===item.category
            
        });

          const values = {
            id: item.id,
            name: item.name,
            price:item.price,
            time:item.time,
            category:this.state.data2[index1],
            cost:item.cost,
            slots:item.time/45
          };
          this.setState({
            data4: [values,...this.state.data4],
          });
        });
        
        console.log("length of data4"+this.state.data4.length);
      })
      .catch((err) => console.log(err));
    })

  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleLarge1() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  pass = (servvalue,catvalue,price,cost,time1,id) => {
    this.setState({
      serviceName:servvalue,
      servCatergory: catvalue,
      price: price,
      cost: cost,
      time: time1,
      updateId:id

    })
  };

  OnChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })
  }

  loaderService=()=>{
    return (
      <div >
      {/* <BounceLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading={this.state.loading}
        
      /> */}
    </div>
    );
  }


  updateServiceHandler=(e)=>{

    e.preventDefault();
    const Updateservice = {
      name: this.state.serviceName,
      price: this.state.price,
      cost: this.state.cost,
      
      category_id: parseInt(this.state.servCatergory),
      slots: parseInt(this.state.time),
    };


  const url = "/service/update/";
  BaseService.UpdateService(url, Updateservice,this.state.updateId)
    .then((res) => {
      console.log("response"+res)
      if (res.data.success === true) {
       // this.receivedData(1,1);
        alertify.success("Successfully Updated");
this.loaderService();
        this.setState({
          large:false
        })

      } else {
        alertify.alert("Cannot perform the operation");
      }
    })
    .catch((err) => {
      alertify.alert("Cannot perform the operation");
      console.log("if error"+err);
    });
}

  render() {

    const {pageNumber}=this.state;
    return (
      <Col>
        <Card>
          <CardBody>
            <div className="text-center">
              {/* <Button onClick={this.toggleLarge} color="dark" className="pull-right" style={{marginBottom:20}}>Add Staff</Button> */}
              {/* <Dropdown
                color="dark"
                className="pull-right"
                isOpen={this.state.dropdownOpen[0]}
                toggle={() => {
                  this.toggle(0);
                }}
              >
                <DropdownToggle caret color="dark">
                  Add New
                </DropdownToggle>
                <DropdownMenu>
                 
                  <DropdownItem onClick={this.pass}>New service</DropdownItem>
                  
                  <DropdownItem>Add catergory</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}


              <AddService />
            </div>

            <Table responsive striped className="table-hover">
              <thead>
                <tr>
                  <i className="fa fa-reorder fa-lg mt-4"></i>
                  <th>Service Type</th>
                  <th>Average time</th>
                  <th>Price</th>
                </tr>
              </thead>
              {this.state.data4.map((item) => (
                <tbody>
                  <tr>
                    <i
                      className="fa fa-edit fa-lg mt-4"
                      onClick={()=>{this.toggleLarge();this.pass(item.name,item.category['id'],item.price,item.cost,item.slots,item.id)}}
                    ></i>
                    <td>{item.name}</td>
                    <td>{item.time} min</td>
                    <td>{item.price}</td>
                    {/* <button onClick={this.toggleLarge}>click</button> */}
                  </tr>


                  <Modal
                    isOpen={this.state.large}
                    toggle={this.toggleLarge}
                    className={"modal-lg " + this.props.className}
                  >
                    {/*table model*/}
                  
          <form onSubmit={this.updateServiceHandler}>
            <ModalHeader toggle={this.toggleLarge}>Edit Service</ModalHeader>
            <ModalBody>
              <Row>
                <Col xs="12" sm="6">
                  <Card style={{ border: "transparent" }}>
                    <CardBody>
                      <FormGroup>
                        <Label htmlFor="serviceName">Service Name</Label>
                        <Input
                          type="text"
                          id="serviceName"
                          name="serviceName"
                          value={this.state.serviceName}
                          placeholder="Enter service name"
                          onChange={this.OnChangeHandler}
                        />
                      </FormGroup>

                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="select">catergory</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="select"
                            name="servCatergory"
                            id="servCatergory"
                            value={this.state.servCatergory}
                            onChange={this.OnChangeHandler}
                          >
                            <option value="0">Select Catergory</option>
                            {this.state.data2.map((item1) => (
                              <option value={item1.id}>{item1.name}</option>
                            ))}
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
                          Add catergory and time
                        </p>
                        <hr />
                        <Container fluid>
                          <FormGroup row className="my-0">
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="city">Cost</Label>
                                <Input
                                  style={{ marginLeft: 10 }}
                                  type="number"
                                  id="cost"
                                  name="cost"
                                  placeholder="LKR"
                                  value={this.state.cost}
                                  onChange={this.OnChangeHandler}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="lastName">Price</Label>
                                <Input
                                  type="number"
                                  id="price"
                                  name="price"
                                  value={this.state.price}
                                  onChange={this.OnChangeHandler}
                                  placeholder="LKR"
                                />
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          <FormGroup row className="my-0">
                            <Label htmlFor="select" style={{ marginLeft: 10 }}>
                              Time
                            </Label>

                            <Input
                              type="select"
                              name="time"
                              id="time"
                              value={this.state.time}
                              style={{ marginLeft: 10 }}
                              onChange={this.OnChangeHandler}
                            >
                              <option value="">Select Time</option>

                              <option value="1">Slots 1</option>
                              <option value="2">Slots 2</option>
                              <option value="3">Slots 3</option>
                              <option value="4">Slots 4</option>
                              <option value="5">Slots 5</option>
                              <option value="6">Slots 6</option>
                            </Input>
                          </FormGroup>
                        </Container>
                      </Jumbotron>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs="12" sm="6">
                  <Card style={{ border: "transparent" }}>
                    <CardBody>
                      {/* <p
                      style={{
                        color: "grey",
                        textDecoration: "italic",
                      }}
                    >
                      Select stylists performing the services
                    </p>
                    <hr />
                    <FormGroup row>
                      <Col md="3">
                        <Label>Select Stylists</Label>
                      </Col>
                      <Col md="9">
                        <FormGroup check className="checkbox">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox1"
                            name="checkbox1"
                            value="option1"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="checkbox1"
                          >
                            Vidula
                          </Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox2"
                            name="checkbox2"
                            value="option2"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="checkbox2"
                          >
                            Dinal
                          </Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox3"
                            name="checkbox3"
                            value="option3"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="checkbox3"
                          >
                            Amila
                          </Label>
                        </FormGroup>
                        <FormGroup check className="checkbox">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="checkbox3"
                            name="checkbox3"
                            value="option3"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="checkbox3"
                          >
                            Piumi
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup> */}
                      <img src={Scissor} alt="img" style={{ paddingTop: 50 }} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggleLarge}>
                Cancel
              </Button>{" "}
              <Button type="submit" color="success">
                Update
              </Button>
            </ModalFooter>
          </form>
                  </Modal>
                </tbody>
              ))}
            </Table>
            <Pagination>
              {/* <PaginationItem disabled>
                <PaginationLink previous tag="button">
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button" value="1">1</PaginationLink>
              </PaginationItem> */}
  <PaginationItem disabled={pageNumber <= 1}>
              
              <PaginationLink
                onClick={e => this.receivedData(e, pageNumber - 1)}
                previous
                
              />
              
            </PaginationItem>

              {[...Array(this.state.pageCount)].map((page, i) => 
              <PaginationItem active={i === pageNumber-1} key={i}>
                <PaginationLink onClick={e => this.receivedData(e, i+1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}


<PaginationItem disabled={pageNumber >= this.state.pageCount - 2}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, pageNumber + 1)}
                next
               
              />
              
            </PaginationItem>

              {/* <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button">
                  Next
                </PaginationLink>
              </PaginationItem> */}
            </Pagination>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Services;
