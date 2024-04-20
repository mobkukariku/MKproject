// Функция обратного вызова для Intersection Observer
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {
            // Элемент вошел в область видимости
            element.classList.remove('invisible');
            element.classList.add('visible');
        } else {
            // Элемент вышел из области видимости
            element.classList.remove('visible');
            element.classList.add('invisible');
        }
    });
}

// Настройте Intersection Observer
const observerOptions = {
    root: null, // Просматриваемая область - окно
    rootMargin: '0px', // Поля вокруг окна просмотра
    threshold: 0.1 // Процент видимости элемента, при котором сработает наблюдение
};

// Создайте наблюдателя
const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Найдите элементы, которые нужно отслеживать
const elementsToObserve = document.querySelectorAll('.animate-element');

// Начните наблюдать за элементами
elementsToObserve.forEach(element => {
    observer.observe(element);
});
