document.addEventListener('DOMContentLoaded', () => {
    // Ищем кнопку по новому id
    const btn = document.getElementById('GuessTheNumber');

    if (btn) {
        btn.addEventListener('click', () => {
            const secretNumber = Math.floor(Math.random() * 100) + 1;
            let attempts = 0;
            let userInput;

            while (true) {
                // Исправленная строка: обратные кавычки и ${attempts} без обратного слэша
                userInput = prompt(
                    `Угадай число от 1 до 100.\nПопыток: ${attempts}\n\nВведи число:`
                );

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
    } else {
        console.error('Кнопка с id="GuessTheNumber" не найдена. Проверь HTML.');
    }
});
