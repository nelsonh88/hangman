import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const PopUp = (props) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (
    checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) ===
    "win"
  ) {
    finalMessage = "Congrats you won!!";
    playable = false;
  } else if (
    checkWin(props.correctLetters, props.wrongLetters, props.selectedWord) ===
    "lose"
  ) {
    finalMessage = "Unfortunately you lost.";
    finalMessageRevealWord = `...the word was ${props.selectedWord}`;
    playable = false;
  }

  useEffect(() => props.setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={props.playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default PopUp;
