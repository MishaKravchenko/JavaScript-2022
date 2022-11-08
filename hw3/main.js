// 1. Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// const x = -3;
// console.log(x)

// 1 спосіб
// if (x) {
//     console.log('True')
// } else {
//     console.log('False')
// }
//2 спосіб
// x<0 || x>0? console.log("True"):console.log("False");


// 2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// const time = Math.floor(Math.random()*60);
// console.log(time)
//
// if (time >= 0 && time < 15){
//     console.log('The first quarter')
// }else if (time >= 15 && time <30 ){
//     console.log('The second quarter')
// }else if (time >= 30 && time <45){
//     console.log('The third quarter')
// }else if (time >= 45 && time <60){
//     console.log('The fourth quarter')
// }else {
//     console.log('Error')
// }

// 3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// const day = Math.floor(Math.random() * 32)
// console.log(day)
//
// if (day >= 0 && day < 10){
//     console.log('The first decade')
// }else if(day >= 10 && day < 20){
//     console.log('The second decade')
// }else {
//     console.log('The third decade')
// }

// 4. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// const schedule = +prompt('Enter a number from 1 to 10');
// switch (schedule) {
//     case 1:
//         console.log('MONDAY');
//         break;
//     case 2:
//         console.log('TUESDAY');
//         break;
//     case 3:
//         console.log('WEDNESDAY');
//         break;
//     case 4:
//         console.log('THURSDAY');
//         break;
//     case 5:
//         console.log('FRIDAY');
//         break;
//     case 6:
//         console.log('SATURDAY');
//         break;
//     case 7:
//         console.log('SUNDAY');
//         break;
//     default:
//         console.log("ERROR");
// }

//    5. Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// const x = +prompt('Enter the first number from 1 to 10');
// const y = +prompt('Enter the second number from 1 to 10');
// const x = Math.floor(Math.random()*(11-1)+1)
// const y = Math.floor(Math.random()*(11-1)+1)
//
// console.log(x, y)
// if (x > y){
//     console.log(`${x} is more than ${y}`)
// } else if (y > x){
//     console.log(`${x} is less than ${y}`)
// } else if (x === y){
//     console.log(`${x} is equal to ${y}`)
// }else{
//     console.log('ERROR! ENTER THE NUMBER FROM 1 TO 10');
// }

//    6. є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = undefined;
//
// if (!x) {
//     x = 'default';
// }
// console.log(x);

// =======A D D I T I O N A L

// 1. За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// const justANumber = +prompt("Enter a number from 1 to 5");
// switch (justANumber){
//     case 1:
//         console.log("CONGRATULATION! You win a new car!");
//         break
//     case 2:
//         console.log("CONGRATULATION! You win a new telephone!");
//         break
//     case 3:
//         console.log("Sorry! You haven't won anything!");
//         break
//     case 4:
//         console.log("CONGRATULATION! You win a ticket to Cyprus");
//         break
//     case 5:
//         console.log("CONGRATULATION! You win $1 000 000!");
//         break
//     default:
//         console.log("ERROR! ENTER A NUMBER FROM 1 TO 5");
// }

// 2. Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// const temperature = Math.floor(Math.random()*(30+30)-30);
// console.log(temperature);
// temperature>=10 &&temperature<=22? console.log("We are going to study"): console.log("We sit at home and study online");

// 3. Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// const x = undefined;
// typeof (x) === "number" ? alert("You have entered a number or NaN") :
//     typeof (x) === "string" ? alert("You have entered a string") :
//         typeof (x) === "boolean" ? alert("You have entered a boolean") :
//             typeof (x) === "function" ? alert("You have entered a function") :
//                 typeof (x) === "object" ? alert("You have entered an object,array or null") : alert("You have entered a different data type.")

// 4. Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// const getNumber = +prompt("Please, tell me, What time is it? 9 or 10");
// getNumber === 10? alert("True"):
//     getNumber === 9? alert("False"):
//         alert("Try again");

// 5. У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// const number = +prompt("Enter the apartment number (1-90)");
// number <=20? alert("The first entrance"):
//     number>20 && number<=48? alert("The second entrance"):
//         number>48 && number<=90? alert("The third entrance"): alert("What do you mean? Check the apartment number");

// 6. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// const question = prompt("Яка «офіційна» назва JavaScript?");
// question === "ECMAScript"? alert("Правильно!") : alert("Не знаєте? ECMAScript!");

// 7. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// const year = +prompt("Enter the current year");
// year%4===0? alert("Leap Year"): alert("Non-leap (Common year)");

// 8. Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором.

// const randomNumb = Math.floor(Math.random() * (100 + 100) - 100);
// console.log(randomNumb);
//
// randomNumb > 0 ? alert("Positive") :
//     randomNumb < 0 ? alert("Negative") :
//         alert("Zero");

// 9. Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// a+b<4? reslt  = 'Мало' : result = 'Багато';

// 10. Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//
// if (friends.length >= 3) {
//     alert("Це великий масив, в якому  3 і більше елементи.");
// } else alert("Це маленький масив, в якому менше 3-х елементів.");