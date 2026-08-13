document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('GuessTheNumber');
  const gameArea = document.getElementById('gameArea');
  const input = document.getElementById('guessInput');
  const submitBtn = document.getElementById('submitBtn');
  const resultDiv = document.getElementById('result');
  const statusText = document.getElementById('statusText');

  let secretNumber = null;
  let attempts = 0;
  let isGameActive = false;

  // Проверка по кнопке «Угадать»
  submitBtn.addEventListener('click', checkGuess);

  // Проверка по Enter
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  });

  function checkGuess() {
    if (!isGameActive || secretNumber === null) return;

    const guessValue = Number(input.value);

    if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
      resultDiv.textContent = 'Пожалуйста, введите число от 1 до 100.';
      resultDiv.className = 'hot';
      input.focus();
      return;
    }

    attempts++;

    if (guessValue === secretNumber) {
      resultDiv.textContent = `🎉 Верно! Вы угадали число ${secretNumber} за ${attempts} попыток!`;
      resultDiv.className = 'success';
      input.disabled = true;
      submitBtn.disabled = true;
      isGameActive = false;
      statusText.textContent = 'Игра завершена. Обновите страницу или добавьте кнопку «Сыграть ещё раз», чтобы начать заново.';
    } else if (guessValue < secretNumber) {
      resultDiv.textContent = '📈 Загаданное число больше.';
      resultDiv.className = 'warm';
      input.value = '';
      input.focus();
    } else {
      resultDiv.textContent = '📉 Загаданное число меньше.';
      resultDiv.className = 'warm';
      input.value = '';
      input.focus();
    }
  }
});