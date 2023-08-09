import { useState } from "react";
import React from "react";
import "./App.css";
import affirmations from "./affirmations";

function App() {
  const [currentAffirmation, setCurrentAffirmation] = useState("");

  const generateAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  return (
    <div>
      <h1 id="title">Affirmation Generator</h1>
      <p class="currentAff">{currentAffirmation}</p>
      <button onClick={generateAffirmation}>Generate Affirmation</button>
      <br />
      <div>
        <form className="userForm">
          <label>
            Enter your name:
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
