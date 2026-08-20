document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('SimpleArithmetic');

  if (!btn) {
    console.error('Ошибка: элемент #SimpleArithmetic не найден. Проверь HTML.');
    return;
  }

  btn.addEventListener('click', playArithmetic);

  function playArithmetic() {
    // Числа от 1 до 15
    let num1 = Math.floor(Math.random() * 15) + 1;
    let num2 = Math.floor(Math.random() * 15) + 1;

    const operations = ['+', '-', '*', '/'];
    const operator = operations[Math.floor(Math.random() * operations.length)];

    let correctAnswer;

    // Для деления подбираем числа так, чтобы ответ был целым
    if (operator === '/') {
      const multiplier = Math.floor(Math.random() * 9) + 1;
      num1 = num2 * multiplier; // num1 гарантированно делится на num2
      correctAnswer = num1 / num2;
    } else {
      switch (operator) {
        case '+':
          correctAnswer = num1 + num2;
          break;
        case '-':
          correctAnswer = num1 - num2;
          break;
        case '*':
          correctAnswer = num1 * num2;
          break;
      }
    }

    const problemText = `${num1} ${operator} ${num2}`;

    // Запрос ответа у пользователя
    const userInput = prompt(`Реши пример: ${problemText}`);

    // Если пользователь нажал «Отмена» — просто выходим, ничего не делаем
    if (userInput === null) {
      return;
    }

    const userAnswer = Number(userInput.trim());

    if (isNaN(userAnswer)) {
      alert('Пожалуйста, введи число.');
      return;
    }

    // Проверка и вывод результата
    if (userAnswer === correctAnswer) {
      alert('Верно! Молодец! 🎉');
    } else {
      alert(`Ошибка. Правильный ответ: ${correctAnswer}`);
    }
  }
});
