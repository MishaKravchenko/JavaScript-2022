// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// const greeting = 'hello world';
// const lorem = 'lorem ipsum';
// const js = 'javascript is cool';
//
// console.log(greeting.length, lorem.length, js.length);
//
// console.log(greeting.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());
//
// console.log(greeting.toLowerCase());
// console.log(lorem.toLowerCase());
// console.log(js.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim().replace(/\s+/g,' '));

// 5. Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';

// let str = 'Ревуть воли як ясла повні'.split(/\s/g)
// console.log(str);

// 6. є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const numbersArray = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(numbersArray.map(value => value.toString()));

// 7. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// function sortNumbersArray(arr, expression) {
//     switch (expression) {
//         case 'ascending':
//             arr.sort((a, b) => a - b);
//             break;
//         case 'descending':
//             arr.sort((a, b) => b - a);
//             break;
//         default:
//             console.log('error')
//     }
//     return arr;
// }
//
// console.log(sortNumbersArray(numbersArray, 'ascending'));
// console.log(sortNumbersArray(numbersArray, 'descending'));

// 8. є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
// console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));

//  9. описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {value: 6, cardSuit: 'spades', color: 'black'},
    {value: 6, cardSuit: 'clubs', color: 'black'},
    {value: 6, cardSuit: 'hearts', color: 'red'},
    {value: 6, cardSuit: 'diamonds', color: 'red'},
    {value: 7, cardSuit: 'spades', color: 'black'},
    {value: 7, cardSuit: 'clubs', color: 'black'},
    {value: 7, cardSuit: 'hearts', color: 'red'},
    {value: 7, cardSuit: 'diamonds', color: 'red'},
    {value: 8, cardSuit: 'spades', color: 'black'},
    {value: 8, cardSuit: 'clubs', color: 'black'},
    {value: 8, cardSuit: 'hearts', color: 'red'},
    {value: 8, cardSuit: 'diamonds', color: 'red'},
    {value: 9, cardSuit: 'spades', color: 'black'},
    {value: 9, cardSuit: 'clubs', color: 'black'},
    {value: 9, cardSuit: 'hearts', color: 'red'},
    {value: 9, cardSuit: 'diamonds', color: 'red'},
    {value: 10, cardSuit: 'spades', color: 'black'},
    {value: 10, cardSuit: 'clubs', color: 'black'},
    {value: 10, cardSuit: 'hearts', color: 'red'},
    {value: 10, cardSuit: 'diamonds', color: 'red'},
    {value: 'jack', cardSuit: 'spades', color: 'black'},
    {value: 'jack', cardSuit: 'clubs', color: 'black'},
    {value: 'jack', cardSuit: 'hearts', color: 'red'},
    {value: 'jack', cardSuit: 'diamonds', color: 'red'},
    {value: 'queen', cardSuit: 'spades', color: 'black'},
    {value: 'queen', cardSuit: 'clubs', color: 'black'},
    {value: 'queen', cardSuit: 'hearts', color: 'red'},
    {value: 'queen', cardSuit: 'diamonds', color: 'red'},
    {value: 'king', cardSuit: 'spades', color: 'black'},
    {value: 'king', cardSuit: 'clubs', color: 'black'},
    {value: 'king', cardSuit: 'hearts', color: 'red'},
    {value: 'king', cardSuit: 'diamonds', color: 'red'},
    {value: 'ace', cardSuit: 'spades', color: 'black'},
    {value: 'ace', cardSuit: 'clubs', color: 'black'},
    {value: 'ace', cardSuit: 'hearts', color: 'red'},
    {value: 'ace', cardSuit: 'diamonds', color: 'red'}
];

// - знайти піковий туз

// console.log(cards.filter(value => value.value === 'ace' && value.cardSuit === 'spades'));

// - всі шістки

// console.log(cards.filter(value => value.value === 6));

// - всі червоні карти

// console.log(cards.filter(value => value.color === 'red'));

// - всі буби

// console.log(cards.filter(value => value.cardSuit === 'diamonds'));

// - всі трефи від 9 та більше

// console.log(cards.filter(value => value.cardSuit === 'clubs' &&
//     (value.value >= 9 || typeof value.value === 'string')));
// -----------------------------------------------
// console.log(Object.values(cards)
//         .filter(value => value.cardSuit === 'clubs')
//         .splice(3));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const reducedArray = cards.reduce((previousValue, currentValue) => {
//     switch (currentValue.cardSuit) {
//         case 'spades':
//             previousValue.spades.push(currentValue);
//             break;
//         case 'diamonds':
//             previousValue.diamonds.push(currentValue);
//             break
//         case 'hearts':
//             previousValue.hearts.push(currentValue);
//             break
//         case 'clubs':
//             previousValue.clubs.push(currentValue);
//             break;
//         default:
//             console.log('error')
//     }
//     return previousValue;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
//
// console.log(reducedArray);


// -------------A D D I T I O N A L--------------------

// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.

const arr = [12, 3123, 12, 3, 123, 12, 3, 12, 31, 23, 13, 12, 3, 123, 1, 3, 12, 3, 1, 3, 123, 1, 23, 1, 3, 12, 31, 31];

// const sort = arr.sort((a, b) => a-b);
// // Початковий масив arr - мутує, коли ми використовуємо метод sort().
// console.log(sort);
// console.log(arr);

//     c) Відфілтрувати числа які є кратними 3.

// const filter = arr.filter(value => value %3 === 0 && value !==0);
// // А метод filter() не змінює наш масив, на це варто звернути увагу.
// console.log(filter);
// console.log(arr);

// d) Відфілтрувати числа які є більшими за 10.

// console.log(arr.filter(value => value > 10));

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// arr.forEach(value => document.write(` ${value} <br>`))

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// const map = arr.map(value => value * 3)
// // Метод map() теж не змінює наш попередній масив
// console.log(arr);
// console.log(map);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)

// console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue));

// 2) Створити масив з 20 стрічок та:
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

const stringArray = ["Mahmud", "Stepan", "Mishko", "Sashko", "Petro", "Stepan", "Vasily", "Aliona", "Ahmad", "Ahmed", "Rahmed", "Ramzan", "Zyuzia", "Qwerty", "Obema", "Olena", "Oksana", "Dimas", "Times", "New", "Roman", "Ariel"];

// console.log(stringArray.filter(value => value.length > 5));

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// console.log(stringArray.map(value => (`Sam says: '${value}'`)));
