
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

//    var month = prompt("Введите месяц");

// switch (day) {
//   case 'январь';
//   case 'февраль';
//   case 'декабрь':
//      season = "зима";
//       break;
//    case 'март' 'март':
//       console.log('второй день недели');
//       break;
//    // Продолжайте для остальных дней недели
//    default:
//       console.log('ввели что-то не то');
// }

         let monthNumber = prompt('Введите месяц');

if (monthNumber > 12 || monthNumber < 1) {
   alert ("Ошибка: номер месяца должен быть от 1 до 12.");
} else {
    let season;
    
    switch (monthNumber) {
        case '12':
        case '1':
        case '2':
        case 'декабрь':
        case 'январь':
        case 'февраль':
            season = "зима";
            break;
        case '3':
        case '4':
        case '5':
        case 'март':
        case 'апрель':
        case 'май':
            season = "весна";
            break;
        case '6':
        case '7':
        case '8':
        case 'июнь':
        case 'июль':
        case 'август':
            season = "лето";
            break;
        case '9':
        case '10':
        case '11':
        case 'сентябрь':
        case 'октябрь':
        case 'иноябрь':
            season = "осень";
            break;
    }
    
    alert(`Месяц №${monthNumber} принадлежит к сезону "${season}".`);
}