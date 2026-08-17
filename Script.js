// Задание 1
// С помощью метода массива 
// sort
//  отсортируйте массив 
// people
//  по возрастанию возраста и выведите результат в консоль.

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Сортируем по возрасту (age) по возрастанию
people.sort((a, b) => a.age - b.age);

console.log(people);
// Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

//Задание 2

// // Правило: число положительное
function isPositive(num) {
  return num > 0;
}
// Правило: человек мужского пола
function isMale(person) {
  return person.gender === 'male';
}
// Собственная реализация filter
function filter(array, ruleFunction) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    
    // Вызываем правило для текущего элемента
    const shouldKeep = ruleFunction(currentElement);

    // Если правило вернуло true — добавляем элемент в результат
    if (shouldKeep) {
      result.push(currentElement);
    }
  }

  return result;
}

// Проверка 1: числа
console.log(filter([3, -4, 1, 9], isPositive)); 
// Ожидаемый результат: [3, 1, 9]

// Проверка 2: люди
const people2 = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale)); 
// Ожидаемый результат: [{ name: 'Глеб', gender: 'male' }, { name: 'Олег', gender: 'male' }]

//Задание 3

const durationMs = 30000;      // 30 секунд в миллисекундах
const intervalMs = 3000;       // каждые 3 секунды

let counter = 0;               // счётчик вызовов (для наглядности)
const startTime = Date.now(); // фиксируем время старта

// setInterval принимает колбэк: он будет запускаться каждые 3 секунды
const intervalId = setInterval(() => {
  counter++;
  const now = new Date();
  console.log(`[${counter}] Текущая дата и время: ${now.toLocaleString()}`);
}, intervalMs);

// setTimeout тоже принимает колбэк: сработает ровно через 30 секунд
setTimeout(() => {
  clearInterval(intervalId);   // останавливаем повторяющийся таймер
  const endTime = Date.now();
  const elapsed = Math.floor((endTime - startTime) / 1000);
  console.log(`30 секунд прошло (прошло примерно ${elapsed} сек)`);
}, durationMs);
