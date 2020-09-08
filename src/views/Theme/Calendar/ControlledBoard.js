import React, { Component, useState  } from 'react';
//import Board, { moveCard } from "@lourenci/react-kanban";
//import styled from 'styled-components';
import Board from "react-trello";
import "./Style.css";
function ControlledBoard(props){

    //const [controlledBoard, setBoard] = useState(props.board);
    
      //function handleCardMove(_card, source, destination) {


        //const updatedBoard = moveCard(controlledBoard, source, destination);
       // setBoard(updatedBoard);
        //console.log(props.value)
        //console.log(_card)
      //  props.value(source,destination);
      //}
    
     // return (

      //   <Board
      //   allowRemoveCard
      //   onCardRemove={console.log}
      //   onCardDragEnd={handleCardMove}
      //   initialBoard={props.board}
      //   disableColumnDrag
      // />
     


    //  );

    return (
      <div>
        <Board 
        style={{backgroundColor: '#e4e5e6'}}
        data={props.board} 
        draggable
        onCardClick={console.log}
        onCardMoveAcrossLanes={console.log} />
      </div>
    );
  
}
export default ControlledBoard;