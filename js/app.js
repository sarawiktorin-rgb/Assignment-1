/*
Vi skapar en variabel med namnet "button".
Eftersom värdet inte kommer att ändras använder vi "const".
Med kommandot document.getElementById("button") hämtas elementet
som har id="button" från HTML-dokumentet och sparas i variabeln.
*/
const button = document.getElementById("button");

let clickCount = 0;
button.addEventListener("click", () => {
  // Öka räknaren med 1 varje gång knappen klickas.
  clickCount++;
  // Om det är första klicket - visa den första texten.
  if (clickCount === 1) {
    text.innerHTML = "Good job, you clicked the button!";
  }
  // Om det är andra, tredje, fjärde osv. klicket - visa antalet klick.
  else {
    text.innerHTML = `Good job, you clicked the button ${clickCount} times!`;
  }
});
