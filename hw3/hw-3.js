const btnTurn = document.getElementById('TurnTheText');

if (btnTurn) {
  btnTurn.addEventListener('click', playTurnTheText);
} else {
  console.error('Кнопка #TurnTheText не найдена. Проверь HTML.');
}

function playTurnTheText() {
  const userInput = prompt('Введи любой текст, который нужно перевернуть:');

  // Если пользователь нажал «Отмена» — выходим
  if (userInput === null) {
    return;
  }

  // Если ничего не ввёл — мягко просим попробовать ещё раз
  if (userInput.trim() === '') {
    alert('Ты ничего не ввёл. Давай ещё раз!');
    return;
  }

  // Переворачиваем строку
  const reversed = userInput.split('').reverse().join('');

  alert(`Твой текст задом наперёд:\n\n${reversed}`);
}
