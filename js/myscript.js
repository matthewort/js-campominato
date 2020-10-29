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
    if(arrayNumeri.indexOf(numeroRandom) === -1) arrayNumeri.push(numeroRandom); {
    }
    i++;
}
console.log(arrayNumeri);

// il computer chiede all’utente 84 volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var arrayUtente = [];
var minatrovata = false;
var i = 0;
while(arrayUtente.length <= 84 && minatrovata == false) {

  var inserireInput = prompt("inserisci un numero");
  // se il numero è presente nella lista dei numeri generati, la partita termina
  if (arrayNumeri.includes(inserireInput) == true) {
    alert("game over");
    minatrovata == true;
    // non permetto all'utente di inserire un numero oltre 100 o prima dell'1.
  } else if (inserireInput > 100 || inserireInput < 1) {
    alert("non va");
    // l’utente non può inserire più volte lo stesso numero.
  } else if (arrayUtente.includes(inserireInput) == true) {
    alert("no");
    // costringo l'utente a inserire un numero entro il 100.
  } else if (inserireInput < 100) {
    console.log(inserireInput);
  }

  i++
}
