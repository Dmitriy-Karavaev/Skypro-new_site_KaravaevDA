
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// const date = "9 января 2007";
// alert(date);

// const personality = "Brendan Eich";
// alert(personality);

// let c =10;
// let b = 2;

// let sum = c + b;
// alert(sum);

// let difference = c - b;
// alert(difference);

// let product = c * b;
// alert(product);

// let quotient = c / b;
// alert(quotient);

// let power = 2 ** 5;
// alert(power);

// let d = 9;
// let remainder = d % b;
// alert(remainder);

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// let age = prompt("Сколько вам лет?");
// alert(age);

// const user = {
//    name: 'Дмитрий',
//    age: '40',
//    isAdmin: true
// }

// let yourName = prompt('Введите ваше имя:');
// alert('Привет, ' + yourName + '!');

   // let password = 'parol';
   // let userInput = prompt('Введите пароль:');
   // if (userInput === password) {
   //  alert ('Пароль введен верно'); 
   // } else {
   //  alert ('Пароль введен неправильно');
   // }

   // let c = prompt('Введите число'); // задаём переменную с любым числом
   // if (c > 0 && c < 10) {
   //  alert ("Верно");
   // } else {
   //  alert ("Неверно");
   // }

   // let d = prompt('Введите число');
   // let e = prompt('Введите число');
   //    if (d > 100 || e > 100) {
   // alert ("Верно");
   // } else {
   // alert ("Неверно");
   // } 

   // let a = '2';
   // let b = '3';
   // alert(Number(a) + Number(b));

// let number = 1;

// while (number <= 12) {
//     if (number >= 1 && number <=2 || number === 12) {
//         console.log('Зима');
//     } else if (number >= 3 && number <= 5) {
//         console.log('Весна');
//     } else if (number >= 6 && number <= 8) {
//         console.log('Лето');
//     } else if (number >= 9 && number <= 11) {
//         console.log('Осень');
//     }

// 	number++;
// }

//     switch (monthNumber) {
//         case '12':
//         case '1':
//         case '2':
//         case 'декабрь':
//         case 'январь':
//         case 'февраль':
//             season = "зима";
//             break;
//         case '3':
//         case '4':
//         case '5':
//         case 'март':
//         case 'апрель':
//         case 'май':
//             season = "весна";
//             break;
//         case '6':
//         case '7':
//         case '8':
//         case 'июнь':
//         case 'июль':
//         case 'август':
//             season = "лето";
//             break;
//         case '9':
//         case '10':
//         case '11':
//         case 'сентябрь':
//         case 'октябрь':
//         case 'иноябрь':
//             season = "осень";
//             break;
//     }
    
//     alert(`Месяц №${monthNumber} принадлежит к сезону "${season}".`);
// }

// let i = 1

// while (i <= 2) {
//     console.log ('Привет!');
//     i++
// }

// let i = 1;

// do {
//    console.log (i);
//    i++;
// } while(i <= 5);

// let i = 7;

// do {
//    console.log (i);
//    i++;
// } while(i <= 22);

// const obj = {
//  "Коля": '200',
//  "Вася": '300',
//  "Петя": '400'
// };

// for (let key in obj) {
//    console.log(`${key} — зарплата ${obj[key]} долларов.`);
// }

// let num = 0;
// for (let i=1000; i > 50; i = i / 2) {
//     num++;
//     console.log(i)
//     }
// console.log(num);

// for (let n = 1; n <=7; n++) {
// for (let fryday = n; fryday < 31; fryday += 7) {
//   console.log(`Сегодня пятница ${fryday}-е число. Надо сдать еженедельный отчёт!`);
// }
// }

// Урок "Функции"

//Задание 1

// function min(a, b) {
//     return a < b ? a : b;
// }


// //Задание 2

// function checkEvenOdd(number) {
//     if (number % 2 === 0) {
//         return "Число четное";
//     } else {
//         return "Число нечетное";
//     }
// }

// //Задание 3

// const getSquare = (number) => {
//     return number * number;
// }

// //Задание 4

// function correctAge() {
//     const age = parseInt(prompt("Сколько вам лет?"));

//     if (isNaN(age)) {
//         return 'Вы ввели неправильное значение';
//     } else if (age < 0) {
//         return 'Вы ввели неправильное значение';
//     } else if (age >= 0 && age <= 12) {
//         return 'Привет, друг!';
//     } else {
//         return 'Добро пожаловать!';
//     }
// }

// alert(correctAge());

// //Задание 5

// function multiplyNumbers(a, b) {
    
//     const num1 = Number(a);
//     const num2 = Number(b);

//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     }

//     return a * b;
// }

// //Задание 6

// function cubeNumber() {
//     const input = prompt("Введите число:");
    
//     const number = Number(input);
    
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     }
    
//     const cube = number ** 3;
    
//     return `${number} в кубе равняется ${cube}`;
// }

// console.log(cubeNumber());

// //Задание 7

// const circle1 = {
//     radius: 5,

//     getArea: function() {
//         return Math.PI * this.radius ** 2;
//     },

//     getPerimeter: function() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// const circle2 = {
//     radius: 10,

//     getArea: function() {
//         return Math.PI * this.radius ** 2;
//     },

//     getPerimeter: function() {
//         return 2 * Math.PI * this.radius;
//     }
// }


