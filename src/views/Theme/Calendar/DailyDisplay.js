import React, { Component } from "react";
import ControlledBoard from "./ControlledBoard";

class DailyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board2: {
        lanes: [
          {
            id: "emp1",
            title: "Dinal",
            label: "5 Appointments",
            style: {
              width: 280,
            },
            cards: [
              {
                id: "app1",
                title: "Hair Cut",
                label: "8.00-9.00",
                description: "2 Gallons of milk at the Deli store",
              },
              {
                id: "app2",
                title: "Facial Trim",
                label: "9.00-10.00",
                description: "Sort out recyclable and waste as needed",
              },
              {
                id: "app3",
                title: "Buy milk",
                label: "15 mins",
                description: "2 Gallons of milk at the Deli store",
              },
              {
                id: "app4",
                title: "Hair cut",
                label: "10 mins",
                description: "Sort out recyclable and waste as needed",
              },
            ],
          },
          {
            id: "emp2",
            title: "Vidula",
            label: "2 Appointments",
            style: {
              width: 280,
            },
            cards: [
              {
                id: "app5",
                title: "Hair cut",
                label: "30 mins",
                description:
                  "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
              },
            ],
          },
          {
            id: "emp3",
            title: "Harsha",
            label: "0/0",
            style: {
              width: 280,
            },
            cards: [],
          },
          {
            id: "emp4",
            title: "Chamath",
            label: "0 Appointments",
            style: {
              width: 280,
            },
            cards: [],
          },
        ],
      },
    };
  }

  componentDidMount=()=>{
    console.log("This is date of due"+this.props.date)
  }

  render() {

   
    return (
      <div>
        <ControlledBoard board={this.state.board2} />
        <button onClick={console.log("This is date"+this.props.date)}>click</button>
      </div>
    );
  }
}
export default DailyDisplay;
