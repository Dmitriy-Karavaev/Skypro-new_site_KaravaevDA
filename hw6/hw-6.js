// Задание 1

const title = document.querySelector('#main-title');
    const btn = document.querySelector('#toggle-btn');

    let isVisible = true;

    btn.addEventListener('click', () => {
      if (isVisible) {
        
        title.style.display = 'none';
        isVisible = false;
        btn.textContent = 'Показать';
      } else {
        
        title.style.display = 'block';
        isVisible = true;
        btn.textContent = 'Скрыть';
      }
    });

// Задание 2

const paragraph = document.querySelector('#text-paragraph');
const btn = document.querySelector('#change-color-btn');

btn.addEventListener('click', () => {
  paragraph.style.color = 'blue';
});

// Задание 3

const heading = document.querySelector('#main-heading');
const btn = document.querySelector('#change-text-btn');

btn.addEventListener('click', () => {
  heading.textContent = 'Привет, мир!';
});

// Задание 4

const btn = document.querySelector('#change-by-class-btn');

btn.addEventListener('click', () => {
  const elements = document.querySelectorAll('.description');
  
  elements.forEach(el => {
    el.textContent = 'Измененный текст';
  });
});

// Задание 5

const btn = document.querySelector('#change-desc-btn');

btn.addEventListener('click', () => {
    const elements = document.querySelectorAll('.description');

    elements.forEach(el => {
    el.textContent = 'Новый текст';
  });
});

// Задание 6

const btn = document.querySelector('#add-paragraph-btn');

btn.addEventListener('click', () => {
 
  const newParagraph = document.createElement('p');
  
  newParagraph.textContent = 'Новый абзац';
  
  document.body.appendChild(newParagraph);
});

// Задание 7

const btn = document.querySelector('#remove-desc-btn');

btn.addEventListener('click', () => {
  
  const firstDesc = document.querySelector('.description');

  if (firstDesc) {
    firstDesc.remove();
  } else {
    console.log('Элементов с классом description больше нет.');
  }
});

