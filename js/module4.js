// Модуль 4 - Коллбэки и стрелочные функции - Перебирающие методы массива

//--TASK 1--------------------------------------------------------------------------------------------------------------
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
// а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;

//--SOLUTION 1---------------------------------------------------
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

//--SOLUTION 2-----------------------------------------------------
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

//--SOLUTION 3-----------------------------------------------------
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
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

//--SOLUTION 11---------------------------------------------------
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


//--TASK 12--------------------------------------------------------------------------------------------------------------
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//--SOLUTION 12---------------------------------------------------
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }


//--TASK 13--------------------------------------------------------------------------------------------------------------
// Функция changeEven(numbers, value) принимает массив чисел numbers 
// и обновляет каждый элемент, значение которого это чётное число,
// добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив 
// чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

//--SOLUTION 13---------------------------------------------------
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = numbers.map(
//     (number) => {
//       if (number % 2 === 0) {
//         return number + value;
//       }
//       return number;
//     }    
//   );   
//   return newNumbers;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));


//--TASK 14--------------------------------------------------------------------------------------------------------------
// Дополни код так, чтобы в переменной planetsLengths получился массив длин 
// названий планет. Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

//--SOLUTION 14---------------------------------------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(
//   planet => planet.length
// );

// console.log(planetsLengths);


//--TASK 15--------------------------------------------------------------------------------------------------------------
// Используя метод map() сделай так, чтобы в переменной titles получился массив 
// названий книг(свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books;

//--SOLUTION 15---------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);


//--TASK 16--------------------------------------------------------------------------------------------------------------
// Используя метод flatMap() сделай так, чтобы в переменной genres получился 
// массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books;

//--SOLUTION 16---------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);


//--TASK 17--------------------------------------------------------------------------------------------------------------
// Этот массив объектов мы будем передавать в параметр users при вызове функции 
// из задания.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён
// пользователей(свойство name) из массива объектов в параметре users.

// // Change code below this line
// const getUserNames = users => {
    

// };
// // Change code above this line

//--SOLUTION 17---------------------------------------------------
// // Change code below this line
// const getUserNames = users => {
//     return users.map(user => user.name)

// };
// // Change code above this line

// console.log(getUserNames(users));


//--TASK 18--------------------------------------------------------------------------------------------------------------
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
// почтовых адресов пользователей(свойство email) из массива объектов в
// параметре users.

// // Change code below this line
// const getUserEmails = users => {
    

// };
// // Change code above this line

//--SOLUTION 18---------------------------------------------------
// // Change code below this line
// const getUserEmails = users => {
//   return users.map(user => user.email);
// };
// // Change code above this line

// console.log(getUserEmails(users));


//--TASK 19--------------------------------------------------------------------------------------------------------------
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных
// чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers;
// const oddNumbers = numbers;

//--SOLUTION 19---------------------------------------------------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);


//--TASK 20--------------------------------------------------------------------------------------------------------------
// Дополни код так, чтобы в переменной allGenres был массив всех жанров
// книг(свойство genres) из массива books, а в переменной uniqueGenres массив
// уникальных жанров - без повторений.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books;
// const uniqueGenres = allGenres;

//--SOLUTION 20---------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, arr) => arr.indexOf(genre) === index
//   );

// console.log(allGenres);
// console.log(uniqueGenres);


//--TASK 21--------------------------------------------------------------------------------------------------------------
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых
//   (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором
// с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books;
// const booksByAuthor = books;

//--SOLUTION 21---------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter (book => book.author === AUTHOR);


//--TASK 22--------------------------------------------------------------------------------------------------------------
// Этот массив объектов мы будем передавать в параметр users при вызове
// функции из задания.

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала
// массив пользователей у которых цвет глаз(свойство eyeColor) совпадает со
// значением параметра color.

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

// };
// // Change code above this line

//--SOLUTION 22---------------------------------------------------
 const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
// };
// // Change code above this line


//--TASK 23--------------------------------------------------------------------------------------------------------------
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она
// возвращала массив пользователей, возраст которых(свойство age) попадает в
// промежуток от minAge до maxAge.

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
 

// };
// // Change code above this line

//--SOLUTION 23---------------------------------------------------
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(
//     ({ age }) => {
//       return minAge <= age && age <= maxAge;
//     }
//   )
// };
// // Change code above this line

// console.log(getUsersWithAge(users, 20, 30));


//--TASK 24--------------------------------------------------------------------------------------------------------------
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она
// возвращала массив пользователей у которых есть друг с именем в параметре
// friendName.Массив друзей пользователя хранится в свойстве friends.

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
   
// };
// // Change code above this line

//--SOLUTION 24---------------------------------------------------
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(
//      user => user.friends.some(friend => friend === friendName)
//    )
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));


//--TASK 25--------------------------------------------------------------------------------------------------------------
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей 
// всех пользователей(свойство friends). У нескольких пользователей могут быть 
// одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// // Change code below this line
// const getFriends = (users) => {
   
// };
// // Change code above this line

//--SOLUTION 25---------------------------------------------------
// // Change code below this line
// const getFriends = (users) => {
//    const allFriends = users.flatMap(
//     user => user.friends
//   )

//   return allFriends.filter(
//     (friend, index, arr) => arr.indexOf(friend) === index
//   )
// };
// // Change code above this line

// console.log(getFriends(users));


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