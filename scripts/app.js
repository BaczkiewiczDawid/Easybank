const hamburger = document.querySelector('nav .hamburger');
const nav = document.querySelector('nav .hamburger .navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
});

const tl = new TimelineMax();

tl.fromTo('.header__title', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0})
tl.fromTo('.header__paragraph', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .5)
tl.fromTo('.header__button', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, 1);

const sectionTl = new TimelineMax();
const sectionController = new ScrollMagic.Controller();

sectionTl.fromTo('.section__title', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0})
sectionTl.fromTo('.section__paragraph', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .5)

let scene = new ScrollMagic.Scene({
    triggerElement: '.header__button',
})

.setTween(sectionTl).addTo(sectionController);

const sectionTlTwo = new TimelineMax();
const sectionControllerTwo = new ScrollMagic.Controller();

sectionTlTwo.fromTo('.container__image', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0})
sectionTlTwo.fromTo('.container__title', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .5)
sectionTlTwo.fromTo('.container__paragraph', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .75)

let sectionScene = new ScrollMagic.Scene({
    triggerElement: '.section__title',
})

.setTween(sectionTlTwo).addTo(sectionControllerTwo);


const articleTl = new TimelineMax();
const articleController = new ScrollMagic.Controller();

articleTl.fromTo('.article__image', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0})
articleTl.fromTo('.article__autor', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .2)
articleTl.fromTo('.article__title', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .4)
articleTl.fromTo('.article__paragraph', 1, {opacity: 0, y: 100}, {opacity: 1, y: 0}, .6)

let articleScene = new ScrollMagic.Scene({
    triggerElement: '.title',
})

.setTween(articleTl).addTo(articleController);

