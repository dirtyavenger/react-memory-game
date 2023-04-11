import React, { useState } from "react";
import { selectDeck } from "../utils/deckmanagement.js";
import Card from "./Card.jsx";
import Score from "./Score.jsx";
import Navbar from "./Navbar.jsx";
import "../css/gameContainer.css";

export default function Game() {
  const [deck, setDeck] = useState(selectDeck());
  const [uncovered, setUncovered] = React.useState([]);
  const [score, setScore] = React.useState(0);

  //  on Card click handler
  function onCardClick(cardIndex) {
    console.log("Karticka:" + cardIndex);

    toggleCardShown([cardIndex]);
    setUncovered((prev) => {
      const newUncovered = [...uncovered];
      newUncovered.push(cardIndex);
      return newUncovered;
    });
  }
  // on new game Button click handler
  function onNewGameHandler() {
    setDeck(selectDeck());
    setScore(0);
  }
  //function to toggle the shown prop of cards
  function toggleCardShown(indexes) {
    console.log("Karticky:" + indexes);
    setDeck((prev) => {
      const updatedDeckData = prev.map((cardData, index) => {
        if (indexes.includes(index)) {
          cardData.shown = !cardData.shown;
          return cardData;
        } else return cardData;
      });
      return updatedDeckData;
    });
  }
  React.useEffect(evaluatePair, [uncovered]);
  // function to handle evaluatio of 2 uncovered cards
  function evaluatePair() {
    console.log("evaluate pairs runs");
    console.log(uncovered);
    if (uncovered.length < 2) return;
    else {
      if (deck[uncovered[0]].name === deck[uncovered[1]].name) {
        setScore((prev) => prev + 1);
        console.log("Score: " + score);
      } else {
        setTimeout(() => {
          toggleCardShown(uncovered);
        }, 2000);
      }
      setTimeout(() => setUncovered([]), 2000);
    }
  }

  //map over deck to prepare JSX to display
  const cards = deck.map((cardData, index) => {
    console.log(cardData);
    return (
      <Card
        onClick={onCardClick.bind(this)}
        twoUncovered={uncovered.length === 2 ? true : false}
        key={index}
        index={index}
        name={cardData.name}
        shown={cardData.shown}
      />
    );
  });
  console.log(deck);
  return (
    <>
      <Navbar onClick={onNewGameHandler} />
      <Score currentScore={score} />
      <section className="gameContainer">{cards}</section>
    </>
  );
}
