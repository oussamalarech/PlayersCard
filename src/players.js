// Import images for each player from the local src folder

import messiImg from "./lionelmessi.png";
import ronaldoImg from "./cristianoronaldo.png";
import modricImg from "./modric.png";
import viniciusImg from "./vinicius.png";

// Create an array of player objects
// Each object contains details about a specific player

const players = [
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    nationality: "Argentina",
    jerseyNumber: 10,
    age: 38,
    image: messiImg,
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    nationality: "Portugal",
    jerseyNumber: 7,
    age: 40,
    image: ronaldoImg,
  },
  {
    name: "Luka Modric",
    team: "Ac Milan",
    nationality: "Croatia",
    jerseyNumber: 10,
    age: 40,
    image: modricImg,
  },
  {
    name: "Vinicius Junior",
    team: "Real Madrid",
    nationality: "Brazil",
    jerseyNumber: 7,
    age: 24,
    image: viniciusImg,
  },
];
export default players;
