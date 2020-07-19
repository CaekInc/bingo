var themeToggle = document.querySelector('.wrapper__img');
var wrapper = document.querySelector('.wrapper');
var upText = document.querySelector('.wrapper__text-up');
var downText = document.querySelector('.wrapper__text-down');
var pushBtn = document.querySelector('.wrapper__btn');

var changeColor = function () {
    wrapper.classList.toggle('wrapper--dark');
    upText.classList.toggle('wrapper__text-up--dark');
    downText.classList.toggle('wrapper__text-down--dark');
    pushBtn.classList.toggle('wrapper__btn--dark');
};
themeToggle.addEventListener('click', changeColor);