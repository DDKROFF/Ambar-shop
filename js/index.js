document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.setAttribute('loading', 'lazy');
});

//Мобильное меню//

const menuBtn = document.querySelector('.menu-btn');
const mobilemenu = document.querySelector('.mobile__menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('open');
    mobilemenu.classList.toggle('active');
    body.classList.toggle ('active');
});

//Якорные ссылки

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        menuBtn.classList.remove('open');
        mobilemenu.classList.remove('active');
        body.classList.remove('active');
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            //Обновление URL без дерга
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

//Модальная форма

const btn = document.getElementById('formOpen');
const body = document.body;
const modal = document.querySelector('.modal__window');
const modalCloseBtn = document.querySelector('.modal__btn');
const modalD = document.getElementById('modalD')
const modalS = document.getElementById('modalS')

btn.addEventListener('click', function () {
    body.classList.add('active');
    modal.classList.add('active');
});

modalCloseBtn.addEventListener('click', function () {
    body.classList.remove('active');
    modal.classList.remove('active');
});

modalD.addEventListener('click', function () {
    body.classList.remove('active');
    modal.classList.remove('active');
});

modalS.addEventListener('click', function () {
    body.classList.remove('active');
    modal.classList.remove('active');
    alert("Форма отправлена!");
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        body.classList.remove('active');
        modal.classList.remove('active');
        modalReg.classList.remove('active');
    }
});