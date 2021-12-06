var billAmount = document.querySelector("#bill-Amount");
var checkButton = document.querySelector("#check-Button");
var cashGiven = document.querySelector("#cash-Given");
var errorMessage = document.querySelector("#alert-Message");
var givenNote = document.querySelectorAll(".no-Notes");

var valueOfNotes = [2000, 500, 200, 100, 50, 20, 10, 1];

function clickerevent() {
    errorMessage.innerText="";
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      changeGiven = cashGiven.value - billAmount.value;
      for (i = 0; i < valueOfNotes.length; i++) {
        noofNotes = Math.trunc(changeGiven / valueOfNotes[i]);
        changeGiven = changeGiven % valueOfNotes[i];
        console.log(valueOfNotes[i], noofNotes);
        givenNote[i].innerText = noofNotes;
      }
    } else {
      errorMessage.innerText = " Cash given should be greater than Bill Amount";
    }
  } else {
    errorMessage.innerText = "Bill Amount should be greater than 0 ";
  }
}

checkButton.addEventListener("click", clickerevent);


