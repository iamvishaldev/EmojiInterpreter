import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😲": "disbelief",
  "😴": "sad",
  "🚰": "takeoutbox",
  "❤": "love",
  "😑": "anonyance"
};

let emojiweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiHandler = (e) => {
    let userInput = e.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiHandler}></input>
      <h1> {meaning}</h1>
      {emojiweknow.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
