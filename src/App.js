import React from "react";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  const opeBounties = "OPEN BOUNTIES"
  const assignedInProgess = "ASSIGNED/IN PROGESS"
  const underReview = "UNDER REVIEW"
  const closeRewarded = "CLOSE/REWARDED"
  return (
    <div className="App  py-5 mt-4">
      <div className="container-fluid d-flex justify-content-center">
        <div className="row  bg-purple w-75 px-2">
        <div className="col-12">
        <header>
          <h1 className="text-white text-center border-bottom mx-auto mt-4 mb-5 fw-bold fs-2 py-2 ">Bounties</h1>
        </header>
        </div>
          <Board id="board1" myclassName="board" opeBounties={opeBounties}>
            <Card id="card1-1" myclassName="card-green " draggable="true" />
            <Card id="card1-2" myclassName="card-green" draggable="true" />
            <Card id="card1-3" myclassName="card-green" draggable="true" />
          </Board>
          <Board  id="board2" myclassName="board" assignedInProgess={assignedInProgess}>
            <Card id="card2-1" myclassName="card-green " draggable="true" />
            <Card id="card2-2" myclassName="card-green" draggable="true" />
            <Card id="card2-3" myclassName="card-green" draggable="true" />
          </Board>
          <Board  id="board3" myclassName="board" underReview={underReview}>
            <Card id="card3-1" myclassName="card-green " draggable="true" />
            <Card id="card3-2" myclassName="card-green" draggable="true" />
            <Card id="card3-3" myclassName="card-green" draggable="true" />
          </Board>
          <Board  id="board4" myclassName="board" closeRewarded={closeRewarded}>
            <Card id="card4-1" myclassName="card-green " draggable="true" />
            <Card id="card4-2" myclassName="card-green" draggable="true" />
            <Card id="card4-3" myclassName="card-green" draggable="true" />
          </Board>
        </div>
      </div>
    </div>
  );
}

export default App;
