let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

function translateDaysToEng(string) {
    const daysInRus = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
    const daysInEng = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
let changeDay = string;
    for (let i = 0; i < daysInRus.length; i++) {
    changeDay = changeDay.replace(`${daysInRus[i]}`, `${daysInEng[i]}`);
while (changeDay.includes(daysInRus[i]))  {
     changeDay = changeDay.replace(`${daysInRus[i]}`, `${daysInEng[i]}`);
    }
  
    }
    return changeDay;
    };

    console.log(translateDaysToEng(str));