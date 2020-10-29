// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// il computer genera 16 numeri casuali tra 1 e 100
var arrayNumeri = [];
while(arrayNumeri.length < 16){
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    //rimuovo i doppioni nei numeri random
    if(arrayNumeri.indexOf(numeroRandom) === -1) {
      arrayNumeri.push(numeroRandom);
    }
}
console.log(arrayNumeri);

// il computer chiede all’utente 84 volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var arrayUtente = [];
var minaTrovata = false;

while(arrayUtente.length <= 84 && minaTrovata == false) {

  var inserireInput = prompt("inserisci un numero da 1 a 100");
  // non permetto all'utente di inserire un numero oltre 100 o prima dell'1.
  if (inserireInput > 100 || inserireInput < 1) {
      alert("non puoi inserire un numero prima di 1 e oltre 100");
  // l’utente non può inserire più volte lo stesso numero.
  } else if (arrayUtente.includes(inserireInput) == true) {
    alert("hai inserito due volte lo stesso numero");
  // se il numero è presente nella lista dei numeri generati, la partita termina
  } else if (arrayNumeri.includes(inserireInput) == true) {
    alert("game over");
    minaTrovata = true;
    // faccio inserire il numero normalmente
  } else {
    arrayUtente.push(inserireInput);
    console.log(inserireInput);
  }
}

document.getElementById("risultato").innerHTML = "IL PUNTEGGIO MASSIMO RAGGIUNTO E': " + listUt.length;
