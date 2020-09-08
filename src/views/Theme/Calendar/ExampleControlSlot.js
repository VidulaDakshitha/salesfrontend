// import React, { Component } from "react";
// import {
//     Calendar,
//     momentLocalizer,

//   } from 'react-big-calendar';
// import moment from "moment";
// import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import Control from "./Control"
// import classnames from 'classnames';


// const localizer = momentLocalizer(moment)
// const DnDCalendar = withDragAndDrop(Calendar);
  
// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             events: [
//               {
//                 start: new Date(),
//                 end: new Date(moment().add(1, "days")),
//                 title: "Some title"
//               }
//             ]
//           };
//     }
    
  

//   onEventResize = (type, { event,start, end, allDay }) => {
//     // this.setState(state => {
//     //  state.events[0].start = start;
//     //   state.events[0].end = end;
//     //   return { events: state.events };
//     console.log(event)
//    // });
//   };

//   onEventDrop = ({ event, start, end, allDay }) => {
//     console.log(start);
//   };



//   render() {
//     return (


// <div className="App">
//         <DnDCalendar
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//         />
//       </div>



//     )
//   }
// }

// export default App;

import React from 'react'
import events from './events'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
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

import {
  Badge,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
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
  Row,
} from 'reactstrap';
//import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

//import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

const DragAndDropCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
      large:false,
      value1:" ",
      value2:" ",
      value3:" ",
      data:[],
      btnVal:false,
      serv: [
        {
          id: 1,
          service: "hair cut",
          time: "1h 15min",
          price: "LKR500",
          catergory: "Hair",
          empl:"vidula"
        },
        {
          id: 2,
          service: "Facial Hair Trim",
          time: "1h 30min",
          price: "LKR250",
          catergory: "Face",
          empl:"dinal"
        },
        {
          id: 3,
          service: "Beard Trim",
          time: "1h",
          price: "LKR1500",
          catergory: "Beard",
          empl:"Amila"
        }
      ],
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
    this.toggleLarge = this.toggleLarge.bind(this);
    this.AddComponent=this.AddComponent.bind(this)
  }

  findPrefix=()=>
  {
    const copy=Object.assign([],this.state.serv);
    const index=this.state.serv.findIndex(val=>val.service===this.state.value1);
    const copy1=this.state.serv[index];
console.log(copy1.time);
   
this.setState({
  value2:copy1.time
})
return this.state.value2;
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
     let idList = this.state.events.map(a => a.id)
     let newId = Math.max(...idList) + 1
     let hour = {
      id: newId,
      title: 'New Event',
      allDay: event.slots.length === 1,
      start: event.start,
      end: event.end,
    }
    this.setState({
      events: this.state.events.concat([hour]),
    })
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large
    });
  }

  changeValue=(e)=>{
    this.setState({
     value1:e.target.value,
     data:[this,...this.state.value1]
    },()=>{ const index=this.state.serv.findIndex(val=>val.service===this.state.value1);
      const copy1=this.state.serv[index];
      this.setState({
          value2:copy1.time,
          value3:copy1.price,
          btnVal:true

         })
         //this.AddComponent()
    })


  }
  
  AddComponent(){

    if(this.state.btnVal!==false)
    {
      this.setState({
        btnVal:false
      })
    }
  }

  render() {

    const btn=this.state.btnVal;
    return (
      <div>
       
      <DragAndDropCalendar
        selectable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        onSelectSlot={this.toggleLarge}
        onDragStart={console.log}
        defaultView={Views.DAY}
        defaultDate={new Date(2015, 3, 12)}

        
      />
      <Modal
      isOpen={this.state.large}
      toggle={this.toggleLarge}
     
    >
      <ModalHeader>
        Add New Appointment
      </ModalHeader>
      <ModalBody>
      <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Appointment Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>

                  <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">start time</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">00.00</option>
                        <option value="2">00.05</option>
                        <option value="3">00.10</option>
                        <option value="4">00.15</option>
                        <option value="5">00.20</option>
                        <option value="6">00.25</option>
                        <option value="7">00.30</option>
                        <option value="8">00.35</option>
                        <option value="9">00.40</option>
                        <option value="10">00.45</option>
                        <option value="11">00.50</option>
                        <option value="12">00.55</option>
                        <option value="12">01.00</option>
                        <option value="2">01.05</option>
                        <option value="3">01.10</option>
                        <option value="4">01.15</option>
                        <option value="5">01.20</option>
                        <option value="6">01.25</option>
                        <option value="7">01.30</option>
                        <option value="8">01.35</option>
                        <option value="9">01.40</option>
                        <option value="10">01.45</option>
                        <option value="11">01.50</option>
                        <option value="12">01.55</option>
                        <option value="1">02.00</option>
                        <option value="2">02.05</option>
                        <option value="3">02.10</option>
                        <option value="4">02.15</option>
                        <option value="5">02.20</option>
                        <option value="6">02.25</option>
                        <option value="7">02.30</option>
                        <option value="8">02.35</option>
                        <option value="9">02.40</option>
                        <option value="10">02.45</option>
                        <option value="11">02.50</option>
                        <option value="12">02.55</option>
                        <option value="1">03.00</option>
                        <option value="2">03.05</option>
                        <option value="3">03.10</option>
                        <option value="4">03.15</option>
                        <option value="5">03.20</option>
                        <option value="6">03.25</option>
                        <option value="7">03.30</option>
                        <option value="8">03.35</option>
                        <option value="9">03.40</option>
                        <option value="10">03.45</option>
                        <option value="11">03.50</option>
                        <option value="12">03.55</option>
                        <option value="1">04.00</option>
                        <option value="2">04.05</option>
                        <option value="3">04.10</option>
                        <option value="4">04.15</option>
                        <option value="5">04.20</option>
                        <option value="6">04.25</option>
                        <option value="7">04.30</option>
                        <option value="8">04.35</option>
                        <option value="9">04.40</option>
                        <option value="10">04.45</option>
                        <option value="11">04.50</option>
                        <option value="12">04.55</option>
                        <option value="1">05.00</option>
                        <option value="2">05.05</option>
                        <option value="3">05.10</option>
                        <option value="4">05.15</option>
                        <option value="5">05.20</option>
                        <option value="6">05.25</option>
                        <option value="7">05.30</option>
                        <option value="8">05.35</option>
                        <option value="9">05.40</option>
                        <option value="10">05.45</option>
                        <option value="11">05.50</option>
                        <option value="12">05.55</option>
                        <option value="1">06.00</option>
                        <option value="2">06.05</option>
                        <option value="3">06.10</option>
                        <option value="4">06.15</option>
                        <option value="5">06.20</option>
                        <option value="6">06.25</option>
                        <option value="7">06.30</option>
                        <option value="8">06.35</option>
                        <option value="9">06.40</option>
                        <option value="10">06.45</option>
                        <option value="11">06.50</option>
                        <option value="12">06.55</option>
                        <option value="1">07.00</option>
                        <option value="2">07.05</option>
                        <option value="3">07.10</option>
                        <option value="4">07.15</option>
                        <option value="5">07.20</option>
                        <option value="6">07.25</option>
                        <option value="7">07.30</option>
                        <option value="8">07.35</option>
                        <option value="9">07.40</option>
                        <option value="10">07.45</option>
                        <option value="11">07.50</option>
                        <option value="12">07.55</option>
                        <option value="1">08.00</option>
                        <option value="2">08.05</option>
                        <option value="3">08.10</option>
                        <option value="4">08.15</option>
                        <option value="5">08.20</option>
                        <option value="6">08.25</option>
                        <option value="7">08.30</option>
                        <option value="8">08.35</option>
                        <option value="9">08.40</option>
                        <option value="10">08.45</option>
                        <option value="11">08.50</option>
                        <option value="12">08.55</option>
                        <option value="1">09.00</option>
                        <option value="2">09.05</option>
                        <option value="3">09.10</option>
                        <option value="4">09.15</option>
                        <option value="5">09.20</option>
                        <option value="6">09.25</option>
                        <option value="7">09.30</option>
                        <option value="8">09.35</option>
                        <option value="9">09.40</option>
                        <option value="10">09.45</option>
                        <option value="11">09.50</option>
                        <option value="12">09.55</option>
                        <option value="1">10.00</option>
                        <option value="2">10.05</option>
                        <option value="3">10.10</option>
                        <option value="4">10.15</option>
                        <option value="5">10.20</option>
                        <option value="6">10.25</option>
                        <option value="7">10.30</option>
                        <option value="8">10.35</option>
                        <option value="9">10.40</option>
                        <option value="10">10.45</option>
                        <option value="11">10.50</option>
                        <option value="12">10.55</option>
                        <option value="1">11.00</option>
                        <option value="2">11.05</option>
                        <option value="3">11.10</option>
                        <option value="4">11.15</option>
                        <option value="5">11.20</option>
                        <option value="6">11.25</option>
                        <option value="7">11.30</option>
                        <option value="8">11.35</option>
                        <option value="9">11.40</option>
                        <option value="10">11.45</option>
                        <option value="11">11.50</option>
                        <option value="12">11.55</option>
                        <option value="1">12.00</option>
                        <option value="2">12.05</option>
                        <option value="3">12.10</option>
                        <option value="4">12.15</option>
                        <option value="5">12.20</option>
                        <option value="6">12.25</option>
                        <option value="7">12.30</option>
                        <option value="8">12.35</option>
                        <option value="9">12.40</option>
                        <option value="10">12.45</option>
                        <option value="11">12.50</option>
                        <option value="12">12.55</option>
                        <option value="1">13.00</option>
                        <option value="2">13.05</option>
                        <option value="3">13.10</option>
                        <option value="4">13.15</option>
                        <option value="5">13.20</option>
                        <option value="6">13.25</option>
                        <option value="7">13.30</option>
                        <option value="8">13.35</option>
                        <option value="9">13.40</option>
                        <option value="10">13.45</option>
                        <option value="11">13.50</option>
                        <option value="12">13.55</option>
                        <option value="1">14.00</option>
                        <option value="2">14.05</option>
                        <option value="3">14.10</option>
                        <option value="4">14.15</option>
                        <option value="5">14.20</option>
                        <option value="6">14.25</option>
                        <option value="7">14.30</option>
                        <option value="8">14.35</option>
                        <option value="9">14.40</option>
                        <option value="10">14.45</option>
                        <option value="11">14.50</option>
                        <option value="12">14.55</option>
                        <option value="1">15.00</option>
                        <option value="2">15.05</option>
                        <option value="3">15.10</option>
                        <option value="4">15.15</option>
                        <option value="5">15.20</option>
                        <option value="6">15.25</option>
                        <option value="7">15.30</option>
                        <option value="8">15.35</option>
                        <option value="9">15.40</option>
                        <option value="10">15.45</option>
                        <option value="11">15.50</option>
                        <option value="12">15.55</option>
                        <option value="1">16.00</option>
                        <option value="2">16.05</option>
                        <option value="3">16.10</option>
                        <option value="4">16.15</option>
                        <option value="5">16.20</option>
                        <option value="6">16.25</option>
                        <option value="7">16.30</option>
                        <option value="8">16.35</option>
                        <option value="9">16.40</option>
                        <option value="10">16.45</option>
                        <option value="11">16.50</option>
                        <option value="12">16.55</option>
                        <option value="1">17.00</option>
                        <option value="2">17.05</option>
                        <option value="3">17.10</option>
                        <option value="4">17.15</option>
                        <option value="5">17.20</option>
                        <option value="6">17.25</option>
                        <option value="7">17.30</option>
                        <option value="8">17.35</option>
                        <option value="9">17.40</option>
                        <option value="10">17.45</option>
                        <option value="11">17.50</option>
                        <option value="12">17.55</option>
                        <option value="1">18.00</option>
                        <option value="2">18.05</option>
                        <option value="3">18.10</option>
                        <option value="4">18.15</option>
                        <option value="5">18.20</option>
                        <option value="6">18.25</option>
                        <option value="7">18.30</option>
                        <option value="8">18.35</option>
                        <option value="9">18.40</option>
                        <option value="10">18.45</option>
                        <option value="11">18.50</option>
                        <option value="12">18.55</option>
                        <option value="1">19.00</option>
                        <option value="2">19.05</option>
                        <option value="3">19.10</option>
                        <option value="4">19.15</option>
                        <option value="5">19.20</option>
                        <option value="6">19.25</option>
                        <option value="7">19.30</option>
                        <option value="8">19.35</option>
                        <option value="9">19.40</option>
                        <option value="10">19.45</option>
                        <option value="11">19.50</option>
                        <option value="12">19.55</option>
                        <option value="1">20.00</option>
                        <option value="2">20.05</option>
                        <option value="3">20.10</option>
                        <option value="4">20.15</option>
                        <option value="5">20.20</option>
                        <option value="6">20.25</option>
                        <option value="7">20.30</option>
                        <option value="8">20.35</option>
                        <option value="9">20.40</option>
                        <option value="10">20.45</option>
                        <option value="11">20.50</option>
                        <option value="12">20.55</option>
                        <option value="1">21.00</option>
                        <option value="2">21.05</option>
                        <option value="3">21.10</option>
                        <option value="4">21.15</option>
                        <option value="5">21.20</option>
                        <option value="6">21.25</option>
                        <option value="7">21.30</option>
                        <option value="8">21.35</option>
                        <option value="9">21.40</option>
                        <option value="10">21.45</option>
                        <option value="11">21.50</option>
                        <option value="12">21.55</option>
                        <option value="1">22.00</option>
                        <option value="2">22.05</option>
                        <option value="3">22.10</option>
                        <option value="4">22.15</option>
                        <option value="5">22.20</option>
                        <option value="6">22.25</option>
                        <option value="7">22.30</option>
                        <option value="8">22.35</option>
                        <option value="9">22.40</option>
                        <option value="10">22.45</option>
                        <option value="11">22.50</option>
                        <option value="12">22.55</option>
                        <option value="1">22.00</option>
                        <option value="2">22.05</option>
                        <option value="3">22.10</option>
                        <option value="4">22.15</option>
                        <option value="5">22.20</option>
                        <option value="6">22.25</option>
                        <option value="7">22.30</option>
                        <option value="8">22.35</option>
                        <option value="9">22.40</option>
                        <option value="10">22.45</option>
                        <option value="11">22.50</option>
                        <option value="12">22.55</option>
                        <option value="1">23.00</option>
                        <option value="2">23.05</option>
                        <option value="3">23.10</option>
                        <option value="4">23.15</option>
                        <option value="5">23.20</option>
                        <option value="6">23.25</option>
                        <option value="7">23.30</option>
                        <option value="8">23.35</option>
                        <option value="9">23.40</option>
                        <option value="10">23.45</option>
                        <option value="11">23.50</option>
                        <option value="12">23.55</option>
                        
                        
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="ccyear">Service</Label>
                      
                      <Input type="select" name="ccyear" id="ccyear" onChange={this.changeValue}>
                      {this.state.serv.map(val=>(
                        <option value={val.service}>{val.service}</option>
                        ))}
                      </Input>
                      
                      
                    </FormGroup>
                  </Col>
                </Row>

               
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Time Allocated</Label>
                      <Input type="select" name="ccmonth" id="ccmonth" >
                                         <option value="1">{this.state.value2}</option>
                                          <option value="1">30 min</option>
                                          <option value="1">45 min</option>
                                          <option value="1">1 hr</option>
                                          <option value="1">1 hr 15 min</option>
                                          <option value="1">1 hr 30 min</option>
                                          <option value="1">1 hr 45 min</option>
                                          <option value="1">2 hr</option>
                        
                        
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="ccyear">Select Stylist</Label>
                      <Input type="select" name="ccmonth" id="ccmonth" >
                      {this.state.serv.map(val=>(
                                         <option value="1">{val.empl}</option>
                                         ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
<hr></hr>
                      <b>{this.state.value3}</b>
                       
                       
                         
                           
                         
                      { btn ? <FormGroup>
                      <Label htmlFor="ccyear">Service</Label>
                      
                      <Input type="select" name="ccyear" id="ccyear" onChange={this.changeValue}>
                      {this.state.serv.map(val=>(
                        <option value={val.service}>{val.service}</option>
                        ))}
                      </Input>
                      
                      
                    </FormGroup>:" "}

                    <Button onClick={this.AddComponent}>click</Button>

                


                    

                      
        </ModalBody>
       
        </Modal>
        </div>
    )
  }
}

export default App