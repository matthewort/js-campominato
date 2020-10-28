// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// var arrayNumeri = [];
// for (var i = 1; i <= 16; i++) {
//   var numeroRandom = Math.floor(Math.random() * 100) + 1;
//   console.log(numeroRandom);
// }

// il computer genera 16 numeri casuali tra 1 e 100
var arrayNumeri = [];
while(arrayNumeri.length < 16){
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    //rimuovo i doppioni nei numeri random
    if(arrayNumeri.indexOf(numeroRandom) === -1) arrayNumeri.push(numeroRandom);
    i++;
}
console.log(arrayNumeri);

// il computer chiede all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
for (var i = 1; i <= 84; i++) {
  var inserireInput = prompt("inserisci un numero")
  console.log(inserireInput);
  if (inserireInput > 100) {
    inserireInput = Math.max(100);
  } else {

  }

}
