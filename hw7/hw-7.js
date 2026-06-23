// Массив вопросов и ответов
const questions = [
    {
        question: "Какой язык программирования используется для создания этой викторины?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: 1
    },
    {
        question: "Сколько будет 2 + 2 * 2?",
        options: ["6", "8", "4", "10"],
        correctAnswer: 0
    },
    {
        question: "Какая планета ближайшая к Солнцу?",
        options: ["Земля", "Венера", "Меркурий", "Марс"],
        correctAnswer: 2
    },
    {
        question: "Какого цвета небо в ясный день?",
        options: ["Зелёное", "Красное", "Синее", "Жёлтое"],
        correctAnswer: 2
    }
];

const btn = document.getElementById('victorina');

if (btn) {
    btn.addEventListener('click', () => {
        let correct = 0;

        // ✅ ИСПРАВЛЕНИЕ: Используем for...of вместо forEach
        // Теперь return действительно остановит всю викторину
        for (const q of questions) {
            let userAnswerNum;
            let isValidInput = false;

            // Цикл для повторного запроса, если пользователь ввёл ерунду
            while (!isValidInput) {
                const answer = prompt(
                    `${q.question}\n\n${q.options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}\n\nВведите номер ответа (1-${q.options.length}):`
                );

                // ПРОВЕРКА НА ОТМЕНУ
                if (answer === null) {
                    alert('Вы прервали викторину!');
                    return; // ✅ ЭТО ТЕПЕРЬ РАБОТАЕТ: полностью выходит из функции-обработчика
                }

                userAnswerNum = parseInt(answer, 10);

                if (isNaN(userAnswerNum)) {
                    alert('Пожалуйста, введите число!');
                } else if (userAnswerNum < 1 || userAnswerNum > q.options.length) {
                    alert(`Пожалуйста, введите число от 1 до ${q.options.length}!`);
                } else {
                    isValidInput = true;
                }
            }

            // Проверка ответа (приводим ввод пользователя к 0-based индексу)
            if (userAnswerNum - 1 === q.correctAnswer) {
                correct++;
            }
        }

        alert(`Викторина завершена! Правильных ответов: ${correct} из ${questions.length}`);
    });
}

// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];
const index = arr.findIndex(element => element === 4);
console.log(index);

// Задание 3

const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');
console.log(result);

// Задание 4

const rows = 3;
const cols = 3;
const matrix = [];

for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = 1;
    }

    // Задание 5

    const arr = [1, 1, 1];
    arr.push(2, 2, 2);
    console.log(arr); // [1, 1, 1, 2, 2, 2]

    // Задание 6

    const arr = [9, 8, 7, 'a', 6, 5];

    const result = arr
        .filter(item => item !== 'a')
        .sort((a, b) => a - b);

    console.log(result); // [5, 6, 7, 8, 9]

    // Задание 7

    const arr = [9, 8, 7, 6, 5];

    const userInput = prompt('Угадайте число из массива [9, 8, 7, 6, 5]:');

    const guessedNumber = Number(userInput);

    if (arr.includes(guessedNumber)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }

// Задание 8

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

// Задание 9

const arr = [[1, 2, 3], [4, 5, 6]];
const result = [...arr[0], ...arr[1]];
console.log(result); // [1, 2, 3, 4, 5, 6]

// Задание 10

const numbers = [3, 7, 4, 2, 10, 6, 9, 5, 1, 8];
for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    const next = numbers[i + 1];
    const sum = current + next;

    console.log(`Сумма элементов ${current} и ${next} = ${sum}`);
}

// Задание 11

function getSquares(arr) {
    return arr.map(num => num ** 2);
}

// Задание 12

function getWordLengths(words) {
    return words.map(word => word.length);
}

// Задание 13

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

// Задание 14

const originalArray = [];
for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    originalArray.push(randomNum);
}

const evenNumbers = [];
for (const num of originalArray) {
    if (num % 2 === 0) { 
        evenNumbers.push(num);
    }
}

console.log('Исходный массив:', originalArray);
console.log('Массив с чётными значениями:', evenNumbers);

// Задание 15

const numbers = [];
for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    numbers.push(randomNum);
}

let sum = 0;
for (const num of numbers) {
    sum += num;
}
