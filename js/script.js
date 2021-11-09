/**
 * Generare 5 numeri random e stamparli in html
 * dopo 30 secondi chiedere all'utente 5 numeri
 * se i numeri corrispodono ai numeri random, output "hai indovinato 'TOT' numeri"
 */
const NUMBER_TO_PUSH = 5;
const randomNumbers = [];
let timeSeconds = 1;
// numeri ricordati
let strikes = 0;
//Riempio l'array con numeri random
pushNumbers();

//stampo i numeri i html
printNumbers();

//faccio scorrere 30 sec
console.log(timeSeconds);

const countDown = setInterval(() => {
   timeSeconds--;
   console.log(timeSeconds);
   if (timeSeconds === 0) {

      clearInterval(countDown);
      
      readInputNumbers();

      //stampo quantitá numeri ricordati
      document.querySelector('.content_numbers').innerHTML = `
         <h1 class="strikes">Hai ricordato ${strikes} numeri</h1>
      `;
   }
}, 1000);


/**********
 * FUNZIONI
********* */

function pushNumbers() {
      
   while (randomNumbers.length < NUMBER_TO_PUSH) {
      
      const number = getRandomNumber(1, 100);

      //controllo doppioni
      if (!randomNumbers.includes(number)) {
         randomNumbers.push(number);
      }
   }
}


function getRandomNumber(min, max) {
   
   return Math.floor(Math.random() * (max - min + 1) + min);
}


function printNumbers() {
   
   const contentNumbers = document.querySelector('.content_numbers');

   randomNumbers.forEach(number => {
      
      contentNumbers.innerHTML += `<h1>${number}</h1>`;
   });
}


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


function checkStrike(n) {
   
   if (randomNumbers.includes(n)) {
      
      //incremento i numeri ricordati
      strikes++;
   }
}