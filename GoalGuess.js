
import React, { useState } from "react";

const player = {
  name: "Cristiano Ronaldo",
  videoSilhouette: "/ronaldo_silhouette.mp4",
  videoReveal: "/ronaldo_goal.mp4",
  club: "Real Madrid",
  nationality: "Portugal",
  position: "Forward"
};

function GoalGuess() {
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    setAttempts(attempts + 1);
    if (guess.toLowerCase() === player.name.toLowerCase()) {
      setRevealed(true);
    }
  };

  return (
    <div>
      <video src={revealed ? player.videoReveal : player.videoSilhouette} controls autoPlay loop width="400" />
      <input value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Guess the player..." />
      <button onClick={handleGuess}>Submit</button>
      <p>{attempts} / 6 attempts used</p>
      {revealed && <div>
        <p>Correct! It was {player.name}</p>
        <p>Club: {player.club}</p>
        <p>Nationality: {player.nationality}</p>
        <p>Position: {player.position}</p>
      </div>}
    </div>
  );
}

export default GoalGuess;
