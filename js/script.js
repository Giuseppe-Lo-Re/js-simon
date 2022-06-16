// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// - Visualizzare in un alert 5 numeri casuali:

// Dichiaro una variabile che conterrà il numero dei numeri da indovinare nel gioco:
let numberOfElements = 5;

// Invoco la funzione per genererà un array di numeri random, salvando il valore in una variabile:
const randomNumbersArray = arrayRndIntergerGenerator(numberOfElements, 1, 100);
// console.log(randomNumbersArray)

// Mostro i numeri casuali all'utente attraverso un alert:
alert(randomNumbersArray);

// - 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta,
//      i numeri che ha visto precedentemente, tramite il prompt():

// Creo una timing function: 
const clock = setTimeout(function() {

    // Inizializzo l'array che conterrà i numeri che ci fornità l'utente:
    let userNumbersArray = [];

    // Dichiaro la variabile che conterrà i numeri che ci fornirà l'utente:
    let userNumbers;

    // Creo un ciclo for che funzionerà per il numero di numeri da inserire:
    for(let i=0; i < numberOfElements; i++) {
    
        // In una variabile registro i numeri che l'utente dovrà inserire attraverso un prompt e li trasformo in numeri con parseInt:
        userNumbers = parseInt(prompt('Inserisci, uno alla volta, i 5 numeri'));

        // Se il numero  è incluso nel array dei numeri random: 
        if(randomNumbersArray.includes(userNumbers)) {

        // lo inserisco nell'array dei numeri utenti:
        userNumbersArray.push(userNumbers); 
        // console.log(userNumbersArray)
    }
    }

    // Comunico all'utente quanti e quali numeri sono stati indovinati:
    alert(`hai indovinato ${userNumbersArray.length} numeri ${userNumbersArray}`)  

    // La funzione si attiverà dopo 30000 millisecondi(= 30 secondi) dalla chiusura dell'alert:
}, 30000);

    












// -------------------------------------------------- //
//                  UTILITY FUNCTION                  //
// -------------------------------------------------- // 

// GENERATORE DI ARRAY DI NUMERI RANDOM:
// numberOfElements -> numero elementi dell'array;
// rangeMin -> Range minimo dei numeri random;
// rangeMax -> Range massimo dei numeri random;
// return: array di numeri random.

function arrayRndIntergerGenerator(numberOfElements, rangeMin, rangeMax) {

    // Dichiaro un array vuoto che verrà poi popolato dai numeri random:
    const randomNumberArray = [];
    
    // Creo un ciclo while che funzionerà finchè la lunghezza dell'array sarà inferiore al numero elementi dell'array:
    while(randomNumberArray.length < numberOfElements) {

        // creo un numero random tra rangeMin e rangeMax:
        const randomNumber = getRndInterger(rangeMin, rangeMax);

        // Che verrà pushato solo se diverso da quelli presenti:
        if(!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }
    }
    
    // Restituisco il valore dell'array di numeri random:
    return randomNumberArray;
}

// GENERATORE DI NUMERI RANDOM:
function getRndInterger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}