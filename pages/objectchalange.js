import React, { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    score: 0,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <div className="space-y-4 p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-4">
        <label className="block text-sm font-medium text-gray-700">
          Score: <b>{player.score}</b>
        </label>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
          onClick={handlePlusClick}
        >
          +1
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          First name:
        </label>
        <input
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Last name:
        </label>
        <input
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
}
