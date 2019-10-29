let money, time;

function start() {

    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,

};

function chooseExpenses() {

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
}

chooseExpenses();

// let q1 = prompt("Введите обязательную статью расходов в этом месяце");
// let q2 = prompt("Во сколько мне это обойдется?", '');
// console.log(typeof(q1) == 'string');
// console.log(q1 != "");
// console.log(q2 != "");
// console.log(typeof(q2) != null);
// console.log(q2.length);

function detectDayBudjet () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("ваш бюджет на один день равен " 
       + appData.moneyPerDay);
}

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Проиошла ошибка");
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход с вашего депозита: " + appData.monthIncome);
    }
}

function chooseOptExpenses() {

    let j = 1;
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?");
        if (answer != null && answer != "" ) {
            appData.optionalExpenses[j++] = answer; 
        }
    }

}

chooseOptExpenses();
detectDayBudjet();
detectLevel();
checkSavings();
