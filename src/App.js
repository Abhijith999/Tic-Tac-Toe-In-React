import React from "react";
import GridRow from "./Components/GirdRow";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "X"
    };
  }
  updateBoard = (row, col) => {
    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X" ? "0" : "X",
      boardState: arr
    });
  };
  render() {
    return (
      <div class="container">
        <div class="header">Tic Tac Toe</div>
        <div id="board">
          {[0, 1, 2].map((row) => {
            return (
              <GridRow
                index={row}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
        <div class="turn"></div>
      </div>
    );
  }
}
export default App;
