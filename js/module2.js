//--TASK 1-------------------------------------------------------
// Запиши условие в инструкции if так, чтобы функция работала правильно.

// function checkAge(age) {
//   if () { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

//--SOLUTION 1---------------------------------------------------
function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}


//--TASK 2-------------------------------------------------------
// Функция checkPassword получает пароль пользователя в параметр password, прове
// ряет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и 
// возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

//     удали переменную message
//     удали else
//     код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }

//--SOLUTION 2---------------------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line



//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
  
//   // Change code above this line
// }


//--TASK 3-------------------------------------------------------
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. 
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

//     available - доступное количество товаров на складе
//     ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

//--SOLUTION 3---------------------------------------------------
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
  

//--TASK 4-------------------------------------------------------
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// // Change code below this line

//--SOLUTION 4---------------------------------------------------
// // Change code below this line
// const fruits = ["apple","plum", "pear", "orange"];   

//--TASK 5-------------------------------------------------------
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	    Значение переменной
// firstElement	    первый элемент массива
// secondElement	    второй элемент массива
// lastElement	        последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

//--SOLUTION 5---------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];


//--TASK 6-------------------------------------------------------
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

//--SOLUTION 6---------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";


//--TASK 7-------------------------------------------------------
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

//--SOLUTION 7---------------------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;


//--TASK 8-------------------------------------------------------
// Объяви две переменные:

//     Имя переменной	    Ожидаемое значение
//     lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
//     lastElement	        Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

//--SOLUTION 8---------------------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


//--TASK 9-------------------------------------------------------
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line


//   // Change code above this line
// }

//--SOLUTION 9---------------------------------------------------
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length-1]]

//   // Change code above this line
// }


//--TASK 10-------------------------------------------------------
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала 
// в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   // Change code above this line
//   return words;
// }

//--SOLUTION 10---------------------------------------------------
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }


//--TASK 11-------------------------------------------------------
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
//     в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord).Э
// та функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) 
// и цену гравировки одного слова(параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line


//    // Change code above this line
// }

//--SOLUTION 11---------------------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//    return message.split(" ").length * pricePerWord;


//    // Change code above this line
// }


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


