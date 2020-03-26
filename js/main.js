// DESCRIZIONE:
// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


// creazione variabili per memorizzare i numeri e quelli oggetto di operazioni
var Num, NumDiv3, NumDiv5 ;
NumDiv3 = (Num%3==0)

// crea ciclo che inizia da 1 a 100 & che aumenta di una unità
for (var Num = 1; Num <= 100; Num++) {

// se il numero è un multiplo di 3 (ovvero il modulo di 3 da resto 0) la variabile numero deve stampare "Fizz"
if (Num%3==0) {

  console.log("Fizz");
}

 // altrimenti se il numero è un modulo di 5 (quindi il modulo da resto 0) deve stampare "Buzz"
else if (Num%5==0) {
  console.log("Buzz");
}
 // AND se il numero è modulo di 3 + modulo di 5 allora deve stampare "FizzBuzz"
else if (Num%3 == 0 & Num%5 == 0) {
  console.log("FizzBuzz");
}
// in caso contrario deve stampare (o restituire) solo il numero.
else {
  console.log(Num);
}

}
