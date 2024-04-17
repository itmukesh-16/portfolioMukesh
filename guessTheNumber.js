var randomNumber;
function GenerateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
}

function CheckGuess() {
  var GuessedNumber = document.getElementById("txtInputNumber").value;
  var Number = parseInt(GuessedNumber);

  if (randomNumber == Number) {
    document.getElementById("show-result").innerHTML =
      `<br<br><h1> ${Number} <br> Correct Guess</h1>`.fontcolor("green");
    document.getElementById("txtInputNumber").value = "";
  } else if (Number > randomNumber) {
    document.getElementById("show-result").innerHTML =
      `<br<br><h1> ${Number} <br> is Overvalued </h1>`.fontcolor("red");
    document.getElementById("txtInputNumber").value = "";
  } else {
    document.getElementById(
      "show-result"
    ).innerHTML = `<br<br> <h1> ${Number} <br> is UnderValued </h1>`;
    document.getElementById("txtInputNumber").value = "";
  }
}
