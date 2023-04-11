import { cardImages } from "../config/cardImages";
import "../css/card.css";
import React from "react";
export default function Card(props) {
  return (
    <>
      <div
        className="card"
        onClick={
          props.shown || props.twoUncovered
            ? undefined
            : () => props.onClick(props.index)
        }
      >
        <div
          className={`fundo${props.shown ? ` uncoverFront` : ``}`}
          data-index={props.index}
        >
          <img className="face" src={cardImages[props.name]} />
        </div>
        <div className={`frente${props.shown ? ` uncoverBack` : ``}`}>
          <img className="back" src={cardImages["back"]} />
        </div>
      </div>
    </>
  );
}
