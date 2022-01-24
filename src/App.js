import React from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="game-container">
        <Figure></Figure>
        <WrongLetters></WrongLetters>
        <Word></Word>
      </div>
    </div>
  );
}

export default App;
