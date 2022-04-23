const modalBtn = document.querySelector('.modal__button'),
        courseBtn = document.querySelector('.course__button'),
        modal = document.querySelector('.modal');
// Появление модального окна по кнопке "Оставить заявку "
modalBtn.addEventListener('click',() => {
    modal.style.display = 'flex';
})
// Появление модального окна по кнопке "Заказать курс"
courseBtn.addEventListener('click',() => {
    modal.style.display = 'flex';
})

// Закрытие модального окна по клику вне зоны модального окна
modal.addEventListener('click',(event) => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) modal.style.display = '';
})

// Создание div "Х" для закрытия модального окна
const closeBtn = document.createElement('div');
closeBtn.textContent = 'X';
modal.prepend (closeBtn);
// создание стилей для кнопки
closeBtn.style.cssText = `
    font-size:20px; 
    position:relative; 
    display:flex; 
    padding:10px; 
    bottom:140px;
    left:350px;
    cursor:pointer;
`; 

// Закрытие модального окна по клику "Х"
closeBtn.addEventListener('click', () => {
    modal.style.display = '';
}) 