
//--TASK 1-------------------------------------------------------
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
// а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;

//--SOLUTION 1----------------------------------------------------------------------------------------------------------
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;


//--TASK 2--------------------------------------------------------------------------------------------------------------
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию и возвращала ее вызов. 
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName) {
//   return;
// }

//--SOLUTION 2----------------------------------------------------------------------------------------------------------
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


//--TASK 3--------------------------------------------------------------------------------------------------------------
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
// которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");

//--SOLUTION 3----------------------------------------------------------------------------------------------------------
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });


//--TASK 4--------------------------------------------------------------------------------------------------------------
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так,
// чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onError,
//     передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName) {},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

//--SOLUTION 4---------------------------------------------------
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.pizzas);
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


//--TASK 5--------------------------------------------------------------------------------------------------------------
// Функция calculateTotalPrice(orderedItems) принимает один параметр
// orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается 
// как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала 
// метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

//--SOLUTION 5---------------------------------------------------
// function calculateTotalPrice(orderedItems) {
// let totalPrice = 0;
// // Change code below this line

// orderedItems.forEach(function(item) {
//   totalPrice += item;
// });

// // Change code above this line
// return totalPrice;
// }


//--TASK 6--------------------------------------------------------------------------------------------------------------
// Функция filterArray(numbers, value) принимает массив чисел numbers и 
// возвращает новый массив, в котором будут только те элементы оригинального
// массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала 
// метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }

//--SOLUTION 6---------------------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([2, 4, 1, 5, 3, 7], 3));


//--TASK 7--------------------------------------------------------------------------------------------------------------
// Функция getCommonElements(firstArray, secondArray) принимает два массива 
// произвольной длины в параметры firstArray и secondArray, и возвращает 
// новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала 
// метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

//--SOLUTION 7---------------------------------------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach (function(item){
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
// });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));


//--TASK 8--------------------------------------------------------------------------------------------------------------
// Выполни рефакторинг функции calculateTotalPrice() так,
// чтобы она была объявлена как стрелочная.

//   // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

//--SOLUTION 8---------------------------------------------------
// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }


//--TASK 9--------------------------------------------------------------------------------------------------------------
// Выполни рефакторинг функции calculateTotalPrice() так,
// чтобы она использовала неявный возврат.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line

//--SOLUTION 9---------------------------------------------------
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;;
// // Change code above this line


//--TASK 10--------------------------------------------------------------------------------------------------------------
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её 
// объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в 
// метод forEach() на стрелочную функцию.

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

//--SOLUTION 10---------------------------------------------------
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line


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



//--TASK 21--------------------------------------------------------------------------------------------------------------


//--SOLUTION 21---------------------------------------------------




//--TASK 22--------------------------------------------------------------------------------------------------------------


//--SOLUTION 22---------------------------------------------------



//--TASK 23--------------------------------------------------------------------------------------------------------------


//--SOLUTION 23---------------------------------------------------



//--TASK 24--------------------------------------------------------------------------------------------------------------


//--SOLUTION 24---------------------------------------------------




//--TASK 25--------------------------------------------------------------------------------------------------------------


//--SOLUTION 25---------------------------------------------------



//--TASK 26--------------------------------------------------------------------------------------------------------------


//--SOLUTION 26---------------------------------------------------



//--TASK 27--------------------------------------------------------------------------------------------------------------


//--SOLUTION 27---------------------------------------------------



//--TASK 28--------------------------------------------------------------------------------------------------------------


//--SOLUTION 28---------------------------------------------------



//--TASK 29--------------------------------------------------------------------------------------------------------------


//--SOLUTION 29---------------------------------------------------



//--TASK 30--------------------------------------------------------------------------------------------------------------


//--SOLUTION 30---------------------------------------------------



//--TASK 31--------------------------------------------------------------------------------------------------------------


//--SOLUTION 31---------------------------------------------------



//--TASK 32--------------------------------------------------------------------------------------------------------------


//--SOLUTION 32---------------------------------------------------



//--TASK 33--------------------------------------------------------------------------------------------------------------


//--SOLUTION 33---------------------------------------------------



//--TASK 34--------------------------------------------------------------------------------------------------------------


//--SOLUTION 34---------------------------------------------------



//--TASK 35--------------------------------------------------------------------------------------------------------------


//--SOLUTION 35---------------------------------------------------



//--TASK 36--------------------------------------------------------------------------------------------------------------


//--SOLUTION 36---------------------------------------------------



//--TASK 37--------------------------------------------------------------------------------------------------------------


//--SOLUTION 37---------------------------------------------------



//--TASK 38--------------------------------------------------------------------------------------------------------------


//--SOLUTION 38---------------------------------------------------



//--TASK 39--------------------------------------------------------------------------------------------------------------


//--SOLUTION 39---------------------------------------------------



//--TASK 40--------------------------------------------------------------------------------------------------------------


//--SOLUTION 40---------------------------------------------------



//--TASK 41--------------------------------------------------------------------------------------------------------------


//--SOLUTION 41---------------------------------------------------



//--TASK 42--------------------------------------------------------------------------------------------------------------


//--SOLUTION 42---------------------------------------------------



//--TASK 43--------------------------------------------------------------------------------------------------------------


//--SOLUTION 43---------------------------------------------------



//--TASK 44--------------------------------------------------------------------------------------------------------------


//--SOLUTION 44---------------------------------------------------



//--TASK 45--------------------------------------------------------------------------------------------------------------


//--SOLUTION 45---------------------------------------------------



//--TASK 46--------------------------------------------------------------------------------------------------------------


//--SOLUTION 46---------------------------------------------------



//--TASK 47--------------------------------------------------------------------------------------------------------------


//--SOLUTION 47---------------------------------------------------



//--TASK 48--------------------------------------------------------------------------------------------------------------


//--SOLUTION 48---------------------------------------------------