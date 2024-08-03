import { useState } from "react";

export default function Button() {
  console.log("render");
  const [name, setName] = useState("fadi2");

  function buttonClicked() {
    if (name === "fadi") {
      setName("fadi2");
    } else {
      setName("fadi");
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md text-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
        onClick={buttonClicked}
      >
        Click me
      </button>
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
    </div>
  );
}
