import { useState } from "react";
import Game from "./Game";
import easyWords from "./gameData/gameDataEasyLevel";
import mediumWords from "./gameData/gameDataMediumLevel";
import hardWords from "./gameData/gameDataHardLevel";

export default function GameMode() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  function handleGameModeClick(mode: string) {
    setSelectedMode(mode);
  }

  const modes: { [key: string]: typeof easyWords } = {
    Easy: easyWords,
    Medium: mediumWords,
    Hard: hardWords,
  };

  if (selectedMode) {
    return (
      <div className="border-2 p-4 rounded-xl">
        <Game gamemode={modes[selectedMode]} />
      </div>
    );
  }

  return (
    <div className="border-2 p-6 rounded-md flex flex-col gap-4">
      <h1 className="font-semibold text-lg md:text-2xl">
        Choose a Game Mode On the Basis of Difficulty Level
      </h1>
      <hr />
      <div className="flex justify-evenly flex-wrap gap-4">
        <Button mode={"Easy"} onClick={handleGameModeClick} />
        <Button mode={"Medium"} onClick={handleGameModeClick} />
        <Button mode={"Hard"} onClick={handleGameModeClick} />
      </div>
    </div>
  );
}

function Button({
  mode,
  onClick,
}: {
  mode: string;
  onClick: (mode: string) => void;
}) {
  return (
    <button
      className="border-2 p-1 rounded-md w-30"
      onClick={() => onClick(mode)}
    >
      {mode}
    </button>
  );
}
