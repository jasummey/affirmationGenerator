import { useState } from "react";
import affirmations from "./affirmations";

const AffirmationGenerator = () => {
  const [affirmation, setAffirmation] = useState("");
  const [email, setEmail] = useState("");

  const generateAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeToEmail = () => {
    // Validate the email before sending
    if (!email) {
      console.log("Please enter a valid email.");
      return;
    }

    // Construct the API endpoint URL
    const endpoint = "https://localhost:3000/subscribe";

    // Prepare the data for the request
    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Send the email in the request body
    };

    // Make the API request
    fetch(endpoint, requestData)
      .then((response) => {
        if (response.ok) {
          console.log("Email subscribed successfully!");
          // Clear the email input field after subscribing
          setEmail("");
        } else {
          console.log("Failed to subscribe email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Affirmation Generator</h2>
      <p>{affirmation}</p>
      <button onClick={generateAffirmation}>Generate Affirmation</button>

      <h2>Subscribe to Email Affirmations</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={subscribeToEmail}>Subscribe</button>
    </div>
  );
};

export default AffirmationGenerator;
