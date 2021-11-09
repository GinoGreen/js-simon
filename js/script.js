/**
 * Generare 5 numeri random e stamparli in html
 * dopo 30 secondi chiedere all'utente 5 numeri
 * se i numeri corrispodono ai numeri random, output "hai indovinato 'TOT' numeri"
 */
 const NUMBER_TO_PUSH = 5;
 const randomNumbers = [];


pushRandomNumbers();


/**********
 * FUNZIONI
********* */

function pushRandomNumbers() {
      
   while (randomNumbers.length < NUMBER_TO_PUSH) {
      
      const number = getRandomNumber(1, 100);

      //controllo doppioni
      if (!randomNumbers.includes(number)) {
         randomNumbers.push(number);
      }
   }
   // console.log(randomNumbers);
      
}


function getRandomNumber(min, max) {
   
   return Math.floor(Math.random() * (max - min + 1) + min);
}