$(document).ready(function () {
    $('.pets__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 1200,
        autoplay: false
    });

    $('.team__slider').slick({
        arrows: true,
        // fade: true,
        speed: 1200,
        autoplay: false
    });
    const listItems = document.querySelectorAll('.faq__items');
    const listBtn = document.querySelectorAll('.list__btn');

    listItems.forEach(function (item) {
        let btn = item.querySelector('.list__btn')
        btn.addEventListener('click', function () {
            item.classList.toggle('faq__items-active')
            btn.classList.toggle('list__btn-active')
        })
    })
});