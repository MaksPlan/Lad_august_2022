// Монстр Лютый
const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
};

// Маг Евстафий
const moves =  [
    {
        "name": "Удар боевым кадилом",
        "physicalDmg": 2,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 50,
        "cooldown": 0
    },
    {
        "name": "Вертушка левой пяткой",
        "physicalDmg": 4,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 4
    },
    {
        "name": "Каноничный фаербол",
        "physicalDmg": 0,
        "magicDmg": 5,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 3
    },
    {
        "name": "Магический блок",
        "physicalDmg": 0,
        "magicDmg": 0,
        "physicArmorPercents": 100,
        "magicArmorPercents": 100,
        "cooldown": 4
    },
];

const readlineSync = require('readline-sync'); //для написания кириллицы в терминале напишите chcp 65001


//Деструктуризация статов Лютого
let {maxHealth: monsterHealth, name, moves: monsterMoveSet} = monster

//Хранилище кулдауна
let heroCoolDownSet = [0, 0, 0, 0];
let monsterCoolDownSet = [0, 0, 0];

function coolDownCounter(arr) {
    let array = [];
       arr.forEach((el) => {el === 0 ? el : el-- ;
     array.push(el)});
     arr = array;
     console.log(arr)
     return arr;
 } 


// //Здоровье Евстафия
let healthHero = +readlineSync.question(`Put yours health: `);




// //Ходы монстра
function monsterStepChoise()  {
    let index = Math.floor(Math.random()*(3));//Выбор удара по индексу, который получается случайно, но...
    let monsterStep = null;
    if (!monsterCoolDownSet[index]) {
         monsterStep = monster.moves[index];
         monsterCoolDownSet.splice(index, 1, monster.moves[index].cooldown)
         return monsterStep;
    } else {
       return monsterStepChoise();
    }
    
   return monsterStep;
    } 

    function finalDamage(monsterMove, heroMove) {
        let phDamageForHero = countDamage(monsterMove.physicalDmg, heroMove.physicArmorPercents);//damage armor
        let phDamageForMonster = countDamage(heroMove.physicalDmg, monsterMove.physicArmorPercents);
        let mgDamageForHero = countDamage(monsterMove.magicDmg, heroMove.magicArmorPercents );
        let mgDamageForMonster = countDamage(heroMove.magicDmg, monsterMove.magicArmorPercents);
        monsterHealth = monsterHealth - (phDamageForMonster + mgDamageForMonster) 
       healthHero = +healthHero - (phDamageForHero + mgDamageForHero)
       let gameInfo = {
        'Здоровье Лютого': monsterHealth,
        'Здоровье Евстафия': healthHero,
       }
       console.log(gameInfo);
    
  };

  function countDamage(damage, armor) {
    let  armoR = Math.floor(damage * (armor / 100)) //считаю броню как процент от урона
    // console.log(armoR)
      let result = damage - armoR;
      // result > 0 ? result : result = 0;
      return result;
  }
  

/*==========================Здесь начинается игра=================================*/    
// const startGame = readlineSync.keyInYN('Герой, готов ли ты приянть вызов Лютого монстра?')

(
    function game() {
        const startGame = readlineSync.keyInYN('Монстр напаадет, готовься!')
        if (startGame) {
            let heroWeapons = [];
            moves.forEach((move, i, moves) => {
               (!heroCoolDownSet[i]) ? heroWeapons.push(moves[i].name) : heroWeapons.push('Weapon CoolDown');
            })
            const selectWeapon = readlineSync.keyInSelect(heroWeapons, 'Выберите оружие');
            if (heroWeapons[selectWeapon] === 'Weapon CoolDown') {
                console.log('Оружие не готово, выбери другое');
                return game();
            }
            heroCoolDownSet.splice(selectWeapon, 1, moves[selectWeapon].cooldown);
            console.log(`${moves[selectWeapon].name} экипирован`)
            let monsterMove = monsterStepChoise();
            console.log(`Лютый атакует ${monsterMove.name}`);
            finalDamage(monsterMove, moves[selectWeapon])
            // console.log(heroHealth);
            if (monsterHealth > 0 && healthHero > 0) {
                coolDownCounter(monsterCoolDownSet);
                coolDownCounter(heroCoolDownSet);
                game()
            } else {
                if (healthHero <= 0) {
                    console.log('Вы проиграли :(')
                } else      if (monsterHealth <= 0) {
                    console.log('Вы победили!')
                // } else if (heroHealth <= 0) {
                //     console.log('Вы проиграли :(')
                // }
            }
            }
     
 
    }
}
)()