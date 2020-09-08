import React, { Component } from "react";
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
import "../../Home/style.css";
import classnames from "classnames";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";

import * as BaseService from "../../../BaseService.js";

import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

const Base_URL = "https://jsonplaceholder.typicode.com/";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Client extends Component {
  constructor(props) {
    super(props);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleLarge2 = this.toggleLarge2.bind(this);
    this.state = {
      large: false,
      large2: false,
      fullName: "",
      NIC: "",
      mobileNumber: "",
      fullNameupd: "",
      NICupd: "",
      mobileNumberupd: "",
      persons: [],
      dialCode: "",
      dialCodeupd: "",
      data3: [],
      data4: [],
      pageNumber: 1,
      limit: 10,
      pageCount: null,
      updateId: null,
      mobileupdated:false,
      mobilefinal:"",
      dialfinal:"",
      countrycd:"",
      mobilewithoutupd:""
      //value:[]
    };
  }

  componentDidMount = () => {
    
    this.receivedData(1, 1);
  };

  loading = () => (
    <div>
      <DotLoader css={override} size={150} color={"#03081b"} loading="true" />
    </div>
  );

  receivedData = (e, index) => {
    this.loading();
    console.log("index" + index);
    this.setState(
      {
        pageNumber: index,
        data3: [],
        data4: [],
      },
      () => {
        axios({
          method: "GET",
          url:
            "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/client/getbypage/",
          params: { page: this.state.pageNumber, limit: this.state.limit },
        })
          .then((res) => {
            this.setState({
              data3: res.data.data,
              pageCount: Math.ceil(res.data.count / this.state.limit),
            });

            console.log("length of limit" + this.state.data3.length);

            this.state.data3.map((item) => {
              const values = {
                id: item.id,
                name: item.name,
                nic: item.nic,
                countryCode: item.country_code,
                mobile: item.mobile,
                lastdate: item.last_date,
              };
              console.log("last date" + item.last_date);
              this.setState({
                data4: [values, ...this.state.data4],
              });
            });

            console.log("length of data4" + this.state.data4[1]);
          })
          .catch((err) => console.log(err));
      }
    );
  };

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }


  toggleLarge2() {
    this.setState({
      large2: !this.state.large2,
    });
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.firstName)
  };

  clientsubmitHandler = (event) => {
    event.preventDefault();
    const client = {
      name: this.state.fullName,
      nic: this.state.NIC,
      country_code: "+" + this.state.dialCode,
      mobile: this.state.mobileNumber,
      is_active: "1",
    };

    const url = "/client/save/";
    BaseService.PostService(url, client)
      .then((res) => {
        if (res.data.success === true) {
          alertify.success("Successfully Inserted");
        } else {
          alertify.alert("Cannot perform the operation");
        }
      })
      .catch((err) => {
        alertify.alert("Cannot perform the operation");
      });
  };

  pass=(id,name,nic,mobile,code)=>{
console.log(mobile)
console.log(code)
    this.setState({
      updateId:id,
      fullNameupd:name,
      NICupd:nic,
      mobileNumberupd:code+mobile,
      countrycd:code,
      mobilewithoutupd:mobile
    })

   


  }



  clientUpdateHandler=(event)=>{

    event.preventDefault();

    
    if(this.state.mobileupdated===true)
    {
      this.setState({
        dialfinal:this.state.dialCodeupd,
        mobilefinal:this.state.mobileNumber


      },()=>{
          const client={
          //id:this.state.updateId,
          name: this.state.fullNameupd,
          nic: this.state.NICupd,
          country_code: this.state.dialfinal,
          mobile: this.state.mobilefinal,
        }

        const url = "/client/update/";
        BaseService.UpdateService(url, client,this.state.updateId)
          .then((res) => {
            console.log("response"+res)
            if (res.data.success === true) {
             // this.receivedData(1,1);
              alertify.success("Successfully Updated");
      
              this.setState({
                large2:false
              })
      
            } else {
              alertify.alert("Cannot perform the operation");
            }
          })
          .catch((err) => {
            alertify.alert("Cannot perform the operation");
            console.log("if error"+err);
          });

      });	

    }

    if(this.state.mobileupdated===false){
console.log("visit here")
console.log("value here:"+this.state.countrycd)
      this.setState({
        dialfinal:this.state.countrycd,
        mobilefinal:this.state.mobilewithoutupd
      },()=>{


         const client={
         
          name: this.state.fullNameupd,
          nic: this.state.NICupd,
          country_code: this.state.dialfinal,
          mobile: this.state.mobilefinal,
        }


        const url = "/client/update/";
        BaseService.UpdateService(url, client,this.state.updateId)
          .then((res) => {
            console.log("response"+res)
            if (res.data.success === true) {
              //this.receivedData(1,1);
              alertify.success("Successfully Updated");
      
              this.setState({
                large2:false
              })
      
            } else {
              alertify.alert("Cannot perform the operation");
            }
          })
          .catch((err) => {
            alertify.alert("Cannot perform the operation");
            console.log("if error"+err);
          });
      
    
    
    
    })
      
    }




  }

  render() {
   
    const { pageNumber } = this.state;
    return (
      <Card>
        <CardBody>
          <div className="text-center">
            <Button
              onClick={this.toggleLarge}
              color="dark"
              className="pull-right"
              style={{ marginBottom: 20 }}
            >
              Add Client
            </Button>
          </div>

          <Modal
            isOpen={this.state.large}
            toggle={this.toggleLarge}
            className={"modal-lg " + this.props.className}
          >
            <form onSubmit={this.clientsubmitHandler}>
              <ModalHeader toggle={this.toggleLarge}>Add Client</ModalHeader>
              <ModalBody>
                <Card>
                  <CardBody>
                    <FormGroup>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your First Name"
                        value={this.state.fullName}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="NIC">NIC</Label>
                      <Input
                        type="text"
                        id="NIC"
                        name="NIC"
                        placeholder="Enter NIC"
                        value={this.state.NIC}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="mobileNumber">Mobile Number</Label>
                      <PhoneInput
                        country={"lk"}
                        name="mobileNumber"
                        onChange={(country, value, event) => {
                          this.setState({
                            dialCode: value["dialCode"],
                            Country: value["name"],
                            mobileNumber: country.slice(value.dialCode.length),
                          });
                        }}
                      />
                    </FormGroup>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary">
                  Save
                </Button>
                <Button color="secondary" onClick={this.toggleLarge}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </Modal>

          <Table responsive className="table table-hover hover">
            <thead>
              <tr>
                <i
                  className="fa fa-reorder fa-lg mt-4"
                  style={{ paddingTop: 12 }}
                ></i>
                <th>
                  <i className="fa fa-user-circle-o fa-fw"></i>
                  Full name
                </th>
                <th>
                  <i className="fa fa-id-card fa-fw mt-4"></i>
                  NIC
                </th>
                <th>
                  <i className="fa fa-phone fa-fw"></i>
                  Mobile
                </th>
                <th>
                  <i className="fa fa-calendar fa-fw mt-4"></i>
                  last Date
                </th>
              </tr>
            </thead>

            <tbody>
              {this.state.data4.map((person) => (
                <tr>
                  <i
                    className="fa fa-edit fa-lg mt-4"
                    onClick={() => {
                      this.toggleLarge2();this.pass(
                        person.id,
                        person.name,
                        person.nic,
                        person.mobile,
                        person.countryCode
                      );
                    }}
                  ></i>

                  <td>{person.name}</td>
                  <td>{person.nic}</td>
                  <td>{person.countryCode + person.mobile}</td>
                  {person.lastdate === null ? (
                    <td>No appointments</td>
                  ) : (
                    <td>{person.lastdate}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>


          <Modal
            isOpen={this.state.large2}
            toggle={this.toggleLarge2}
            className={"modal-lg " + this.props.className}
          >
            <form onSubmit={this.clientUpdateHandler}>
              <ModalHeader toggle={this.toggleLarge2}>Edit Client</ModalHeader>
              <ModalBody>
                <Card>
                  <CardBody>
                    <FormGroup>
                      <Label htmlFor="fullNameupd">Full Name</Label>
                      <Input
                        type="text"
                        id="fullNameupd"
                        name="fullNameupd"
                        placeholder="Enter your First Name"
                        value={this.state.fullNameupd}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="NICupd">NIC</Label>
                      <Input
                        type="text"
                        id="NICupd"
                        name="NICupd"
                        placeholder="Enter NIC"
                        value={this.state.NICupd}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="mobileNumberupd">Mobile Number</Label>
                      <PhoneInput
                        country={"lk"}
                        name="mobileNumberupd"
                        value={this.state.mobileNumberupd}
                        onChange={(country, value, event) => {
                          this.setState({
                            mobileupdated:true,
                            dialCodeupd: "+"+value["dialCode"],
                            Country: value["name"],
                            mobileNumber: country.slice(value.dialCode.length),
                          });
                        }}
                      />
                    </FormGroup>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary">
                  Save
                </Button>
                <Button color="secondary" onClick={this.toggleLarge2}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </Modal>
          <Pagination>
            {/* <PaginationItem>
                  <PaginationLink previous tag="button"></PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem> */}

            <PaginationItem disabled={pageNumber <= 1}>
              <PaginationLink
                onClick={(e) => this.receivedData(e, pageNumber - 1)}
                previous
              />
            </PaginationItem>

            {[...Array(this.state.pageCount)].map((page, i) => (
              <PaginationItem active={i === pageNumber - 1} key={i}>
                <PaginationLink onClick={(e) => this.receivedData(e, i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={pageNumber >= this.state.pageCount - 2}>
              <PaginationLink
                onClick={(e) => this.handleClick(e, pageNumber + 1)}
                next
              />
            </PaginationItem>
            {/* 
                <PaginationItem>
                  <PaginationLink tag="button">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next tag="button"></PaginationLink>
                </PaginationItem> */}
          </Pagination>
        </CardBody>
      </Card>
    );
  }
}

export default Client;
