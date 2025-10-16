/*
Vi skapar en variabel med namnet "button".
Eftersom värdet inte kommer att ändras använder vi "const" (konstant).
Med kommandot document.getElementById("button") hämtas elementet
som har id="button" från HTML-dokumentet och sparas i variabeln.
*/
const button = document.getElementById("button");

// Skapar en variabel med namnet "index" till 0.
let clickCount = 0;

// Lägger till en "eventListener" till knappen för varje klick.
button.addEventListener("click", () => {
  // Öka räknaren med 1 varje gång knappen klickas.
  clickCount++;
  // Om det är första klicket - visa den här texten texten.
  if (clickCount === 1) {
    text.innerHTML = "Good job, you clicked the button!";
  }
  // Om det är andra, tredje, fjärde osv. klicket - visa den här texten med antalet klick.
  else {
    text.innerHTML = `Good job, you clicked the button ${clickCount} times!`;
  }
});

// Skapar en konstant variabel som innehåller en lista med värden som inte ska/kan ändras.
const vegetables = ["Cucumber 🥒", "Tomato 🍅", "Lettuce 🥬", "Corn 🌽"];
// Skapar en konstant variabel som hämtar elementet med id "buttonVeg" i HTML-dokumentet.
const buttonVeg = document.getElementById("buttonVeg");
// Skapar en konstant variabel som hämtar elementet med id "listVeg" i HTML-dokumentet.
const listVeg = document.getElementById("listVeg");

// Sätter variabeln med namnet "index" till 0.
let index = 0;

// Lägger till en "eventListener" till knappen "buttonVeg" för varje klick.
buttonVeg.addEventListener("click", () => {
  // Om det finns fler grönsaker kvar i listan, lägg till nästa grönsak i listan
  if (index < vegetables.length) {
    const li = document.createElement("li");
    li.textContent = vegetables[index];
    listVeg.appendChild(li);
    index++;
    // Annars töm listan innan den börjar om från grönsak 1.
  } else {
    index = 0;
    listVeg.innerHTML = "";
  }
});
