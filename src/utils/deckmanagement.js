import { cards } from "../config/cards.js";

export const selectDeck = function () {
  const shuffledLettersSubset = [...cards]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
  const shuffledPairs = shuffledLettersSubset.reduce(function (res, current) {
    return res.concat([current, current]);
  }, []);
  //another shuffle,so that same cards are not next to each other
  return shuffledPairs.sort((a, b) => 0.5 - Math.random());
};
