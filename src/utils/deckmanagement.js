import { cards } from "../config/cards.js";

export const selectDeck = function () {
  const shuffledLettersSubset = [...cards]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);
  const shuffledPairs = shuffledLettersSubset.reduce(function (res, current) {
    return res.concat([current, current]);
  }, []);
  const shuffledOnce = shuffledPairs.sort((a, b) => 0.5 - Math.random());
  const shuffledTwice = shuffledOnce.sort((a, b) => 0.5 - Math.random());
  const readyDeck = shuffledTwice.map((element) => ({
    name: element,
    shown: false,
  }));
  console.log(readyDeck);
  return readyDeck;
};
