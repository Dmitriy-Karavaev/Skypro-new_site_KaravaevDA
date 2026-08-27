// ==========================================
// 1. БЕГУЩАЯ СТРОКА (Работает сразу при загрузке)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('scrollingLine');
    const clone = document.getElementById('scrollingLineClone');

    if (!line || !clone) return;

    clone.innerHTML = line.innerHTML;

    const resetAnimation = () => {
        line.style.animation = 'none';
        void line.offsetHeight; 
        line.style.animation = null;
    };

    line.addEventListener('animationiteration', resetAnimation);
});

// ==========================================
// 2. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ (Утилиты)
// ==========================================
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getTextColor(hexColor) {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#202027' : '#ffffff';
}

// ==========================================
// 3. ИНИЦИАЛИЗАТОРЫ ИГР (Логика внутри модального окна)
// ==========================================

function initColorGame(container) {
    const h2 = document.createElement('h2');
    h2.innerText = "Генератор случайных цветов";
    container.appendChild(h2);

    const p = document.createElement('p');
    p.innerText = "Нажми кнопку, чтобы изменить цвет фона этого окна.";
    container.appendChild(p);

    const btn = document.createElement('button');
    btn.innerText = "Сменить цвет";
    btn.style.padding = "10px 20px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";

    btn.addEventListener('click', () => {
        const newColor = getRandomColor();
        container.style.backgroundColor = newColor;
        const textColor = getTextColor(newColor);
        h2.style.color = textColor;
        p.style.color = textColor;
        btn.style.backgroundColor = textColor;
        btn.style.color = textColor === '#202027' ? '#ffffff' : '#202027';
    });
    container.appendChild(btn);
}

function initQuizGame(container) {
    const questions = [
        { q: "2 + 2 = ?", options: ["3", "4", "5"], correct: "4" },
        { q: "Какого цвета небо в ясный день?", options: ["Зеленое", "Синее", "Черное"], correct: "Синее" },
        { q: "Сколько планет в Солнечной системе?", options: ["8", "9", "10"], correct: "8" }
    ];
    
    let currentQuestionIndex = 0;
    let score = 0;

    const questionEl = document.createElement('h3');
    const optionsContainer = document.createElement('div');
    optionsContainer.style.marginTop = "20px";
    const restartBtn = document.createElement('button');
    restartBtn.innerText = "Начать заново";
    restartBtn.style.marginTop = "20px";
    restartBtn.style.display = "none";
    restartBtn.style.padding = "10px 20px";

    function renderQuestion() {
        if (currentQuestionIndex >= questions.length) {
            questionEl.innerText = `Викторина окончена! Ваш счет: ${score} из ${questions.length}`;
            optionsContainer.innerHTML = '';
            restartBtn.style.display = 'inline-block';
            return;
        }

        const q = questions[currentQuestionIndex];
        questionEl.innerText = q.q;
        optionsContainer.innerHTML = '';
        restartBtn.style.display = 'none';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.style.margin = "5px";
            btn.style.padding = "10px 15px";
            btn.style.fontSize = "16px";
            btn.style.cursor = "pointer";
            
            btn.onclick = () => {
                if (opt === q.correct) {
                    score++;
                    alert("Верно! 🎉");
                } else {
                    alert("Неверно! 😔");
                }
                currentQuestionIndex++;
                renderQuestion();
            };
            optionsContainer.appendChild(btn);
        });
    }

    container.appendChild(questionEl);
    container.appendChild(optionsContainer);
    container.appendChild(restartBtn);
    
    restartBtn.onclick = () => {
        currentQuestionIndex = 0;
        score = 0;
        renderQuestion();
    };

    renderQuestion();
}

function initClickerGame(container) {
    const h2 = document.createElement('h2');
    h2.innerText = "Кликер";
    container.appendChild(h2);

    const scoreEl = document.createElement('p');
    scoreEl.innerText = "Счет: 0";
    scoreEl.style.fontSize = "24px";
    container.appendChild(scoreEl);

    const btn = document.createElement('button');
    btn.innerText = "КЛИКНИ МЕНЯ!";
    btn.style.padding = "20px 40px";
    btn.style.fontSize = "20px";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#ff5722";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";

    let score = 0;
    btn.addEventListener('click', () => {
        score++;
        scoreEl.innerText = `Счет: ${score}`; // ИСПРАВЛЕНО: ${score} вместо \${score}
    });
    container.appendChild(btn);
}

function initRSPGame(container) {
    const h2 = document.createElement('h2');
    h2.innerText = "Камень, Ножницы, Бумага";
    container.appendChild(h2);

    const choices = ['камень', 'ножницы', 'бумага'];
    const resultEl = document.createElement('p');
    resultEl.style.fontSize = "20px";
    resultEl.style.fontWeight = "bold";
    container.appendChild(resultEl);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.toUpperCase();
        btn.style.margin = "5px";
        btn.style.padding = "10px 20px";
        btn.style.fontSize = "16px";
        btn.style.cursor = "pointer";

        btn.onclick = () => {
            const compChoice = choices[Math.floor(Math.random() * choices.length)];
            let resultText = "";

            if (choice === compChoice) {
                resultText = `Ничья! Вы оба выбрали: \${choice}`; // ИСПРАВЛЕНО
            } else if (
                (choice === 'камень' && compChoice === 'ножницы') ||
                (choice === 'ножницы' && compChoice === 'бумага') ||
                (choice === 'бумага' && compChoice === 'камень')
            ) {
                resultText = `Победа! Ты выбрал: ${choice}, компьютер: ${compChoice}`;
            } else {
                resultText = `Поражение! Ты выбрал: ${choice}, компьютер: ${compChoice}`;
            }
            resultEl.innerText = resultText;
        };
        container.appendChild(btn);
    });
}

