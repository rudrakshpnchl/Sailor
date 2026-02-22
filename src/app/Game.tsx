import { useState } from "react";

interface GameMode {
  word: string;
  hints: {
    hint1: string;
    hint2: string;
    hint3: string;
  };
}

export default function Game({ gamemode }: { gamemode: GameMode[] }) {
  const [game, setGame] = useState(0);
  const [isGuessed, setIsGuessed] = useState(false);
  const [input, setInput] = useState("");
  const [incorrectGuess, setIncorrectGuess] = useState(1);

  const isNext = game < gamemode.length - 1;

  function handleSubmit() {
    if (input.toLowerCase() === gamemode[game].word.toLowerCase()) {
      setIsGuessed(true);
    } else {
      alert("Incorrect Guess, Try Again!!");
      setIncorrectGuess(incorrectGuess + 1);
    }
  }

  function handleNextClick() {
    if (isGuessed && isNext) {
      setGame(game + 1);
      setIsGuessed(false);
      setInput("");
      setIncorrectGuess(1);
    } else if (!isGuessed) {
      alert("Guess the Word to go to the next level.");
    } else {
      alert("Congratulations, You  have Finished the game.!!");
      location.reload();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div hidden={!isGuessed} className="flex flex-col gap-3">
          <h2 className="bg-green-300 p-1 inline rounded-md font-semibold self-start">
            {gamemode[game].word}
          </h2>
          <p>Congrats!! You Guessed the Word Correctly!!</p>
        </div>
        <div className="mb-3">Length of Word: {gamemode[game].word.length}</div>
        {/* hints */}
        <hr />
        <div className="mt-3">
          <h3>Hints:</h3>
          <p>1. {gamemode[game].hints.hint1}</p>
          <p hidden={incorrectGuess <= 3}>2. {gamemode[game].hints.hint2}</p>
          <p hidden={incorrectGuess <= 5}>3. {gamemode[game].hints.hint3}</p>
        </div>
      </div>
      <hr />
      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          className="p-1 border-2 rounded-md"
          placeholder="Guess the Word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="button"
          className="border-2 p-1 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="border-2 p-1 rounded-md"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}
