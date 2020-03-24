/* Header */

document.addEventListener('scroll', onScroll);

function onScroll(event) {
   const curPos = window.scrollY + 95;
   const divs = document.querySelectorAll('body > div');
   const links = document.querySelectorAll('.header__menu a');
   console.log(divs);
   divs.forEach((elem) => {
      if (elem.offsetTop <= curPos && (elem.offsetTop + elem.offsetHeight) > curPos) {
         links.forEach((a) => {
            a.classList.remove('header__menu-item_active');
            if (elem.getAttribute('id') === a.getAttribute('name')) {
               a.classList.add('header__menu-item_active');
            }
         })
      }
   })
}

/* Menu burger */

let burger = document.querySelector('.menu-burger');
let navigation = document.querySelector('.navigation');

burger.onclick = function () {
   navigation.classList.toggle('navigation-active');
   burger.classList.toggle('menu-burger_active');
}


/* Slider */

/* phone's monitors deactivation */

let monitorVertical = document.querySelector('.slider__phone-vertical-container');
let monitorHorizontal = document.querySelector('.slider__phone-horizontal-container');
let deactiveMonitorVertical = document.querySelector('.slider__display-vertical');
let deactiveMonitorHorizontal = document.querySelector('.slider__display-horizontal');

deactiveMonitorVertical.onclick = monitorVertical.onclick;
monitorVertical.onclick = function () {
   deactiveMonitorVertical.classList.toggle('monitor-black_active');
}

deactiveMonitorHorizontal.onclick = monitorHorizontal.onclick;
monitorHorizontal.onclick = function () {
   deactiveMonitorHorizontal.classList.toggle('monitor-black_active');
}

/* Slider change */

let slides = document.querySelectorAll('.slider__slides');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentSlide(n) {
   currentSlide = (n + slides.length) % slides.length;
}

function hideSlide(direction) {
   isEnabled = false;
   slides[currentSlide].classList.add(direction);
   slides[currentSlide].addEventListener('animationend', function () {
      this.classList.remove('active', direction);
   });
}

function showSlide(direction) {
   slides[currentSlide].classList.add('next', direction);
   slides[currentSlide].addEventListener('animationend', function () {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
   });
}

function nextSlide(n) {
   hideSlide('to-left');
   changeCurrentSlide(n + 1);
   showSlide('from-right');
}

function previousSlide(n) {
   hideSlide('to-right');
   changeCurrentSlide(n - 1);
   showSlide('from-left');
}

document.querySelector('.slider__arrow-left').addEventListener('click', function () {
   if (isEnabled) {
      previousSlide(currentSlide);
   }
});

document.querySelector('.slider__arrow-right').addEventListener('click', function () {
   if (isEnabled) {
      nextSlide(currentSlide);
   }
});

/* Portfolio */

let portfolioButtons = document.querySelectorAll('.portfolio__button');

portfolioButtons.forEach(button => {
   button.onclick = function () {
      let activeButton = document.querySelector('.portfolio__button_active');
      activeButton.classList.remove('portfolio__button_active');
      button.classList.add('portfolio__button_active');

      let images = document.querySelectorAll('.portfolio__image-container');
      images[0].before(images[11]);
   }
});

/* Portfolio images */

let images = document.querySelectorAll('.portfolio__image-container');
images.forEach(image => {
   image.addEventListener('click', function () {
      let activeImage = document.querySelector('.portfolio__image-container_active');
      if (activeImage !== null) {
         activeImage.classList.remove('portfolio__image-container_active');
      }
      image.classList.add('portfolio__image-container_active');
   })
})


/* Form Contacts */

let modal = document.querySelector('.modal');
let modalWindow = document.querySelector('.modal__window');
let okButton = document.querySelector('.ok');
let form = document.querySelector('form');
let info = document.querySelector('.info');


form.onsubmit = function window() {
   modal.style.display = 'block';
   document.body.style.overflowY = 'hidden';

   let subject = document.createElement('p');
   subject.innerHTML = (form.elements["subject"].value !== "") ? 'Subject: ' + form.elements["subject"].value : 'Without subject';
   info.prepend(subject);

   let description = document.createElement('p');
   description.innerHTML = (form.elements["description"].value !== "") ? 'Description: ' + form.elements["description"].value : 'Without description';
   subject.after(description);

   okButton.onclick = function () {
      modal.style.display = 'none';
      document.body.style.overflowY = '';
      let info = document.querySelector('.info');
      info.innerHTML = '';
      form.reset();
   }
   return false;
}
