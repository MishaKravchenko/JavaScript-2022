// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

// let greeting = 'hello';
// let company = 'owu';
// let domen = 'com';
// let country = 'ua';
// let number1 = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// const number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let status1 = true;
// let status2 = false;
//
// console.log(greeting, company, domen, country, number1, number2, number3, number4, number5, number6, number7, status1, status2);
// console.log(greeting);
// console.log(company);
// console.log(domen);
// console.log(country);
// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(number4);
// console.log(number5);
// console.log(number6);
// console.log(number7);
// console.log(status1);
// console.log(status2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

// const firstName = 'Mykhailo';
// const middleName = 'Ivanovych';
// const lastName = 'Kravchenko';
//
// const person = `${lastName} ${firstName} ${middleName}`
// console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

//     let a = 100; let b = '100'; let c = true;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль.

let name = prompt('Введіть своє ім\'я');
let middleName = prompt('Введіть своє ім\'я по-батькові');
let age = Number(prompt('Введіть свій вік'));
let person = `Бажаю здоров'я, ${name} ${middleName}. Вам вже ${age} `

if (age === 1) {
    alert(person + 'рік')
} else if (age === 2 || age === 3 || age === 4) {
    alert(person + 'роки')
} else {
    alert(person + 'років')
}