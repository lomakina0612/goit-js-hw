// Модуль 5 - Ключевое слово this - Прототипы и классы
//--TASK 1--------------------------------------------------------------------------------------------------------------
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

//--SOLUTION 1---------------------------------------------------
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


//--TASK 2--------------------------------------------------------------------------------------------------------------
// Перед увольнением разработчик сломал исходный код управления аккаунтами 
// пользователей нашего сервиса доставки еды.
// Выполни рефакторинг методов объекта customer, расставив отсутствующие
// this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той
// последовательности, в которой твой код будут проверять тесты.
// Пожалуйста ничего там не меняй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//--SOLUTION 2---------------------------------------------------
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


//--TASK 3--------------------------------------------------------------------------------------------------------------
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды.
// Тебе необходимо исправить их, правильно расставив this в методах объекта
// historyService, чтобы методы начали работать правильно.

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

//--SOLUTION 3---------------------------------------------------
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService);
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("jacob@hotmail.com"));
// console.log(historyService.getOrdersLog());


//--TASK 4--------------------------------------------------------------------------------------------------------------
// Измени код так, чтобы объект parent стал прототипом для объекта в 
// переменной сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = {};

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

//--SOLUTION 4---------------------------------------------------
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;


//--TASK 5--------------------------------------------------------------------------------------------------------------
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был 
// прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

//--SOLUTION 5---------------------------------------------------
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line


//--TASK 6--------------------------------------------------------------------------------------------------------------
// Используя ключевое слово class объяви класс Car с пустым телом.

//--SOLUTION 6---------------------------------------------------
// class Car {
    
// }


//--TASK 7--------------------------------------------------------------------------------------------------------------
// Добавь классу Car метод constructor который принимает три параметра:

//   brand - марка автомобиля.
//   model - модель автомобиля.
//   price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model 
// и price, значениями которых должны быть переданные аргументы во время её 
// вызова с оператором new.

// class Car {
//   // Change code below this line


//   // Change code above this line
// }

//--SOLUTION 7---------------------------------------------------
// class Car {
//   // Change code below this line
//   constructor (brand, model, price) {
//     this.brand = brand,
//     this.model = model,
//     this.price = price
//   }
//   // Change code above this line
// }


//--TASK 8--------------------------------------------------------------------------------------------------------------
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект 
// со свойсвами brand, model и price.Деструктуризируй объект в сигнатуре
// (подписи) конструктора.

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//--SOLUTION 8---------------------------------------------------
// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }


//--TASK 9--------------------------------------------------------------------------------------------------------------
// Добавь классу Car два метода.

//   getPrice() - возвращает значение свойства price из объекта который его 
// будет вызывать.
//   changePrice(newPrice) - обновляет значение свойства price у объекта 
// который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line


//   // Change code above this line
// }

//--SOLUTION 9---------------------------------------------------
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return this.price = newPrice;
//   }
//   // Change code above this line
// }


//--TASK 10--------------------------------------------------------------------------------------------------------------


//--SOLUTION 10---------------------------------------------------



//--TASK 11--------------------------------------------------------------------------------------------------------------


//--SOLUTION 11---------------------------------------------------




//--TASK 12--------------------------------------------------------------------------------------------------------------


//--SOLUTION 12---------------------------------------------------



//--TASK 13--------------------------------------------------------------------------------------------------------------


//--SOLUTION 13---------------------------------------------------




//--TASK 14--------------------------------------------------------------------------------------------------------------


//--SOLUTION 14---------------------------------------------------



//--TASK 15--------------------------------------------------------------------------------------------------------------


//--SOLUTION 15---------------------------------------------------




//--TASK 16--------------------------------------------------------------------------------------------------------------


//--SOLUTION 16---------------------------------------------------



//--TASK 17--------------------------------------------------------------------------------------------------------------


//--SOLUTION 17---------------------------------------------------



//--TASK 18--------------------------------------------------------------------------------------------------------------


//--SOLUTION 18---------------------------------------------------



//--TASK 19--------------------------------------------------------------------------------------------------------------


//--SOLUTION 19---------------------------------------------------



//--TASK 20--------------------------------------------------------------------------------------------------------------


//--SOLUTION 20---------------------------------------------------


