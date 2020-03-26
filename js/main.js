// DESCRIZIONE:
// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


// creazione variabile Num per memorizzare un numero oggetto di un'operazione
var Num

// crea ciclo che inizia da 1 a 100 e che aumenta di una unità ognivolta
for (var Num = 1; Num <= 100; Num++) {

// se il numero è un multiplo di 3 (ovvero il modulo di 3 da resto 0) e di cinque (idem), devi stampare la parola "FizzBuzz"
if (Num%3 == 0 && Num%5 ==0) {
  console.log("FizzBuzz");
}

// altrimenti se il numero è modulo di 3 devi stampare la parola "Fizz"
else if (Num%3 ==0) {
 console.log("Fizz");
}

 // altrimenti se il numero è un modulo di 5 (quindi il modulo da resto 0) deve stampare "Buzz"
else if (Num%5==0) {
  console.log("Buzz");
}

// altrimenti nel caso in cui non rientri nella condizioni di cui sopra deve stampare solo il numero a video.
else {
  console.log(Num);
}

}
