const contents = document.querySelectorAll('.program-line__content');
contents.forEach((elem, index)=> {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');
    title.addEventListener('click', () =>{
        delActive(index);
        descr.classList.toggle('active');
    })
})
const delActive = (indexActive)=> {
    contents.forEach((elem, index)=> {
        const descr = elem.querySelector('.program-line__descr');
        if (indexActive !== index) descr.classList.remove('active');
    })
}