// ==========================================
// 4. УНИВЕРСАЛЬНАЯ ФУНКЦИЯ МОДАЛЬНОГО ОКНА
// ==========================================
function openGameModal(title, gameInitFunction) {
    const overlay = document.createElement('div');
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; justify-content: center; align-items: center;";
    
    const modal = document.createElement('div');
    modal.className = 'game-modal-window';
    modal.style.cssText = "background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.5);";
    
    const h2 = document.createElement('h2');
    h2.innerText = title;
    h2.style.margin = "0 0 20px 0";
    modal.appendChild(h2);

    const gameContainer = document.createElement('div');
    modal.appendChild(gameContainer);

    if (typeof gameInitFunction === 'function') {
        gameInitFunction(gameContainer);
    }

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Закрыть игру';
    closeBtn.style.marginTop = '20px';
    closeBtn.style.padding = "10px 20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = () => overlay.remove();
    modal.appendChild(closeBtn);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
// ==========================================
// 5. ПРИВЯЗКА КНОПОК МЕНЮ (ЕДИНСТВЕННЫЙ БЛОК ДЛЯ СОБЫТИЙ)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Получаем ширину экрана
    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth > 782;

    // --- ГРУППА 1: Игры в модальных окнах (Работают ВСЕГДА) ---
    // Логика: эти игры имеют свой UI, поэтому они должны работать на любом устройстве.
    
    const btnColor = document.getElementById('btn-game-color');
    if (btnColor) {
        btnColor.addEventListener('click', () => openGameModal('Генератор цветов', initColorGame));
    }

    const btnQuiz = document.getElementById('btn-game-quiz');
    if (btnQuiz) {
        btnQuiz.addEventListener('click', () => openGameModal('Викторина', initQuizGame));
    }

    const btnClicker = document.getElementById('btn-game-clicker');
    if (btnClicker) {
        btnClicker.addEventListener('click', () => openGameModal('Кликер', initClickerGame));
    }

    const btnRSP = document.getElementById('btn-game-rsp');
    if (btnRSP) {
        btnRSP.addEventListener('click', () => openGameModal('Камень, Ножницы, Бумага', initRSPGame));
    }

    // --- ГРУППА 2: Игры с PROMPT (Работают ТОЛЬКО если экран > 782px) ---
    // Логика: prompt блокирует интерфейс браузера. На мобильных телефонах это очень плохой UX.
    // Поэтому мы вешаем слушатели только если экран большой.

    if (isLargeScreen) {
        console.log('Экран большой (>782px). Активируем игры с prompt.');

        const btnGuess = document.getElementById('GuessTheNumber');
        if (btnGuess) {
            btnGuess.addEventListener('click', () => {
                const secretNumber = Math.floor(Math.random() * 100) + 1;
                let attempts = 0;
                
                while (true) {
                    // ИСПРАВЛЕНО: \${attempts} вместо \${attempts}
                    const userInput = prompt(`Угадай число от 1 до 100.\nПопыток: \${attempts}\n\nВведи число:`);
                    
                    if (userInput === null) {
                        alert('Игра прервана.');
                        return;
                    }

                    const guess = parseInt(userInput, 10);
                    if (isNaN(guess)) {
                        alert('Пожалуйста, введи целое число!');
                        continue;
                    }

                    attempts++;

                    if (guess < secretNumber) {
                        alert('Загаданное число БОЛЬШЕ. Попробуй ещё раз!');
                    } else if (guess > secretNumber) {
                        alert('Загаданное число МЕНЬШЕ. Попробуй ещё раз!');
                    } else {
                        alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток.`);
                        break;
                    }
                }
            });
        }

        const btnArith = document.getElementById('SimpleArithmetic');
        if (btnArith) {
            btnArith.addEventListener('click', () => {
                const num1 = Math.floor(Math.random() * 15) + 1;
                const num2 = Math.floor(Math.random() * 15) + 1;
                const operations = ['+', '-', '*', '/'];
                const operator = operations[Math.floor(Math.random() * operations.length)];
                
                let correctAnswer;
                let problemText;

                if (operator === '/') {
                    const multiplier = Math.floor(Math.random() * 9) + 1;
                    const realNum1 = num2 * multiplier; 
                    correctAnswer = realNum1 / num2;
                    problemText = `${realNum1} ${operator} \${num2}`; // ИСПРАВЛЕНО
                } else {
                    switch (operator) {
                        case '+': correctAnswer = num1 + num2; break;
                        case '-': correctAnswer = num1 - num2; break;
                        case '*': correctAnswer = num1 * num2; break;
                    }
                    problemText = `${num1} ${operator} \${num2}`; // ИСПРАВЛЕНО
                }

                const userInput = prompt(`Реши пример: \${problemText}`);
                if (userInput === null) return;
                const userAnswer = Number(userInput.trim());
                if (userAnswer === correctAnswer) alert('Верно! 🎉');
                else alert(`Ошибка. Правильный ответ: \${correctAnswer}`);
            });
        }

        const btnTurn = document.getElementById('TurnTheText');
        if (btnTurn) {
            btnTurn.addEventListener('click', () => {
                const userInput = prompt('Введи любой текст, который нужно перевернуть:');
                if (userInput === null || userInput.trim() === '') return;
                const reversed = userInput.split('').reverse().join('');
                alert(`Твой текст задом наперёд:\n\n\${reversed}`);
            });
        }
    } else {
        console.log('Экран маленький (<=782px). Игры с prompt отключены для удобства пользователя.');
    }
});