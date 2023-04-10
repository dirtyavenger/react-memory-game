import React, { useState } from "react";
import { selectDeck } from "../utils/deckmanagement.js";
import Card from "./Card.jsx";

export default function Game() {
  const [deck, setDect] = useState(selectDeck());

  console.log(deck);
  const cards = deck.map((value, index) => (
    <Card key={index} id={index} name={value} />
  ));
  return (
    <>
      <div>{cards}</div>
    </>
  );
}
