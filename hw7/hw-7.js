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

const btn = document.getElementById('viktorina');

if (btn) {
btn.addEventListener('click', () => {
let correct = 0;

questions.forEach(q => {
const answer = prompt(`${q.question} \n ${q.options.join('\n')}`);

if (answer === q.options[q.correctAnswer]) {
correct++;
}
});

alert('Правильных ответов: ' + correct);
});
}