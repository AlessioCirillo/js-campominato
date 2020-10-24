
//CREAZIONE BOMBE
var listBomb = [];
var nBombe = 2;

while (listBomb.length < nBombe){

    var bombe = genRandom ( 100, 1 );

    if (listBomb.includes(bombe) === false){
          listBomb.push(bombe);
    }
}
console.log(listBomb);

function genRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;  
}


//RICHIESTA DATI UTENTE
var listUtente = [];
var sizeUtente = 6;
var counter = [];

while ( listUtente.length < sizeUtente){

    var numeroUtente = parseInt ( prompt ('inserire un numero compreso tra 1 e 100') );
    
    if (listUtente.includes(numeroUtente) === false) {
        listUtente.push(numeroUtente);
        counter ++;
        console.log('il tuo punteggio',counter);
    } else {
        alert ('Hai già inserito questo nuemro')
    }

    if(listBomb.includes(numeroUtente)){
        alert ('hai perso.')
        document.getElementById('punteggio').innerHTML ='il tuo punteggio è: ' + (counter - 1);
        break;
    } else {
        document.getElementById('punteggio').innerHTML ='hai vinto e hai totalizzato un punteggio di: ' + (counter);
    }
}

console.log(listUtente);







