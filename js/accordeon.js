const contents = document.querySelectorAll('.program-line__content');

// функция удаления класса active по индексу
const delActive = (indexActive)=> {
    contents.forEach((elem, index)=> {
        const descr = elem.querySelector('.program-line__descr');
        if (indexActive !== index){ 
            if (descr.classList.contains('active')) descr.classList.remove('active');
            }
    })
}
// перебираем элементы в цикле
contents.forEach((elem, index)=> {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');
    // по событию click переключаем класс active у выбранного элементва и удаляем у других
    title.addEventListener('click', () =>{
        delActive(index);
        descr.classList.toggle('active');
    })
})



