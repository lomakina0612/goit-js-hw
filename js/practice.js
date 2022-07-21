const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];
//Реализовать фильтер по свойству amount и получить
//только название модели
// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.filter(({amount}) => amount >= amountThreshold).map(({model}) => model)
// }
// console.log(getAvailableCarNames(vehicles, 5));

// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars.reduce((acc, car) => {
//     if (car.amount > amountThreshold) {
//       acc.push(car.model)
//     }
//     return acc;
//   }, [])
// }
// console.log(getAvailableCarNames(vehicles, 5));



// const ownMap = (arr, callback) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i]);
//     newArray.push(callback(arr[i], i, arr));

//   }
//   return newArray;
// }

// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = ownMap(planets, (planet, index, array) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetLangth = ownMap(planets, (planet) => planet.length);
// console.log(planetLangth);



// const ownFilter = (arr, callback) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArray.push(arr[i]);
//    };
//   }
//   return newArray;
// }

// const values = [51, -3, 27, 100500, 21, 68, -42, -37, 100001];

// const positiveValues = ownFilter(values, (value, index, arr) => value >= 0);
// console.log(positiveValues);




//Получить машины на распродаже и сортировать по убыванию цены

// const carsOnSale = (cars) => {
//   return cars.filter(car => car.onSale).sort((a,b) => b.price - a.price)
// }

// console.table(carsOnSale(vehicles));


// 6. Собрать в allTopics массив всех предметов всех курсов
//Выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы

const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Function',
      'Git',
      'Conditions',
      'Classes',
      'GitHub',
      'DOM',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
  },
];

// const getSubjects = (courses) => {
//   return courses.flatMap(course => course.topics)
//     .filter((course, index, arr) => arr.indexOf(course) === index);
// }
// console.log(getSubjects(courses));

// const getSubjects = (courses) => {
//   return courses
//     .reduce((previous, course) => [...previous, ...course.topics], [])
//     .filter((course, idx, arr) => arr.indexOf(course) === idx);
// };

// console.log(getSubjects(courses));


// const getSubjects = (courses) => {
//   return courses
//     .reduce((previous, course) => [...previous, ...course.topics], [])
//     .filter((course, idx, arr) => arr.indexOf(course) === idx);
// };

// console.log(getSubjects(courses));



// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const getTotalTags = (tweets) => {
//   return tweets
//     .flatMap((tweet) => tweet.tags)
//     .reduce((acc, tweet) => {
//       if (!acc[tweet]) {
//         acc[tweet] = 1;
//       } else {
//         acc[tweet] = acc[tweet] + 1;
//       }
//       //   console.log(tweet);
//       // console.log(acc[tweet]);
//       return acc;
//     }, {});
// };
// console.log(getTotalTags(tweets));


// Дан массив с числами. Оставьте в нем только положительные числа.
//Затем извлеките квадратный корень и этих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];

const getSqrt = (arr) => {
  return arr.filter(element => element > 0).map(number => Math.sqrt(number));
}

console.log(getSqrt(array));
