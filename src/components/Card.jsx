import { cardImages } from "../config/cardImages";
import "../css/card.css";
import React from "react";
export default function Card(props) {
  const [shown, setSide] = React.useState(false);
  console.log(cardImages);
  function handleClick() {
    setSide((prev) => !prev);
  }

  return (
    <>
      <div onClick={handleClick} className="card">
        <div
          className={`fundo${shown ? ` uncoverFront` : ``}`}
          data-index={props.index}
        >
          <img className="face" src={cardImages[props.name]} />
        </div>
        <div className={`frente${shown ? ` uncoverBack` : ``}`}>
          <img className="back" src={cardImages["back"]} />
        </div>
      </div>
    </>
  );
}
