import React, { Component } from "react";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



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
//import classnames from 'classnames';
import Changetime from "./Changetime";
import * as BaseService from "../../../BaseService.js";
import axios from "axios";


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
      date: "",
      date2: "",
      date3: "",
      date4: "",
      date5: "",
      date6: "",
      date7: "",
      number: 10,
      large: false,
      large1: false,
      large2: false,
      large3: false,
      activeTab: new Array(4).fill("1"),
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      type: "",
      fullname: "",
      mobileNumber: "",
      address1: "",
      address2: "",
      city: "",
      fullnameupd: "",
      mobileNumberupd: "",
      address1upd: "",
      address2upd: "",
      cityupd: "",
      Nicupd: "",
      codewithoutupd:"",
      countrywithoutupd:"",
      mobilewithoutupd:"",
      mobileisUpdated:false,
      dialCodeupd:"",
      dialcodefinal:"",
      mobilefinal:"",
      countryfinal:"",
      option: "",
      Nic: "",
      dialCode: "",
      Country: "",
      hooks: false,
      size: [],
      value: [],
      data3: [],
      data4: [],
      data5:[],
      data6:[],
      data7:[],
      data8:[],
      pageNumber: 1,
      limit: 10,
      pageCount: null,
      updateId: null,
      loading: true,
      data: [
        {
          rank: 1,
          name: "Vidula",
          num1: "08.00-5.00",
          num2: "09.00-5.00",
          num3: "08.00-5.00",
          num4: "08.00-5.00",
          num5: "08.00-5.00",
          num6: "08.00-5.00",
          num7: "08.00-5.00",
        },
        {
          rank: 2,
          name: "Dinal",
          num1: "10.00-5.00",
          num2: "09.00-5.00",
          num3: "08.00-5.00",
          num4: "08.00-5.00",
          num5: "08.00-5.00",
          num6: "08.00-5.00",
          num7: "08.00-5.00",
        },
        {
          rank: 3,
          name: "Amila",
          num1: "08.00-5.00",
          num2: "09.00-5.00",
          num3: "08.00-5.00",
          num4: "08.00-5.00",
          num5: "08.00-5.00",
          num6: "08.00-5.00",
          num7: "08.00-5.00",
        },
      ],

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
    };

    //this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleLarge1 = this.toggleLarge1.bind(this);
    this.toggleLarge2 = this.toggleLarge2.bind(this);
    this.toggleLarge3 = this.toggleLarge3.bind(this);
    this.combine = this.combine.bind(this);
    this.staffWork = this.staffWork.bind(this);
    this.toggle1 = this.toggle1.bind(this);

    this.getDays = this.getDays.bind(this);
  }

  submitHandler = (event) => {
    event.preventDefault();

    // for (var j = 0; j < this.state.size.length + 1; j++) {
    //   if (this.state.size[j] !== "false") {
    //     this.state.value.push(this.state.size[j]);
    //   }
    // }

    const staff = {
      name: this.state.fullname,
      nic: this.state.Nic,
      address_line1: this.state.address1,
      address_line2: this.state.address2,
      city: this.state.city,
      country: this.state.Country,
      country_code: "+" + this.state.dialCode,
      mobile: this.state.mobileNumber,
      is_active: "1",
    };

    const url = "/employee/save/";
    BaseService.PostService(url, staff)
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

  SystemUserSubmitHandler = (event) => {
    event.preventDefault();

    const users = {
      username: this.state.username,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      type: this.state.type,
    };

    const url = "/user/save/";
    BaseService.PostService(url, users)
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

  setSize = (e) => {
    var temp = this.state.size;

    if (this.state.size[e.target.value] === "false") {
      temp[e.target.value] = e.target.name;
    } else {
      temp[e.target.value] = "false";
    }
    this.setState(
      {
        size: temp,
      },
      console.log(this.state.size)
    );
  };

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }
  toggleLarge1() {
    this.setState({
      large1: !this.state.large1,
    });
  }

  toggleLarge2() {
    this.setState({
      large2: !this.state.large2,
    });
  }


  toggleLarge3() {
    this.setState({
      large3: !this.state.large3,
    });
  }

  handleOnChange1 = (value, data, event) => {
    console.log(value);
    console.log(data);
    console.log("Hi");
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.firstName)
  };

  staffWork(value) {
    return (
      <div>
        <Button size="sm" color="ghost-success" onClick={this.toggleLarge1}>
          {value}
        </Button>
        <Modal isOpen={this.state.large1} toggle={this.toggleLarge1}>
          <ModalHeader>Add New Staff Member</ModalHeader>
          <ModalBody>{value}</ModalBody>
        </Modal>
      </div>
    );
  }

  combine() {
    console.log("open");
    this.toggleLarge1();
    this.staffWork();
  }

  getDays() {
    console.log("hello");
  }

  componentDidMount() {
    var day = new Date().getDate();
    var month = new Date().getUTCMonth();
    var year = new Date().getFullYear();

    var day1 = new Date();
    var nextDay = new Date(day1);
    var nextDay1 = new Date(nextDay);
    var nextDay2 = new Date(nextDay1);
    var nextDay3 = new Date(nextDay2);
    var nextDay4 = new Date(nextDay3);
    var nextDay5 = new Date(nextDay4);
    var nextDay6 = new Date(nextDay5);

    nextDay.setDate(day1.getDate() + 1);
    nextDay1.setDate(nextDay.getDate() + 1);
    nextDay2.setDate(nextDay1.getDate() + 1);
    nextDay3.setDate(nextDay2.getDate() + 1);
    nextDay4.setDate(nextDay3.getDate() + 1);
    nextDay5.setDate(nextDay4.getDate() + 1);
    nextDay6.setDate(nextDay5.getDate() + 1);

    var val = day1.toDateString().split(" ");
    var val1 = nextDay.toDateString().split(" ");
    var val2 = nextDay1.toDateString().split(" ");
    var val3 = nextDay2.toDateString().split(" ");
    var val4 = nextDay3.toDateString().split(" ");
    var val5 = nextDay4.toDateString().split(" ");
    var val6 = nextDay5.toDateString().split(" ");
    console.log(val[0]);
    this.setState({
      //date:day+'/'+month+'/'+year,
      date: val[0] + " " + val[1] + " " + val[2] + " " + val[3],
      date2: val1[0] + " " + val1[1] + " " + val1[2] + " " + val1[3],
      date3: val2[0] + " " + val2[1] + " " + val2[2] + " " + val2[3],
      date4: val3[0] + " " + val3[1] + " " + val3[2] + " " + val3[3],
      date5: val4[0] + " " + val4[1] + " " + val4[2] + " " + val4[3],
      date6: val5[0] + " " + val5[1] + " " + val5[2] + " " + val5[3],
      date7: val6[0] + " " + val6[1] + " " + val6[2] + " " + val6[3],
    });

    for (var i = 0; i < this.state.serv.length + 1; i++) {
      this.state.size.push("false");
    }

    this.receivedData(1, 1);
    this.receivedData1(1, 1);
  }

  receivedData = (e, index) => {
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
            "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/employee/getbypage/",
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
              };
              this.setState({
                data4: [values, ...this.state.data4],
              });
            });

            console.log("length of data4" + this.state.data4.length);
          })
          .catch((err) => console.log(err));
      }
    );
  };




  receivedData1 = (e, index) => {
    console.log("index" + index);
    this.setState(
      {
        pageNumber: index,
        data5: [],
        data6: [],
      },
      () => {
        axios({
          method: "GET",
          url:
            "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/user/getall/",
          params: { page: this.state.pageNumber, limit: this.state.limit },
        })
          .then((res) => {
            this.setState({
              data5: res.data.data,
              pageCount: Math.ceil(res.data.count / this.state.limit),
            });

            console.log("length of limit" + this.state.data3.length);

            this.state.data5.map((item) => {
              const values = {
                id: item.id,
                fname: item.first_name,
                lname: item.last_name,
                email: item.email,
                type: item.type,
              };
              this.setState({
                data6: [values, ...this.state.data6],
              });
            });

            console.log("length of data4" + this.state.data6.length);
          })
          .catch((err) => console.log(err));
      }
    );
  };

  getDate() {
    return Date();
  }

  toggle1(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }



  staffUpdateHandler=(e)=>{

    e.preventDefault();

    if(this.state.mobileisUpdated===true)
    {
      this.setState({
        mobilefinal:this.state.mobileNumber,
        dialcodefinal:this.state.dialCodeupd,
        countryfinal:this.state.Country
      },()=>{

        const values={

          name: this.state.fullnameupd,
      nic: this.state.Nicupd,
      address_line1: this.state.address1upd,
      address_line2: this.state.address2upd,
      city: this.state.cityupd,
      country: this.state.countryfinal,
      country_code: this.state.dialcodefinal,
      mobile: this.state.mobilefinal,

        }

        const url = "/employee/update/";
        BaseService.UpdateService(url, values,this.state.updateId)
          .then((res) => {
            console.log("response"+res)
            if (res.data.success === true) {
             // this.receivedData(1,1);
              alertify.success("Successfully Updated");
      
              this.setState({
                large3:false
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

    }else{


      this.setState({
        mobilefinal:this.state.mobilewithoutupd,
        dialcodefinal:this.state.codewithoutupd,
        countryfinal:this.state.countrywithoutupd
      },()=>{

        const values={

          name: this.state.fullnameupd,
      nic: this.state.Nicupd,
      address_line1: this.state.address1upd,
      address_line2: this.state.address2upd,
      city: this.state.cityupd,
      country: this.state.countryfinal,
      country_code: this.state.dialcodefinal,
      mobile: this.state.mobilefinal,

        }

        const url = "/employee/update/";
        BaseService.UpdateService(url, values,this.state.updateId)
          .then((res) => {
            console.log("response"+res)
            if (res.data.success === true) {
             // this.receivedData(1,1);
              alertify.success("Successfully Updated");
      
              this.setState({
                large3:false
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

  pass=(valueId,name,nic,mobile,code)=>{

    this.setState(
      {
        updateId:valueId,
        mobileNumberupd: code+mobile,
        mobilewithoutupd:mobile,
        codewithoutupd:code,
        data7: [],
        data8: [],
      });

    axios({
      method: "GET",
      url:
        "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com/employee/getdetail/",
      params: { id: valueId},
    })
      .then((res) => {
        
        this.setState({
          data7: res.data.data,
         
        });


        this.state.data7.map((item) => {

          const service={
            name:item.name,
            nic:item.nic,
            address1:item.address_line1,
            address2:item.address_line2,
            city:item.city,
            country:item.country,
            countrycode:item.country_code,
            mobile:item.mobile
          }
         
console.log(item.country_code)
console.log(item.mobile)
         this.setState({
          fullnameupd: item.name,
          countrywithoutupd:item.country,
          address1upd: item.address_line1,
          address2upd: item.address_line2,
          cityupd: item.city,
          Nicupd: item.nic


         })
         console.log(this.state.mobileNumberupd)
          
        });
      
      })
      .catch((err) => console.log(err));

  
  }

  tabPane() {
    const {pageNumber}=this.state;
    return (
      <>
        <TabPane tabId="1">
          {
            <Col>
              <Card>
                <CardBody>
                  {/* <div className="text-center">
                    <Button
                      onClick={this.toggleLarge}
                      color="dark"
                      className="pull-right"
                      style={{ marginBottom: 20 }}
                    >
                      Add Staff
                    </Button>
                  </div> */}

                  <Dropdown
                    color="dark"
                    className="pull-right"
                    isOpen={this.state.dropdownOpen[0]}
                    toggle={() => {
                      this.toggle1(0);
                    }}
                  >
                    <DropdownToggle caret color="dark">
                      Add New
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.toggleLarge}>
                        Staff
                      </DropdownItem>
                      <DropdownItem onClick={this.toggleLarge2}>
                        System User
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Modal
                    isOpen={this.state.large}
                    toggle={this.toggleLarge}
                    className={"modal-lg " + this.props.className}
                  >
                    <ModalHeader toggle={this.toggleLarge}>
                      Add New Staff Member
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.submitHandler}>
                        <Row>
                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                                <FormGroup>
                                  <Label htmlFor="firstName">Full Name</Label>
                                  <Input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="Enter first Name"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="mobileNumber">
                                    Mobile Number
                                  </Label>
                                  {/* <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    
                                      <Input type="select">
                                        <option
                                          label="+94"
                                        >
                                          +94
                                        </option>
                                      </Input>

                                    </InputGroupAddon>
                                    <Input
                                      type="text"
                                      id="mobileNumber"
                                      name="mobileNumber"
                                      placeholder="+94 71 2345 6789"
                                      autoComplete="mobileNumber"
                                      value={this.state.mobileNumber}
                                      onChange={this.changeHandler}
                                    />
                                  </InputGroup> */}

                                  <PhoneInput
                                    country={"lk"}
                                    name="mobileNumber"
                                    // value={this.state.mobileNumber}
                                    onChange={(country, value, event) => {
                                      this.setState({
                                        dialCode: value["dialCode"],
                                        Country: value["name"],
                                        mobileNumber: country.slice(
                                          value.dialCode.length
                                        ),
                                      });
                                    }}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="Nic">NIC</Label>
                                  <Input
                                    type="text"
                                    id="Nic"
                                    name="Nic"
                                    placeholder="Enter Employee NIC"
                                    value={this.state.Nic}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>
                              </CardBody>
                            </Card>
                          </Col>

                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                                {/* <FormGroup>
                                  <Label htmlFor="employeeTitle">
                                    Employee Title
                                  </Label>
                                  <Input
                                    type="text"
                                    id="employeeTitle"
                                    name="employeeTitle"
                                    placeholder="Enter Employee Title"
                                    value={this.state.employeeTitle}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup> */}

                                <FormGroup>
                                  <Label htmlFor="street">Address 1</Label>
                                  <Input
                                    type="text"
                                    id="address1"
                                    name="address1"
                                    placeholder="Enter Address line 1"
                                    value={this.state.address1}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="street">Address 2</Label>
                                  <Input
                                    type="text"
                                    id="address2"
                                    name="address2"
                                    placeholder="Enter Address line 2"
                                    value={this.state.address2}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="Enter your city"
                                    value={this.state.city}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                {/* <FormGroup row>
                                  <Col md="3">
                                    <Label>Services Offered</Label>
                                  </Col>
                                  <Col md="9">
                                    {this.state.serv.map((val) => (
                                      <FormGroup check className="checkbox">
                                        <Input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkbox1"
                                          name={val.service}
                                          key={val.service}
                                          value={val.id}
                                          checked={
                                            this.state.size[val.id] !== "false"
                                          }
                                          onClick={this.setSize}
                                        />
                                        <Label
                                          check
                                          className="form-check-label"
                                          htmlFor="checkbox1"
                                        >
                                          {val.service}
                                        </Label>
                                      </FormGroup>
                                    ))}
                                  </Col>
                                </FormGroup> */}
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



















                  <Modal
                    isOpen={this.state.large3}
                    toggle={this.toggleLarge3}
                    className={"modal-lg " + this.props.className}
                  >
                    <ModalHeader toggle={this.toggleLarge3}>
                      Edit Staff Member
                    </ModalHeader>
                    <ModalBody>
                      <form onSubmit={this.staffUpdateHandler}>
                        <Row>
                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                                <FormGroup>
                                  <Label htmlFor="firstName">Full Name</Label>
                                  <Input
                                    type="text"
                                    id="fullnameupd"
                                    name="fullnameupd"
                                    placeholder="Enter first Name"
                                    value={this.state.fullnameupd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="mobileNumber">
                                    Mobile Number
                                  </Label>
                                  {/* <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    
                                      <Input type="select">
                                        <option
                                          label="+94"
                                        >
                                          +94
                                        </option>
                                      </Input>

                                    </InputGroupAddon>
                                    <Input
                                      type="text"
                                      id="mobileNumber"
                                      name="mobileNumber"
                                      placeholder="+94 71 2345 6789"
                                      autoComplete="mobileNumber"
                                      value={this.state.mobileNumber}
                                      onChange={this.changeHandler}
                                    />
                                  </InputGroup> */}

                                  <PhoneInput
                                    //country={"lk"}
                                    name="mobileNumberupd"
                                     value={this.state.mobileNumberupd}
                                     
                                    onChange={(country, value, event) => {
                                      this.setState({
                                        mobileisUpdated:true,
                                        dialCodeupd: "+"+value["dialCode"],
                                        Country: value["name"],
                                        mobileNumber: country.slice(
                                          value.dialCode.length
                                        ),
                                      });
                                    }}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="Nic">NIC</Label>
                                  <Input
                                    type="text"
                                    id="Nicupd"
                                    name="Nicupd"
                                    placeholder="Enter Employee NIC"
                                    value={this.state.Nicupd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>
                              </CardBody>
                            </Card>
                          </Col>

                          <Col xs="12" sm="6">
                            <Card style={{ borderColor: "white" }}>
                              <CardBody>
                                {/* <FormGroup>
                                  <Label htmlFor="employeeTitle">
                                    Employee Title
                                  </Label>
                                  <Input
                                    type="text"
                                    id="employeeTitle"
                                    name="employeeTitle"
                                    placeholder="Enter Employee Title"
                                    value={this.state.employeeTitle}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup> */}

                                <FormGroup>
                                  <Label htmlFor="street">Address 1</Label>
                                  <Input
                                    type="text"
                                    id="address1upd"
                                    name="address1upd"
                                    placeholder="Enter Address line 1"
                                    value={this.state.address1upd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="street">Address 2</Label>
                                  <Input
                                    type="text"
                                    id="address2upd"
                                    name="address2upd"
                                    placeholder="Enter Address line 2"
                                    value={this.state.address2upd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                <FormGroup>
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    type="text"
                                    id="cityupd"
                                    name="cityupd"
                                    placeholder="Enter your city"
                                    value={this.state.cityupd}
                                    onChange={this.changeHandler}
                                  />
                                </FormGroup>

                                {/* <FormGroup row>
                                  <Col md="3">
                                    <Label>Services Offered</Label>
                                  </Col>
                                  <Col md="9">
                                    {this.state.serv.map((val) => (
                                      <FormGroup check className="checkbox">
                                        <Input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="checkbox1"
                                          name={val.service}
                                          key={val.service}
                                          value={val.id}
                                          checked={
                                            this.state.size[val.id] !== "false"
                                          }
                                          onClick={this.setSize}
                                        />
                                        <Label
                                          check
                                          className="form-check-label"
                                          htmlFor="checkbox1"
                                        >
                                          {val.service}
                                        </Label>
                                      </FormGroup>
                                    ))}
                                  </Col>
                                </FormGroup> */}
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                        <Button
                          type="submit"
                          color="primary"
                          className="pull-right"
                        >
                          Edit
                        </Button>
                      </form>
                    </ModalBody>
                  </Modal>






 <Modal
                    isOpen={this.state.large2}
                    toggle={this.toggleLarge2}
                    className={"modal-lg " + this.props.className}
                  >
                    <form onSubmit={this.SystemUserSubmitHandler}>
                      <ModalHeader toggle={this.toggleLarge2}>
                        Add System User
                      </ModalHeader>
                      <ModalBody>
                        <Card style={{ borderColor: "white" }}>
                          <CardBody>
                            <FormGroup row className="my-0">
                              <Col xs="6">
                                <FormGroup>
                                  <Label htmlFor="firstName">First Name</Label>
                                  <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter first Name"
                                    value={this.state.firstName}
                                    onChange={this.changeHandler}
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col xs="6">
                                <FormGroup>
                                  <Label htmlFor="lastName">last Name</Label>
                                  <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter last Name"
                                    value={this.state.lastName}
                                    onChange={this.changeHandler}
                                    required
                                  />
                                </FormGroup>
                              </Col>
                            </FormGroup>

                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-user"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="text"
                                  id="username"
                                  name="username"
                                  placeholder="Username"
                                  autoComplete="name"
                                  value={this.state.username}
                                  onChange={this.changeHandler}
                                  required
                                />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fa fa-envelope"></i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Email"
                                  autoComplete="username"
                                  value={this.state.email}
                                  onChange={this.changeHandler}
                                  required
                                />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup row>
                              <Col md="2">
                                <Label htmlFor="select">Select Type</Label>
                              </Col>
                              <Col xs="6" md="4">
                                <Input
                                  type="select"
                                  name="type"
                                  id="type"
                                  onChange={this.changeHandler}
                                >
                                  <option value="0">select User Type</option>
                                  <option value="1">Admin</option>
                                  <option value="2">User</option>
                                </Input>
                              </Col>
                            </FormGroup>
                          </CardBody>
                        </Card>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          type="submit"
                          color="success"
                          onClick={this.toggleLarge2}
                        >
                          Save
                        </Button>{" "}
                        <Button color="secondary" onClick={this.toggleLarge2}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </form>
                  </Modal> 

                  <Table responsive className="table table-hover">
                    <thead>
                      <tr>
                      <i className="fa fa-reorder fa-lg mt-4" style={{paddingTop:12}}></i>
                        <th>
                        
                          <i className="fa fa-user-circle-o fa-fw"></i>Staff
                          Name
                        </th>

                        <th>
                        <i className="fa fa-id-card fa-fw mt-4"></i>
                          NIC
                        </th>
                        <th>
                          <i className="fa fa-phone fa-fw"></i>Mobile Number
                        </th>
                        <th>
                          <i className="fa fa-circle-o-notch fa-fw fa-spin mt-4"></i>
                          Employee Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data4.map((item) => (
                        <tr >
                           <i
                      className="fa fa-edit fa-lg mt-4"
                      onClick={()=>{this.toggleLarge3();this.pass(item.id,item.name,item.nic,item.mobile,item.countryCode)}}
                    ></i>
                          <td>{item.name}</td>
                          <td>{item.nic}</td>
                          <td>{item.mobile}</td>
                          <td>
                            <Badge color="success">Active</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Pagination>
               




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


                  </Pagination>
                </CardBody>
              </Card>
            </Col>
          }
        </TabPane>
        <TabPane tabId="2">
          {/* Starting tab pane 2 */}

          {
            // <Col>
            //   <Card>
            //     <CardBody>
            //       <Table responsive bordered>
            //         <thead>
            //           <tr>
            //             <th>Name</th>
            //             <th>{this.state.date}</th>
            //             <th>{this.state.date2}</th>
            //             <th>{this.state.date3}</th>
            //             <th>{this.state.date4}</th>
            //             <th>{this.state.date5}</th>
            //             <th>{this.state.date6}</th>
            //             <th>{this.state.date7}</th>
            //           </tr>
            //         </thead>

            //         <tbody>
            //           {this.state.data.map((values) => (
            //             <tr>
            //               <td>{values.name}</td>
            //               <td>
            //                 {/* <Button size="sm" color="ghost-success" onClick={this.toggleLarge1}>
            //          {values.num1}
            //          </Button>   */}
            //                 {this.staffWork(values.num1)}
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num1}
            //                 </Button>
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num2}
            //                 </Button>
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num3}
            //                 </Button>
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num4}
            //                 </Button>
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num5}
            //                 </Button>
            //               </td>

            //               <td>
            //                 <Button size="sm" color="ghost-success">
            //                   {values.num6}
            //                 </Button>
            //               </td>
            //             </tr>
            //           ))}
            //         </tbody>
            //       </Table>
            //     </CardBody>
            //   </Card>
            // </Col>

            <Card>
              <CardBody>
            <Table responsive className="table table-hover">
            <thead>
              <tr>
              
                <th>
                
                  <i className="fa fa-user-circle-o fa-fw"></i>First Name
                </th>

                <th>
                <i className="fa fa-user-circle-o fa-fw"></i>
                  Last Name
                </th>
                <th>
                <i className="fa fa-envelope fa-fw mt-4"></i>Email
                </th>
                <th>
                  <i className="fa fa-id-badge fa-fw mt-4"></i>
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data6.map((item) => (
                <tr >
                  
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
       




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


          </Pagination>
          </CardBody>
          </Card>
          }
        </TabPane>
      </>
    );
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "1"}
                  onClick={() => {
                    this.toggle(0, "1");
                  }}
                >
                  <b>Staff Members</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "2"}
                  onClick={() => {
                    this.toggle(0, "2");
                  }}
                >
                  System Users
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === "3"}
                  onClick={() => {
                    this.toggle(0, "3");
                  }}
                >
                  Messages
                </NavLink>
              </NavItem> */}
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Staff;
