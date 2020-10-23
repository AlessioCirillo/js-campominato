//CREAZIONE BOMBE
var listBomb = [];
var size = 16;

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
