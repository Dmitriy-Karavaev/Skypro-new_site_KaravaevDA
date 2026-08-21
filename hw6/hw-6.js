// Задание 1: скрыть/показать заголовок
const elTitle1 = document.querySelector('#main-title');
const elBtnToggle = document.querySelector('#toggle-btn');
let isVisible = true;

if (elBtnToggle) {
  elBtnToggle.addEventListener('click', () => {
    if (isVisible) {
      elTitle1.style.display = 'none';
      isVisible = false;
      elBtnToggle.textContent = 'Показать';
    } else {
      elTitle1.style.display = 'block';
      isVisible = true;
      elBtnToggle.textContent = 'Скрыть';
    }
  });
}

// Задание 2: изменить цвет текста
const elParagraph2 = document.querySelector('#text-paragraph');
const elBtnColor = document.querySelector('#change-color-btn');

if (elBtnColor && elParagraph2) {
  elBtnColor.addEventListener('click', () => {
    elParagraph2.style.color = 'blue';
  });
}

// Задание 3: динамическое изменение текста заголовка
const elHeading3 = document.querySelector('#main-heading');
const elBtnText = document.querySelector('#change-text-btn');

if (elBtnText && elHeading3) {
  elBtnText.addEventListener('click', () => {
    elHeading3.textContent = 'Привет, мир!';
  });
}

// Задание 4: изменение текста по классу .description
const elBtnClass = document.querySelector('#change-by-class-btn');

if (elBtnClass) {
  elBtnClass.addEventListener('click', () => {
    const elements = document.querySelectorAll('.description');
    elements.forEach(el => {
      el.textContent = 'Изменённый текст';
    });
  });
}

// Задание 5: ещё одно изменение всех .description
const elBtnDesc = document.querySelector('#change-desc-btn');

if (elBtnDesc) {
  elBtnDesc.addEventListener('click', () => {
    const elements = document.querySelectorAll('.description');
    elements.forEach(el => {
      el.textContent = 'Новый текст';
    });
  });
}

// Задание 6: добавление нового абзаца
const elBtnAdd = document.querySelector('#add-paragraph-btn');

if (elBtnAdd) {
  elBtnAdd.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
  });
}

// Задание 7: удаление первого элемента с классом .description
// ВАЖНО: в твоём HTML нет кнопки с id="remove-desc-btn" — см. ниже, как это исправить
const elBtnRemove = document.querySelector('#remove-desc-btn');

if (elBtnRemove) {
  elBtnRemove.addEventListener('click', () => {
    const firstDesc = document.querySelector('.description');
    if (firstDesc) {
      firstDesc.remove();
    } else {
      console.log('Элементов с классом description больше нет.');
    }
  });
} else {
  console.warn('Кнопка #remove-desc-btn не найдена в HTML — обработчик не подключён.');
}
