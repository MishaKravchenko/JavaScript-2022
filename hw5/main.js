// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.

// const areaOfRectangle = (a, b) => {
//     return a * b;
// }
// console.log(areaOfRectangle(4, 3));

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r

// const areaOfCircle = (radius) => {
//     return Math.round(Math.PI * Math.pow(radius,2));
// }
// console.log(areaOfCircle(14));

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const areaOfCylinder = (radius, height) => {
//     const s1 = Math.PI * Math.pow(radius, 2);
//     const s2 = 2 * Math.PI * radius * height;
//     return Math.round((s1 * 2) + s2);
// }
// console.log(areaOfCylinder(10, 5));

// 4. створити функцію яка приймає масив та виводить кожен його елемент

//  const addArray = function (array){
//      for (let arrayItem of array) {
//          console.log(arrayItem);
//      }
//      return 'return';
//  }
// console.log(addArray([1,123,312,4,124,12,312,3,14,24,12,4,12,412]));

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент

// const paragraph = function (someText) {
//     const prg = document.createElement("p");
//     prg.textContent = someText;
//     document.body.appendChild(prg);
// }
// paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus ea eaque facere, molestias suscipit vel voluptatum? A, non?');

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const createElement = function (someText){
//     document.write("<ul>");
//     for (let i = 0; i <3; i++) {
//         document.write(`<li>${someText}</li>`)
//     }
//     document.write("</ul>");
// }
// createElement("Item");

// _____________________________________________

// const createElement = (someText) => {
//   const ul = document.createElement('ul')
//   for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li')
//     li.textContent = someText
//     ul.appendChild(li)
//   }
//   document.body.appendChild(ul)
// }
// createElement("Item");

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const createElement = function (someText, numberOfIterations){
//     document.write('<ul>');
//     for (let i = 0; i < numberOfIterations; i++) {
//         document.write(`<li>${someText}</li>`)
//     }
//     document.write('</ul>');
// }
// createElement("Item", 10);

// __________________________________________

// const createElement = (someText, numberOfIterations) => {
//     const ul = document.createElement('ul')
//     for (let i = 0; i < numberOfIterations; i++) {
//         const li = document.createElement('li')
//         li.textContent = someText
//         ul.appendChild(li)
//     }
//     document.body.appendChild(ul)
// }
// createElement("Item", 10);

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const array = [1, 1, 2, 3, 3, 3, 3, true, "asdasd", "ASDAS", 123, 312, 312, 31, 23, false]
//
// const createList = (arr) => {
//  const ul = document.createElement('ul')
//     for (const item of array) {
//         const li = document.createElement('li');
//         li.textContent = item;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
// }
// createList(array);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const users = [
//     {id: 1, name: "Sashko", age: 23}, {id: 2, name: "Myshko", age: 0}, {id: 3, name: "Stepan", age: 33},
//     {id: 4, name: "Sashko", age: 23}, {id: 5, name: "Myshko", age: 0}, {id: 6, name: "Stepan", age: 33},
//     {id: 7, name: "Sashko", age: 23}, {id: 8, name: "Myshko", age: 0}, {id: 9, name: "Stepan", age: 33}
// ]
//
// const createListOfUsers = function (arr) {
//     for (let item of users) {
//         const div = document.createElement('div');
//         div.textContent = `${item.id}) ${item.name}, ${item.age} y.o.`
//         document.body.appendChild(div)
//     }
// }
// createListOfUsers(users);

// 10. створити функцію яка повертає найменьше число з масиву

// const array = [12, 3, 123, 12, 31, 23, 12, 3, 124, 12, 412, 3, 124, -12, 3, 1, 31]

// const minNumb = arr => {
//     let min = arr[0];
//     for (let item of array) {
//         if (item < min) min = item;
//     }
//     return min;
// }
// console.log(minNumb(array));

// ------------------------------------

// const minNumb = arr => {
//   return Math.min(...arr);
// }
// console.log(minNumb(array));

// 11. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13.

// const array = [12, 3, 123, 12, 31, 23, 12, 3, 124, 12, 412, 3, 124, -12, 3, 1, 31, 82]
//
// const total = arr =>{
//     let sum = 0;
//     for (let item of array) {
//         sum +=item;
//     }
//     return sum;
// }
// console.log(total(array));

// ---------------A D D I T I O N A L----------------------
// 1. створити функцію яка повертає найбільше та найменше число з масиву
// коли ми використовуємо метод sort() - то наш масив мутує.

// const array = [0, 10, 50, 30, 40, 30, 10, 90, 999, -999, 20, 10, 70, 60, 60, 80, 10, 20, 99, 40]
//
// const returnMaxMinNumb = (arr) => {
//     arr.sort((a, b) => a - b);
//     const returnMax = arr[arr.length - 1];
//     const returnMin = arr[0];
//     console.log(`Min: ${returnMin}  Max: ${returnMax}`);
// }
// returnMaxMinNumb(array);
// console.log(array)

// -----------------------------------------------------------
// в такому випадку наш масив не змутує.

// const array = [0, 10, 50, 30, 40, 30, 10, 90, 999, -999, 20, 10, 70, 60, 60, 80, 10, 20, 99, 40]
//
// const returnMaxNumb = (arr) => {
//     let max = arr[0];
//     for (let item of arr) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// console.log(returnMaxNumb(array));
// console.log(array);

// --------------------------------------------------------------

// const returnMaxNumb = numArray => {
//     return Math.max.apply(null, numArray);
//     // return Math.max(...numArray);
// }
//
// console.log(returnMaxNumb([1,2,2,3,3,4,56,76,5,43,567,5,4,456,7543]));

// 2. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const average = arr =>{
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return Math.floor(sum/arr.length)
// }
// console.log(average([1,2,3,3,4,4,3,3,323,3,23,4,24,2,23,4,2,3,412,3,123,43,2]));

// 3. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ].

// const returnKeys = arrObject => {
//     let arrKeys = [];
//     for (let item of arrObject) {
//         arrKeys.push(Object.keys(item));
//         // arrKeys.push(Object.values(item));
//         // arrKeys.push(Object.entries(item));
//     }
//     return arrKeys;
// }
// console.log(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 4.  створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// ______TOTAL__
//     [3,5,7,9]

// const totalArray = (arr1, arr2) => {
//     let sum = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sum[i] = arr1[i] + arr2[i];
//     }
//     return sum;
// }
//
// console.log(totalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів чи значень всіх обєктів, в залежності від вибору користувача.

// const returnKeysOrValues = (array) => {
//     const separateKeysOrValues = [];
//     const keysOrValues = [];
//     const answer = prompt("Keys or Values?");
//     if (answer.trim().toLocaleLowerCase() === "keys") {
//         for (let item of array) {
//             separateKeysOrValues.push(Object.keys(item));
//         }
//         for (let item of separateKeysOrValues) {
//             for (let key of item) {
//                 keysOrValues.push(key);
//             }
//         }
//
//     } else if (answer.trim().toLocaleLowerCase() === "values") {
//         for (let item of array) {
//             separateKeysOrValues.push(Object.values(item));
//         }
//         for (let item of separateKeysOrValues) {
//             for (let value of item) {
//                 keysOrValues.push(value);
//             }
//         }
//     }
//     return keysOrValues
// }
//
// console.log(returnKeysOrValues([{name: 'Dima', age: 13}, {model: 'Camry', age: 4}, {power: 200, color: "black"}]));

// 6.  Приймає масив та число "i", та міняє місцями об'єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// const changeNumberByIndex = (arr, i) => {
//     // витягуємо значення з масива (при i=2) numberByIndex = 3
//     const numberByIndex = arr[i]
//     // присвоюємо значення четвертого елемента, --> третьому елементу
//     arr[i] = arr[i + 1]
//     // присвоюємо значення третього елемента (який ми зберегли в змінній, щоб не присвоювати вже змінений) --> четвертому елементу
//     arr[i + 1] = numberByIndex;
//     return arr
// }
// console.log(changeNumberByIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

// 7.  Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const zeroLast = (arr) => {
//     let zeroArr = [];
//     let sortedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0)
//             zeroArr.push(arr[i])
//         else
//             sortedArr.push(arr[i])
//     }
//     return sortedArr = sortedArr.concat(zeroArr);
// }
//
// console.log(zeroLast([112, 0, 0, 0, 553, 0, 753, 853, 0, 1053, 0, 1253, 1533]));

// 8. Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// ===========================================
// http://www.javascriptkit.com/javatutors/redev3.shtml
// 1. / . . . /g - The global search flag makes the RegExp search for a pattern throughout the string, creating an array of all occurrences it can find matching the given pattern.
// 2. \s - matches whitespace (short for [\f\n\r\t\v\u00A0\u2028\u2029]).
// 3. + is short for {1,}. Matches one or more times.
// ===========================================

// const notValid = function (n1, n2, n3){
//     for (let argument of arguments) {
//         let valid = argument.trim().replace(/\s+/g, ' ');
//         console.log(valid);
//     }
// }
// notValid('    Harry       Potter      ','    Ron       Whisley      ','    Hermione       Granger      ');

// 9. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// const reverse = arr =>{
//     const newArr = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// console.log(reverse([23, 12, 3, 123, 12, 3, 123, 123, 241, 2412, 3]));
