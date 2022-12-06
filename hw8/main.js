// 1) Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const users = [
//     new User(120,"Sasha", "Hillz", "some_email_1@gmail.com",123621584151515),
//     new User(233,"Masha", "Pillz", "some_email_2@gmail.com",342461584141515),
//     new User(344,"Dasha", "Killz", "some_email_3@gmail.com",2342354151514235),
//     new User(455,"Pasha", "Qillz", "some_email_4@gmail.com",5345363466151515),
//     new User(256,"Gasha", "Zillz", "some_email_5@gmail.com",3463466158415115),
//     new User(164,"Basha", "Gillz", "some_email_6@gmail.com",7457461584151515),
//     new User(447,"Nasha", "Nillz", "some_email_7@gmail.com",7445761584151515),
//     new User(538,"Casha", "Jillz", "some_email_8@gmail.com",7454745761581515),
//     new User(649,"Xasha", "Killz", "some_email_9@gmail.com",7458456158415115),
//     new User(510,"Rasha","Lillz", "some_email_10@gmail.com",121426158415115),
// ]
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users.sort((a, b) => a.id - b.id);

// 2) створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// clients = [
//     new Client(120,"Sasha", "Hillz", "some_email_1@gmail.com",123621584151515,["water","bread","butter","sugar","salt","flour"]),
//     new Client(233,"Masha", "Pillz", "some_email_2@gmail.com",342461584141515,["candy","sugar"]),
//     new Client(344,"Dasha", "Killz", "some_email_3@gmail.com",2342354151514235,["pop-corn","milk","fruit","cheese","sausage","chicken"]),
//     new Client(455,"Pasha", "Qillz", "some_email_4@gmail.com",5345363466151515,["juice","cake","apple pie","ketchup","cucumber","carrot","garlic","honey"]),
//     new Client(256,"Gasha", "Zillz", "some_email_5@gmail.com",3463466158415115,["ham","juice","cake","apple pie"]),
//     new Client(164,"Basha", "Gillz", "some_email_6@gmail.com",7457461584151515,["water","bread"]),
//     new Client(447,"Nasha", "Nillz", "some_email_7@gmail.com",7445761584151515,["carrot","honey","ketchup","cucumber"]),
//     new Client(538,"Casha", "Jillz", "some_email_8@gmail.com",7454745761581515,["cucumber","sausage","bread"]),
//     new Client(649,"Xasha", "Killz", "some_email_9@gmail.com",7458456158415115,["cheese","salt"]),
//     new Client(510,"Rasha","Lillz", "some_email_10@gmail.com",121426158415115,["butter","carrot","bread","cucumber","garlic","cake","juice","ketchup","carrot","garlic"])
// ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));

// 3) Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, prod, year, maxSpeed, engine, driver) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.driver = driver;
//
//     this.drive = function () {
//         console.log(`We drive at a speed of ${this.maxSpeed} km per hour`)
//     }
//     this.info = function () {
//         console.log(this);
//
//         console.log(`model: ${model}`);
//         console.log(`prod: ${prod}`);
//         console.log(`year:  ${year}`);
//         console.log(`maxSpeed: ${maxSpeed}`);
//         console.log(`engine: ${engine}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// const driver = {name: "Vasya", surname: "Pupkin", age: 28, exp: 8};
//
// const car = new Car("BMW", "Kyiv", 2020, 160, 250);
// car.drive();
// car.increaseMaxSpeed(19);
// car.increaseMaxSpeed(120);
// car.changeYear(2077);
// car.addDriver(driver);
// car.info();
//
// console.log(car);


// 4) (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class CarClass {
//
//     constructor(model, prod, year, maxSpeed, engine, driver) {
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.driver = driver;
//     }
//
//     drive() {
//         console.log(`We drive at a speed of ${this.maxSpeed} km per hour`);
//     }
//
//     info() {
//         console.log(this);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// const car1 = new CarClass('BMW1', 'Kyiv', 2020, 220, 250);
// const driver = {name: "Mykola", surname: "Pupkin", age: 28, exp: 8};
//
// car1.drive();
// car1.addDriver(driver);
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function Cinderella(name, age, footSize) {
//
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// const cinderellas = [
//     new Cinderella('Sveta', 18, 36),
//     new Cinderella('Lena', 19, 37),
//     new Cinderella('Vika', 20, 38),
//     new Cinderella('Veronika', 21, 39),
//     new Cinderella('Vera', 22, 40),
//     new Cinderella('Nadezhda', 23, 41),
//     new Cinderella('Lyubov', 24, 42),
//     new Cinderella('Larysa', 25, 43),
//     new Cinderella('Natasha', 26, 44),
//     new Cinderella('Angelina', 27, 45),
// ];
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let prince = new Prince('Vasya', 28, 36);
// let princess = cinderellas.find(value => value.footSize === prince.shoe);
//
// console.log(princess);