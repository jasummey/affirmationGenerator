import React from "react";
import "./App.css";

import AffirmationGenerator from "./AffirmationGenerator";

function App() {
  // const [currentAffirmation, setCurrentAffirmation] = useState("");

  // const generateAffirmation = () => {
  //   const randomIndex = Math.floor(Math.random() * affirmations.length);
  //   setCurrentAffirmation(affirmations[randomIndex]);
  // };

  return (
    <div>
      <AffirmationGenerator />
      {/* <h1 id="title">Affirmation Generator</h1>
      <p class="currentAff">{currentAffirmation}</p>
      <button onClick={generateAffirmation}>Generate Affirmation</button>
      <br /> */}
    </div>
  );
}

export default App;
