/**
 * Generare 5 numeri random e stamparli in html
 * dopo 30 secondi chiedere all'utente 5 numeri
 * se i numeri corrispodono ai numeri random, output "hai indovinato 'TOT' numeri"
 */
const NUMBER_TO_PUSH = 5;
const randomNumbers = [];
//30 secondi di attesa
let timeSeconds = 30;
// numeri ricordati
let strikes = 0;
//contenitore numberi DOM
const contentNumbers = document.querySelector('.content_numbers');
//contenitore Count Down
const countDownDOM = document.getElementById('countDown');
//Riempio l'array con numeri random
pushNumbers();

//stampo i numeri i html
printNumbers();

countDownDOM.innerHTML = `Count Down: ${timeSeconds}`;
//faccio scorrere 30 sec
const countDown = setInterval(() => {
   timeSeconds--;
   printCountDown();
   console.log(timeSeconds);
   
   if (timeSeconds === 0) {

      //stoppo il count down
      clearInterval(countDown);
      //azzero il display DOM
      contentNumbers.innerHTML = '';
      //count down finito
      countDownDOM.innerHTML = `Count Down finito`;
      
      //leggo e confronto i numeri inseriti dall'utente
      readInputNumbers();

      //stampo quantitá numeri ricordati
      printResult();
   }
}, 1000);


/**********
 * FUNZIONI
********* */
/**
 * funzione che pusha dentro l'array tot numeri random e controlla se ci siano dopponi
 */
function pushNumbers() {
      
   while (randomNumbers.length < NUMBER_TO_PUSH) {
      
      const number = getRandomNumber(1, 100);

      //controllo doppioni
      if (!randomNumbers.includes(number)) {
         randomNumbers.push(number);
      }
   }
}

/**
 * funzione che genera un numero random intero da min a max
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function getRandomNumber(min, max) {
   
   return Math.floor(Math.random() * (max - min + 1) + min);
}


function printNumbers() {

   randomNumbers.forEach(number => {
      
      contentNumbers.innerHTML += `<h1>${number}</h1>`;
   });
}

/**
 * funzione che legge tot numeri in input con relativi controlli di range
 */
function readInputNumbers() {
   //chiedo il numero per 5 volte e lo pusho
   for (let i = 0; i < NUMBER_TO_PUSH; i++) {
      let number;
      //controllo validitá
      do {
         //input numero
         number = parseInt(prompt('Inserisci un numero da 1 a 100'));
         if (number < 1 || number > 100) {
            alert('Inserisci un numero compreso tra 1 e 100! :)')
         }
      } while (number < 1 || number > 100);
      
      console.log('hai scelto', number);

      checkStrike(number);
   }
   // console.log('userInputNumber',userInputNumber);
}

/**
 * funzione che controlla se il numero input inserito é incluso nell'array
 * @param {Number} n 
 */
function checkStrike(n) {
   
   if (randomNumbers.includes(n)) {
      
      //incremento i numeri ricordati
      strikes++;
   }
}

/**
 * funzione che stampa in DOM il risultato dei numeri indovinati
 */
function printResult() {
   //stampe differenti in base al numeri di strikes
   if (!strikes) {

      contentNumbers.innerHTML = `
         <h1 class="strikes">Non hai ricordato nessun numero</h1>
      `;
   } else if (strikes === randomNumbers.length) {
      
      contentNumbers.innerHTML = `
         <h1 class="strikes">Hai ricordato tutti e ${strikes} i numeri. Congratulazioni!</h1>
      `;
   } else {

      contentNumbers.innerHTML = `
         <h1 class="strikes">Hai ricordato ${strikes} numeri</h1>
      `;
   }
}

/**
 * funzione che stampa il countdown
 */
function printCountDown() {
   
   countDownDOM.innerHTML = `Count Down: ${timeSeconds}`;
}