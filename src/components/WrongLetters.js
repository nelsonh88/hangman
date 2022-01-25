import React from "react";

const WrongLetters = (props) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {props.wrongLetters.length > 0 ? <p>Wrong</p> : ""}
        {props.wrongLetters
          .map((letter, i) => {
            return <span key={i}>{letter}</span>;
          })
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
