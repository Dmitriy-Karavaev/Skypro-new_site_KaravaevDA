
document.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('scrollingLine');
    const clone = document.getElementById('scrollingLineClone');

    if (!line || !clone) return;

    // Клонируем содержимое первой строки во вторую
    clone.innerHTML = line.innerHTML;

    const resetAnimation = () => {
        // Сбрас анимации, чтобы не было рывка
        line.style.animation = 'none';
        void line.offsetHeight; // принудительный пересчёт макета
        line.style.animation = null;
    };

    line.addEventListener('animationiteration', resetAnimation);
});

