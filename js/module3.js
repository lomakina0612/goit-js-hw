
//--TASK 1-------------------------------------------------------
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

//     imgUrl - фотография, значение "https://via.placeholder.com/640x480";
//     descr - описание, значение "Spacious apartment in the city center";
//     rating - рейтинг, значение 4;
//     price - цена, значение 2153;
//     tags - метаинформация, массив ["premium", "promoted", "top"].

// const apartment = ;
    
//--SOLUTION 1---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

//--TASK 2-------------------------------------------------------
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

//     name - имя владельца, значение "Henry";
//     phone - телефон, значение "982-126-1588";
//     email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

//--SOLUTION 2---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };


//--TASK 3-------------------------------------------------------
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//     aptRating - рейтинг;
//     aptDescr - описание;
//     aptPrice - цена;
//     aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// // Change code above this line

//--SOLUTION 3---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

//--TASK 4-------------------------------------------------------
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment;
// const ownerPhone = apartment;
// const ownerEmail = apartment;
// const numberOfTags = apartment;
// const firstTag = apartment;
// const lastTag = apartment;
// // Change code above this line

//--SOLUTION 4---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags-1];
// // Change code above this line


//--TASK 5-------------------------------------------------------
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

//     aptRating - рейтинг;
//     aptDescr - описание;
//     aptPrice - цена;
//     aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// // Change code above this line

//--SOLUTION 5---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line


//--TASK 6-------------------------------------------------------
// Дополни код обновив значения свойств объекта apartment:

//     цену в свойстве price на 5000;
//     рейтинг квартиры в свойстве rating на 4.7;
//     имя владельца во вложенном свойстве name на "Henry Sibola";
//     массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line

//--SOLUTION 6---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


//--TASK 7-------------------------------------------------------
// Добавь объекту apartment несколько новых свойств:

//     area - площадь в квадратных метрах, число 60;
//     rooms - количество комнат, число 3;
//     location - местоположение квартиры, обьект со следующими вложенными свойствами;
//     country - страна, строка "Jamaica";
//     city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

//--SOLUTION 7---------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }


//--TASK 8-------------------------------------------------------
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags 
// со значениями из переменных с аналогичными именами.Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // Change code above this line
// };

//--SOLUTION 8---------------------------------------------------
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };


//--TASK 9-------------------------------------------------------
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: 
// email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com",
// а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line


//   // Change code above this line
// };

//--SOLUTION 9---------------------------------------------------
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };


//--TASK 10-------------------------------------------------------
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи,
// а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

//--SOLUTION 10---------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }


//--TASK 11-------------------------------------------------------


//--SOLUTION 11---------------------------------------------------




//--TASK 12-------------------------------------------------------


//--SOLUTION 12---------------------------------------------------



//--TASK 13-------------------------------------------------------


//--SOLUTION 13---------------------------------------------------




//--TASK 14-------------------------------------------------------


//--SOLUTION 14---------------------------------------------------



//--TASK 15-------------------------------------------------------


//--SOLUTION 15---------------------------------------------------




//--TASK 16-------------------------------------------------------


//--SOLUTION 16---------------------------------------------------



//--TASK 17-------------------------------------------------------


//--SOLUTION 17---------------------------------------------------



//--TASK 18-------------------------------------------------------


//--SOLUTION 18---------------------------------------------------



//--TASK 19-------------------------------------------------------


//--SOLUTION 19---------------------------------------------------



//--TASK 20-------------------------------------------------------


//--SOLUTION 20---------------------------------------------------



//--TASK 21-------------------------------------------------------


//--SOLUTION 21---------------------------------------------------




//--TASK 22-------------------------------------------------------


//--SOLUTION 22---------------------------------------------------



//--TASK 23-------------------------------------------------------


//--SOLUTION 23---------------------------------------------------



//--TASK 24-------------------------------------------------------


//--SOLUTION 24---------------------------------------------------




//--TASK 25-------------------------------------------------------


//--SOLUTION 25---------------------------------------------------



//--TASK 26-------------------------------------------------------


//--SOLUTION 26---------------------------------------------------



//--TASK 27-------------------------------------------------------


//--SOLUTION 27---------------------------------------------------



//--TASK 28-------------------------------------------------------


//--SOLUTION 28---------------------------------------------------



//--TASK 29-------------------------------------------------------


//--SOLUTION 29---------------------------------------------------



//--TASK 30-------------------------------------------------------


//--SOLUTION 30---------------------------------------------------



//--TASK 31-------------------------------------------------------


//--SOLUTION 31---------------------------------------------------



//--TASK 32-------------------------------------------------------


//--SOLUTION 32---------------------------------------------------



//--TASK 33-------------------------------------------------------


//--SOLUTION 33---------------------------------------------------



//--TASK 34-------------------------------------------------------


//--SOLUTION 34---------------------------------------------------



//--TASK 35-------------------------------------------------------


//--SOLUTION 35---------------------------------------------------



//--TASK 36-------------------------------------------------------


//--SOLUTION 36---------------------------------------------------



//--TASK 37-------------------------------------------------------


//--SOLUTION 37---------------------------------------------------



//--TASK 38-------------------------------------------------------


//--SOLUTION 38---------------------------------------------------



//--TASK 39-------------------------------------------------------


//--SOLUTION 39---------------------------------------------------



//--TASK 40-------------------------------------------------------


//--SOLUTION 40---------------------------------------------------



//--TASK 41-------------------------------------------------------


//--SOLUTION 41---------------------------------------------------



//--TASK 42-------------------------------------------------------


//--SOLUTION 42---------------------------------------------------