//CREAZIONE BOMBE
var listBomb = [];
var size = 2;

while (listBomb.length < size){

    var number = genRandom ( 100, 1 );

    if (listBomb.includes(number) === false){
          listBomb.push(number);
    }
}
console.log(listBomb);

function genRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;  
}


//RICHIESTA DATI UTENTE
var listUtente = [];
var sizeUtente = 6;

while ( listUtente.length < sizeUtente){
    var numeroUtente = parseInt ( prompt ('inserire un numero compreso tra 1 e 100') );
    
    if (listUtente.includes(numeroUtente) === false){
         listUtente.push(numeroUtente);
  }
}
console.log(listUtente);