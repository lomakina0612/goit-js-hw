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
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала 
// в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line


//   // Change code above this line
//   return string;
// }

//--SOLUTION 12---------------------------------------------------
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);


//   // Change code above this line
//   return string;
// }


//--TASK 13-------------------------------------------------------
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com / posts / 1q8fh74tx, можно сделать slug из названия статьи. 
// В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

//     Значением параметра title будут строки, слова которых разделены только пробелами
//     Все символы slug должны быть в нижнем регистре
//     Все слова slug должна быть разделены тире

//     function slugify(title) {
//   // Change code below this line

//   // Change code above this line
// }

//--SOLUTION 13---------------------------------------------------
function slugify(title) {
  // Change code below this line
return title.toLowerCase().split(" ").join("-")

  // Change code above this line
}


//--TASK 14-------------------------------------------------------
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

//     firstTwoEls - массив из первых двух элементов
//     nonExtremeEls - массив из всех элементов кроме первого и последнего
//     lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = ;
// const nonExtremeEls = ;
// const lastThreeEls = ;

//--SOLUTION 14---------------------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);


//--TASK 15-------------------------------------------------------
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = ; // Change this line

//--SOLUTION 15---------------------------------------------------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line


//--TASK 16-------------------------------------------------------
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива 
// со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть 
// копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     // Change code above this line
//   }

//--SOLUTION 16---------------------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let newArray;
//   newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength)
//   } else {
//     return newArray;
//     }
//     // Change code above this line
// }


//--TASK 17-------------------------------------------------------
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = ; i <= ; i += ) { // Change this line
//   console.log(i);
// }

//--SOLUTION 17---------------------------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


//--TASK 18-------------------------------------------------------
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) 
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//  // Change code below this line

//   // Change code above this line
// }

//--SOLUTION 18---------------------------------------------------
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {    
//     total += i; 
//   }
//   return total;

//   // Change code above this line
// }


//--TASK 19-------------------------------------------------------
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = ;) { // Change this line
//   const fruit = fruits[]; // Change this line
//   console.log(fruit);
// }

//--SOLUTION 19---------------------------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


//--TASK 20-------------------------------------------------------
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // Change code above this line
//   return total;
// }

//--SOLUTION 20---------------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }


//--TASK 21-------------------------------------------------------
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую 
// только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line

//   // Change code above this line
// }

//--SOLUTION 21---------------------------------------------------
// function findLongestWord(string) {
//   // Change code below this line
  
//     const arrOfWords = string.split(' ');
//     console.log(arrOfWords);
//     let arrOfLength = [];
//     for (let i = 0; i < arrOfWords.length; i += 1 ) {    
//         arrOfLength[i] = arrOfWords[i].length;
//     } 
//     console.log(arrOfLength);
//     const longestNum = Math.max.apply(null, arrOfLength);
//     console.log(longestNum);
//     const indexOfLongest = arrOfLength.indexOf(longestNum);
//     console.log(indexOfLongest);
//     const longestWord = arrOfWords[indexOfLongest];
//     console.log(longestWord);
//   return longestWord;
  
//   // Change code above this line
// }


//--TASK 22-------------------------------------------------------
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   // Change code above this line
//   return numbers;
// }

//--SOLUTION 22---------------------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   // Change code above this line
//   return numbers;
// }


//--TASK 23-------------------------------------------------------
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) 
// и возвращает новый массив, в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//    // Change code below this line


//   // Change code above this line
// }

//--SOLUTION 23---------------------------------------------------
// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
// return newArr;

//   // Change code above this line
// }


//--TASK 24-------------------------------------------------------
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

//     фрукт есть в массиве, то функция возвращает true;
//     фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return; // Change this line
// }

//--SOLUTION 24---------------------------------------------------
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }


//--TASK 25-------------------------------------------------------
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах. 
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины 
// в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line


//  // Change code above this line
// }

//--SOLUTION 25---------------------------------------------------
// function getCommonElements(array1, array2) {
//  // Change code below this line
// let commonArr = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(array1[i])) {
//       commonArr.push(array1[i])
//     }  
// }
// return commonArr;
//  // Change code above this line
// }


//--TASK 26-------------------------------------------------------
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

//--SOLUTION 26---------------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }


//--TASK 27-------------------------------------------------------
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

//--SOLUTION 27---------------------------------------------------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {   
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


//--TASK 28-------------------------------------------------------
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// // Change code below this line
// const a = 3 % ;
// const b = 4 % ;
// const c = 11 % ;
// const d = 12 % ;
// const e = 8 % ;

//--SOLUTION 28---------------------------------------------------
// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;


//--TASK 29-------------------------------------------------------
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line


//     // Change code above this line
//   }

//--SOLUTION 29---------------------------------------------------
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   return evenNumbers;

//     // Change code above this line
//   }


//--TASK 30-------------------------------------------------------
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }

//--SOLUTION 30---------------------------------------------------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


//--TASK 31-------------------------------------------------------
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

//     возвращала первое число от start до end, которое делится на divisor без остатка
//     не использовала оператор break
//     не использовала переменную number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

//--SOLUTION 31---------------------------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;      
//     }
//   }
//   // Change code above this line
// }


//--TASK 32-------------------------------------------------------
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива
// массив.includes(значение) - проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line

//   // Change code above this line
// }

//--SOLUTION 32---------------------------------------------------
// function includes(array, value) {
//   // Change code below this line
// for (let element of array) {
//   if (element === value){
//     return true;
//   }
// }
// return false;
//   // Change code above this line
// }
