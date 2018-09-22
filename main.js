/*//muis op foto geeft melding in popupwindow eenvoudig slecht 1 listener to event
document.images.foto.onmouseover =
  function() {
    window.alert('Some help chickie??');
  };
*/

// om meerdere listerners to event te kunnen zetten;
var helpIcon = document.getElementById("foto");

function ShowHelpText() { window.alert('Some help chickie??'); } helpIcon.addEventListener("mouseover", ShowHelpText, false);

/*
// Alternatively, using an anonymous function
helpIcon.addEventListener("mouseover", function() { window.alert('Some help chickie??'); }, false);
*/

/*
// verwijderen addEventListener
helpIcon.removeEventListener("mouseover", ShowHelpText, false);
*/

//noteert onder document naam en thank you
  function sayThankYou() {
    var userName = document.getElementById("NameBox").value;
    var thankYou = document.createElement("p");
    thankYou.textContent = "Thank you " + userName;
    document.getElementById("thankYouArea").appendChild(thankYou);
  }
  document.getElementById("submit").addEventListener("click", sayThankYou);
