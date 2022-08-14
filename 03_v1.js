/* При запуске игры компьютер генерирует случайное 3 - 6 значное число.
Затем запрос ввода числа от игрока.
Функция принимает оба числа, разбивает их на массив и переносит данные массивов в карту (Map),
где ключ - цифра, массив индексов данной цифры в числе - значение. 
Далее алгоритм сравнивает совпадение значений карты для каждого ключа. 
Если индекс из одного массива включен в другом  - число на своем месте, если нет, идет более сложная проверка. 
Все это включено в цикл из 10 ходов и проверка на соответсвие параметров числа
*/


const readlineSync = require('readline-sync'); 
const secretNumber = Math.floor(Math.random() * (1000_000 - 100) + 100);
// const secretNumber = 81537;

const secret = secretNumber.toString().split(''); // array from number
function letPlayGame() {
    for (let i = 0; i < 10; i++) {
        let pickedNumber = +readlineSync.question(`Put a  number:  ${secret.length} digits`);
        const picked = pickedNumber.toString().split('');
        if (!(typeof pickedNumber === 'number') || !(secret.length === picked.length) ) return console.log('Некорректное число')
        if (pickedNumber - secretNumber === 0) {
            return console.log('Вы угадали, поздравляю')
        } 
        checkNumbers(secret, picked);
      
    }
    return console.log("Хватит гадать, попытки закончились")
}

// let pickedNumber = +readlineSync.question(`Put a  number?  ${secret.length}`);
// const picked = pickedNumber.toString().split('');



function checkNumbers(secret, picked) {
    const mapSecretNum = {}
    
    const mapPickedNum = JSON.parse(JSON.stringify(mapSecretNum));

    const secretNumMap = new Map(Object.entries(mapSecretNum));
    const pickedNumMap =  new Map(Object.entries(mapPickedNum));
 
sortIndex(secret, secretNumMap);
sortIndex(picked, pickedNumMap);

// const correctNumAndPlace = [];
// const correctNum = [];

let answer = compareNumbers(secretNumMap, pickedNumMap);

console.log(`ответ: совпавших цифр на своих местах - ${answer[0].length} (${answer[0]}), цифр не на своих местах - ${answer[1].length} (${Array.from(new Set (answer[1]))})`)
// console.log(secretNumber)
return secretNumber;
}

//================================

function sortIndex(num, map) {
for (let i = 0; i < num.length; i++) {
     (map.has(num[i])) ? map.set(num[i], [...map.get(num[i]), i]) : map.set(num[i], [i]);
 
}
// console.log(`${map}` ,map)
}

function compareNumbers(mapOne, mapTwo) {
    const correctNumAndPlace = [];
    const correctNum = [];

for (let [key, value] of mapOne.entries()) {
    // console.log(key, value)
if (mapTwo.has(key)) {
    mapTwo.get(key).forEach((index) => {
        if ( value.includes(index))  {
            correctNumAndPlace.push(key)
        } else  if ( value.length >= mapTwo.get(key).length || secret.includes(key) ) correctNum.push(key)});
    // console.log(key, correctNumAndPlace, correctNumAndPlace)
}


}

const result = [correctNumAndPlace, correctNum]
return result;
}

letPlayGame();


// console.log(mapSecretNum);
// console.log(secretNumMap)