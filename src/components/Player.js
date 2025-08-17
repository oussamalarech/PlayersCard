// Import Bootstrap components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// Import smaller sub-components for displaying specific player details

import Name from "./Name";
import Nationality from "./Nationality";
import Team from "./Team";
import JerseyNumber from "./JerseyNumber";
import Age from "./Age";
import Image from "./Image";

// Player component
// Receives "playerss" as a prop (an object with player data: name, team, etc.)

function Player({ playerss }) {
  return (
    <div className="card">
      <Image image={playerss.image} name={playerss.name} />
      <Name name={playerss.name} />
      <hr />
      <Team team={playerss.team} />
      <hr />
      <Nationality nationality={playerss.nationality} />
      <hr />
      <JerseyNumber jerseyNumber={playerss.jerseyNumber} />
      <hr />
      <Age age={playerss.age} />
    </div>
  );
}

export default Player;
