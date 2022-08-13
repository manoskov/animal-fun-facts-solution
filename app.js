import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";

let background = (
  <img className="background" alt="ocean" src="images/ocean.jpg" />
);

const images = [];

function displayFact(e) {
  const animalName = e.target.alt;
  const optionIndex = Math.floor(
    Math.random() * animals[animalName].facts.length
  );
  let funFact = animals[animalName].facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

let showBackground = true; // change this to 'false' hide background

const animalFacts = (
  <div>
    <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      src={animals[animal].image}
      className="animal"
      alt={animal}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

ReactDOM.render(animalFacts, document.getElementById("root"));
