import React, { useState } from "react";
import "./styles.css";

const food = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

var foodIteam = Object.keys(food);

export default function App() {
  const [inputMeaning, setInputMeaning] = useState("");

  // console.log(Object.keys(food));

  function clickInput(event) {
    var Meaning = event.target.value;
    var inputMeaning = food[Meaning];
    if (inputMeaning === undefined) {
      inputMeaning = "We dont have in our db";
    }
    setInputMeaning(inputMeaning);
  }
  function foodItemHandler(item) {
    var inputMeaning = food[item];
    setInputMeaning(inputMeaning);
    console.log(item);
  }

  return (
    <div className="App">
      <h1>Food and its name</h1>
      <input onChange={clickInput}></input>
      <h3>Meaning ~ {inputMeaning}</h3>
      <ul>
        {foodIteam.map((item) => {
          return (
            <span
              onClick={() => foodItemHandler(item)}
              key={item}
              style={{ fontSize: "20px", cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
