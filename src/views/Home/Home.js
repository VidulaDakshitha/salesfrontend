import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader,CardColumns, Col, Row, Collapse, Fade,Jumbotron,Button } from 'reactstrap';
import "./style.css";
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
const bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Appointments per month',
        backgroundColor: 'rgba(123, 140, 224,0.2)',
        borderColor: 'rgba(26, 25, 97,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
  
class Home extends Component {
    state = {  }

    
    render() { 
        return ( 
        <Row>
        <div> <Col xs="10" sm="4" md="12">
        <Card className="card" style={{height:600}}>
          <CardBody>
          <Jumbotron>
                <h5>Recent Sales</h5>
                  <h4 className="display-4">LKR 50,000</h4>
                  <p>Total Appointments <b>100</b></p>
                  <div className="chart-wrapper">
                <Bar data={bar} options={options} />
                </div>
                  <hr className="my-2" />
                  <p>The annual display of appointments with monthly breakdown</p>
                  <p className="lead">
                    <Button color="primary">Add Appointment</Button>
                  </p>
                </Jumbotron>
          </CardBody>
        </Card>
      </Col>
     </div>




     <div className="animated fadeIn" > 
         <Col xs="10" sm="4" md="12">
            
        <Card style={{height:600}}>
          <CardBody>
          <Jumbotron style={{height:550}}>
                {/* <h5>Recent Sales</h5>
                  <h4 className="display-4">LKR 50,000</h4>
                  <p>Total Appointments <b>100</b></p>
                  <div className="chart-wrapper">
                <Bar data={bar} options={options} />
                </div>
                  <hr className="my-2" />
                  <p>The annual display of appointments with monthly breakdown</p>
                  <p className="lead">
                    <Button color="primary">Add Appointment</Button>
                  </p> */}
                  <h5>upcoming appointments</h5>
                  <p class="lead">Next 7 days</p>
                  <h2 className="text-center">Your schedule is empty</h2>
                  <div style={{marginTop:-100,marginLeft:170}} className="h-100 row align-items-center">
                      <Row className="text-center">
                <i className="fa fa-calendar fa-lg mt-2 fa-4x text-center" ></i><br />
                </Row>
                </div>
                <h5 className="text-center" style={{marginTop:-100}} >Make some appointments for schedule to appear</h5>
                  </Jumbotron>
          </CardBody>
        </Card>
      </Col>
     </div>
     </Row> );
    }
}
 
export default Home;