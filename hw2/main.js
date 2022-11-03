/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

// 1 cпосіб
// let arr = [1, 2, 3, true, false, 'NaN', NaN, undefined, 'string', '1'];
//
// for (let item of arr) {
//     console.log(item)
// }

// 2 cпосіб
// let arrRandom = [];
// for (let i = 0; i < 10; i++) {
//     arrRandom.push(Math.floor(Math.random()*100));
// }
// console.log(arrRandom);
// let result = 0;
// for (let number of arrRandom) {
//     result += number;
// }
// console.log(result)

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
// const book1 = {title: "ABC", pageCount: 100, genre: "child"};
// const book2 = {title: "XXX", pageCount: 100, genre: "adult"};
// const book3 = {title: "TheBook", pageCount: 100, genre: "documentary"};
// console.log(book1, book2, book3);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age*/
// const book1 = {title: "ABC", pageCount: 100, genre: "child", authors: [{name: "Masha", age: 23}]};
// const book2 = {title: "XXX", pageCount: 100, genre: "adult", authors: [{name: "Sasha", age: 23}]};
// const book3 = {title: "TheBook", pageCount: 100, genre: "documentary", authors: [{name: "Dasha", age: 23}]};
// console.log(book1, book2, book3);

/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
// const users = [
//     {name: 'Sasha', username: 'SaShA', password: 'aASKDJhnAKSDAS73'},
//     {name: 'Masha', username: 'MaShA', password: 'sakdkAi23dasd32'},
//     {name: 'Dasha', username: 'DaShA', password: 'sakdmASOLfmAZl8'},
//     {name: 'Sasha', username: 'SaShA', password: 'cAASdlkMAca8'},
//     {name: 'Masha', username: 'MaShA', password: 'MCkdlA87djZNAN7'},
//     {name: 'Dasha', username: 'DaShA', password: 'CAksadolA3'},
//     {name: 'Sasha', username: 'SaShA', password: 'SAolvasiod832'},
//     {name: 'Masha', username: 'MaShA', password: 'cASovmmiasimodma8'},
//     {name: 'Dasha', username: 'DaShA', password: 'ksadlLASKjfmacmasl'},
//     {name: 'Sasha', username: 'SaShA', password: 'ASclasllAMcA813'}
// ]
//
// for (const user of users) {
//     console.log(user.password)
// }