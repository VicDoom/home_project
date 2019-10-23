let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let q1 = prompt("Введите обязательную статью расходов в этом месяце");
let q2 = +prompt("Во сколько мне это обойдется?");

let appData = {

    moneyData: money,
    timeData: time,
    expenses: {
        ["q1"]: q2
    },
    optionalExpenses: {},
    income: [],
    savings: false,

};

//alert(appData.expenses.q1);

alert("ваш бюджет на месяц равен " 
       + (appData.moneyData-appData.expenses.q1)/30);