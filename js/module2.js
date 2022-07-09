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


