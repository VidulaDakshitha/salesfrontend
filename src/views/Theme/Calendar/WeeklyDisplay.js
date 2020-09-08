import React, { Component } from 'react';
import ControlledBoard from "./ControlledBoard";

class WeeklyDisplay extends Component{
    constructor(props){

        super(props);
        this.state={

  
              board2: {
                lanes: [
                  {
                    id: "PLANNED",
                    title: "Planned Tasks",
                    label: "20/70",
                    style: {
                      width: 280,
                    },
                    cards: [
                      {
                        id: "Milk",
                        title: "Buy milk",
                        label: "15 mins",
                        description: "2 Gallons of milk at the Deli store",
                      },
                      {
                        id: "Plan2",
                        title: "Dispose Garbage",
                        label: "10 mins",
                        description: "Sort out recyclable and waste as needed",
                      },
                      {
                        id: "Milk",
                        title: "Buy milk",
                        label: "15 mins",
                        description: "2 Gallons of milk at the Deli store",
                      },
                      {
                        id: "Plan2",
                        title: "Dispose Garbage",
                        label: "10 mins",
                        description: "Sort out recyclable and waste as needed",
                      },
                      {
                        id: "Milk",
                        title: "Buy milk",
                        label: "15 mins",
                        description: "2 Gallons of milk at the Deli store",
                      },
                      {
                        id: "Plan2",
                        title: "Dispose Garbage",
                        label: "10 mins",
                        description: "Sort out recyclable and waste as needed",
                      },
                    ],
                  },
                  {
                    id: "WIP",
                    title: "Work In Progress",
                    label: "10/20",
                    style: {
                      width: 280,
                    },
                    cards: [
                      {
                        id: "Wip1",
                        title: "Clean House",
                        label: "30 mins",
                        description:
                          "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
                      },
                    ],
                  },
                  {
                    id: "BLOCKED",
                    title: "Blocked",
                    label: "0/0",
                    style: {
                      width: 280,
                    },
                    cards: [],
                  },
                  {
                    id: "BLOCKED",
                    title: "Blocked",
                    label: "0/0",
                    style: {
                      width: 280,
                    },
                    cards: [],
                  },
                  {
                    id: "BLOCKED",
                    title: "Blocked",
                    label: "0/0",
                    style: {
                      width: 280,
                    },
                    cards: [],
                  },
                ],
              },

        }
    }

    render(){


        return(

                <div><ControlledBoard board={this.state.board2} /></div>

        );
    }


}
export default WeeklyDisplay;