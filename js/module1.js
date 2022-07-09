//--TASK 1-------------------------------------------------------
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// Change code below this line

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

//--SOLUTION 1---------------------------------------------------
// // Change code below this line
// const productName = 'Droid';
// // console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// // console.log(pricePerItem);
// // 2000


//--TASK 2-------------------------------------------------------
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
// Переопредели значения переменных pricePerItem и productName после их объявления.

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line

//--SOLUTION 2---------------------------------------------------
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem += 1500;


//--TASK 3-------------------------------------------------------
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// Change code below this line

//--SOLUTION 3---------------------------------------------------
// // Change code below this line
// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;

//--TASK 4-------------------------------------------------------
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem;

//--SOLUTION 4---------------------------------------------------
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;


//--TASK 5-------------------------------------------------------
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате:
// "You picked <имя товара>, price per item is <цена товара> credits".
// Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.
// Используй синтаксис шаблонных строк.

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

//--SOLUTION 5---------------------------------------------------
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


//--TASK 6-------------------------------------------------------
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// // Change code below this line

//--SOLUTION 6---------------------------------------------------
// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//--TASK 7-------------------------------------------------------
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!".
// После объявления вызови функцию sayHi.

// // Change code below this line

//--SOLUTION 7---------------------------------------------------
// // Change code below this line
// function sayHi() {
//  console.log("Hello, this is my first function!")   
// }

// sayHi();


//--TASK 8-------------------------------------------------------
// Функция add должна уметь складывать три числа и выводить результат в консоль. 
// Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где < result > это сумма переданных чисел.

// // Change code below this line
// function add() {
//   console.log();
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


//--SOLUTION 8---------------------------------------------------
// // Change code below this line
// function add(a,b,c) {
//   let result = a + b + c;
//   console.log(`Addition result equals ${result}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);


//--TASK 9-------------------------------------------------------
// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// function add(a, b, c) {
//   // Change code below this line



//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//--SOLUTION 9---------------------------------------------------
// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


//--TASK 10-------------------------------------------------------
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

//     name - название товара
//     price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка
// "You picked <product name>, price per item is <product price> credits", где < product name > и < product price >
// это значения параметров name и price.Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// makeMessage ('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//--SOLUTION 10---------------------------------------------------
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// makeMessage ('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);


//--TASK 11-------------------------------------------------------
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. 
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

//     orderedQuantity - количество единиц товара в заказе;
//     pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки,
// результат умножения кол - ва товаров на цену одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = ;

//   // Change code above this line
//   return totalPrice;
// };

//--SOLUTION 11---------------------------------------------------
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);



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














