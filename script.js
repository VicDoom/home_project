let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

};


// let q1 = prompt("Введите обязательную статью расходов в этом месяце");
// let q2 = prompt("Во сколько мне это обойдется?", '');
// console.log(typeof(q1) == 'string');
// console.log(q1 != "");
// console.log(q2 != "");
// console.log(typeof(q2) != null);
// console.log(q2.length);


for (let i = 0; i < 2; i++) {

    let q1 = prompt("Введите обязательную статью расходов в этом месяце");
    let q2 = prompt("Во сколько мне это обойдется?", '');

    if (typeof(q1) === 'string' && q1 != "" && q2 != "" 
    && typeof(q2) != null && q2.length < 50) {

        appData.expenses[q1] = q2;

    } else {
        console.log("enter right info");
        i--;
    }
    
}

// let i = 0;
// while (i < 2) {

//     let q1 = prompt("Введите обязательную статью расходов в этом месяце");
//     let q2 = +prompt("Во сколько мне это обойдется?", '');

//     if (typeof(q1) === 'string' && typeof(q2) != null && q1 != null && q2 != null 
//     && typeof(q2) != null && q2.length < 50) {

//         appData.expenses[q1] = q2;

//     } else {
//         //прописать код, возвращающий на цикл назад, если не прописаны ответы на вопросы
//     }
    
//     i++;

// }

// let i = 0;
// do {

//     let q1 = prompt("Введите обязательную статью расходов в этом месяце");
//     let q2 = +prompt("Во сколько мне это обойдется?", '');

//     if (typeof(q1) === 'string' && typeof(q2) != null && q1 != null && q2 != null 
//     && typeof(q2) != null && q2.length < 50) {

//         appData.expenses[q1] = q2;

//     } else {
//         //прописать код, возвращающий на цикл назад, если не прописаны ответы на вопросы
//     }

//     i++;

// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("ваш бюджет на один день равен " 
       + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Проиошла ошибка");
}
