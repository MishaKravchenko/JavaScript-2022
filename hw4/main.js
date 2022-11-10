// 1. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<b>text</b> <br>');
// }

// 2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i=0; i<10; i++){
//     document.write(`<h1>${i+1}) text </h1>`)
// }

// 3. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//     document.write("<h2>Hello World</h2>");
//     i++
// }

// 4. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Hello World ${i}</h1>`);
//     i++
// }

// 5. Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву.

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`);
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);

// -----------------------------------------------
//
// 6. Використовуючи данні з масиву products, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div style="display: flex; justify-content: center; gap: 20px">`);
//
// for (const product of products) {
//     document.write(`<div style="display: flex; flex-flow: column; align-items: center ">`);
//     document.write(`<b>${product.title}</b> <i>Price - ${product.price}</i>`);
//     document.write(`<img style="width: 200px" src="${product.image}" alt="" class="product-image">`);
//     document.write(`</div>`);
// }
//
// document.write(`</div>`);
//
// --------------------
//     7. Є масив users за допомоги циклу вивести:
//      - користувачів зі статусом true

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// for (const user of users) {
//     if (user.status){
//         console.log(user)
//     }
// }

// - користувачів зі статусом false
// for (const user of users) {
//     if (!user.status){
//         console.log(user)
//     }
// }

// - користувачів які старші за 30 років
// for (const user of users) {
//     if (user.age >= 30){
//         console.log(user)
//     }
// }

// ADDITIONAL-----------------------------------
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
//
// for (let i=0;i<other.length;i++){
//     if (typeof other[i]==="boolean"){
//         console.log(other[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let other = [true,false,"a1","a2",1,2,true,true,"a3","a3",3,4,false,false,25,30,50,65,10,25,"asd","sad","dsa","asdas",151,516,12,2,2,5,1,5,5,3,5,false,true,false,false,false];
//
// for (let i =0;i<other.length;i++){
//     if (typeof other[i]==="number"){
//         console.log(other[i])
//     }
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++){
//     console.log(`Iteration ${i}`);
//     document.write(`Iteration ${i} - `);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=2;i<100;i+=2){
//     console.log(`Iteration ${i}`)
//     document.write(`Iteration ${i} - `);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if (i%2===0){
//         console.log(`Iteration ${i}`);
//         document.write(`Iteration ${i} - `);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if (i%2===1){
//         console.log(`Iteration ${i}`);
//         document.write(`Iteration ${i} - `);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let number = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i=0;i<number.length;i++){
//     if (number[i]%2===0){
//         console.log(number[i]);
//     }
// }
// console.log(number);