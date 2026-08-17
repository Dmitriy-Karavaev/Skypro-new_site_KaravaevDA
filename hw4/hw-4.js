const btnRSP = document.getElementById('RockScissorsPaper');

if (btnRSP) {
  btnRSP.addEventListener('click', playRockScissorsPaper);
} else {
  console.error('Кнопка #RockScissorsPaper не найдена. Проверь HTML.');
}

function playRockScissorsPaper() {
  const choices = ['камень', 'ножницы', 'бумага'];

  // Запрос ввода
  let userChoice = prompt('Выбери: камень, ножницы или бумага');
  if (userChoice === null) return; // отмена

  userChoice = userChoice.trim().toLowerCase();

  // Валидация ввода
  if (!choices.includes(userChoice)) {
    alert('Неверный выбор. Напиши: камень, ножницы или бумага.');
    return;
  }

  // Ход компьютера
  const compChoice = choices[Math.floor(Math.random() * choices.length)];

  // Определение результата
  let resultText;
  if (userChoice === compChoice) {
    resultText = 'Ничья! Вы оба выбрали: ' + userChoice;
  } else if (
    (userChoice === 'камень' && compChoice === 'ножницы') ||
    (userChoice === 'ножницы' && compChoice === 'бумага') ||
    (userChoice === 'бумага' && compChoice === 'камень')
  ) {
    resultText = 'Ты победил! Ты выбрал: ' + userChoice + ', компьютер: ' + compChoice;
  } else {
    resultText = 'Ты проиграл! Ты выбрал: ' + userChoice + ', компьютер: ' + compChoice;
  }

  alert(resultText);
}
