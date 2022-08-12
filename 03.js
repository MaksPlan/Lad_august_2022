// Нужен цикл  - это кол-во попыток
// Нужна функция сравнения введеного числа с загаданным 
// Генерация числа идет в заданом диапазоне от 3 до 6 цифр


const readlineSync = require('readline-sync'); 
let secret = Math.floor(Math.random() * (1000_000 - 100) + 100);
// let secret = 163391;


 (function findNumber() {
   
    const numLength = secret.toString().length;
    let picked = +readlineSync.question(`Put a  number?  ${numLength}`);
    console.log(`Вы ввели ${picked}`)
    picked = picked.toString().split('');
secret = secret.toString().split('');
    if (picked.length !== secret.length) {
        console.log('Ввели некорректное число!!!')
      } else {
        checkNumber(picked, secret)
      }

 
 })();

 function checkNumber(picked, secret) {
    
// if (picked.length !== secret.length) {
//   return  console.log('Ввели некорректное число!!!')
// }
// picked = picked.toString().split('');
// secret = secret.toString().split('');
let decrrisedSecretNum = secret;
let counterRightNumAndplace = 0;
let counterRightNum = 0;
let setRightNumAndPlace = new Set();
let setRightNum = new Set();

 picked.forEach((numP, i) => {
if (numP === secret[i] ) {
    setRightNumAndPlace.add(numP);
    counterRightNumAndplace++;
    decrrisedSecretNum.slice(i, i+1)
    } else if (secret.indexOf(numP, i) <= i && !setRightNumAndPlace.has(numP) && secret.includes(numP)) {
        setRightNum.add(numP);
        counterRightNum++;
    }
})

setRightNumAndPlace = Array.from(setRightNumAndPlace)
setRightNum = Array.from(setRightNum)
// setRightNum.forEach((num) => {if (setRightNumAndPlace.includes(num)) })

console.log(`ответ: совпавших цифр на своих местах - ${counterRightNumAndplace} (${setRightNumAndPlace}), цифр не на своих местах - ${counterRightNum} (${setRightNum})`)
return console.log(`Загаданное число ${secret.join('')} `)
 }

/*Вы ввели 666553
ответ: совпавших цифр на своих местах - 1 (6), цифр не на своих местах - 2 (6,3)
Загаданное число 163391 */

/*
Вы ввели 453467
ответ: совпавших цифр на своих местах - 0 (), цифр не на своих местах - 1 (7)
Загаданное число 171225 */