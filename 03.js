// Нужен цикл  - это кол-во попыток
// Нужна функция сравнения введеного числа с загаданным 
// Генерация числа идет в заданом диапазоне от 3 до 6 цифр


const readlineSync = require('readline-sync'); 

 (function findNumber() {
    const secretNumber = Math.floor(Math.random() * (1000_000 - 100) + 100);
    const pickNumber = +readlineSync.question(`Put a  number?_${secretNumber}`);
    checkNumber(pickNumber, secretNumber)
 })();

 function checkNumber(picked, secret) {
if (picked.length !== secret.length) {
    console.log('Ввели некорректное число!!!')
    return 'Ввели некорректное число!!!'
}
picked = picked.toString().split('');
secret = secret.toString().split('');
let counterRightNumAndplace = 0;
let counterRightNum = 0;
let setRightNumAndPlace = new Set();
let setRightNum = new Set();

 picked.forEach((numP, i) => {
if (numP === secret[i] ) {
    setRightNumAndPlace.add(numP);
    counterRightNumAndplace++;
    } else if (secret.indexOf(numP, i) && !setRightNum.has(numP)) {
        setRightNum.add(numP);
        counterRightNum++;
    }
})

setRightNumAndPlace = Array.from(setRightNumAndPlace)
setRightNum = Array.from(setRightNum)
// setRightNum.forEach((num) => {if (setRightNumAndPlace.includes(num)) })
console.log(`ответ: совпавших цифр на своих местах - ${counterRightNumAndplace} (${setRightNumAndPlace}), цифр не на своих местах - ${counterRightNum} (${setRightNum})`)
return `ответ: совпавших цифр не на своих местах - ${counterRightNumAndplace} (${setRightNumAndPlace}), цифр на своих местах - ${counterRightNum} (${setRightNum})`
 }

