import "./App.css";
import { useState } from "react";
import Player from "../components/player/player";
import Board from "../components/chessBoard/board";

function App() {
  return (
    <div className="App">
      <Player player="Woman" playerName="Catalina" />
      <Board/>
    </div>
  );
}

export default App;
