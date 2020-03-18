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


/* Slider */

/* phone's monitors deactivation */

let monitorVertical = document.querySelector('.slider__phone-vertical');
let monitorHorizontal = document.querySelector('.slider__phone-horizontal');
let deactiveMonitorVertical = document.querySelector('.monitor-black.vertical');
let deactiveMonitorHorizontal = document.querySelector('.monitor-black.horizontal');

monitorVertical.onclick = function () {
   deactiveMonitorVertical.classList.toggle('monitor-black_active');
}
deactiveMonitorVertical.onclick = monitorVertical.onclick;

monitorHorizontal.onclick = function () {
   deactiveMonitorHorizontal.classList.toggle('monitor-black_active');
}
deactiveMonitorHorizontal.onclick = monitorHorizontal.onclick;

/* Slider change */

let width = 1020;
let count = 4;
let slider = document.querySelector('.slider__carousel-container > ul');
let slides = document.querySelectorAll('.slider__carousel-container li');
let position = -width;

document.querySelector('.slider__arrow-left').onclick = function () {
   position += width;
   slider.addEventListener('transitionend', function (event) {
      if (event.propertyName == 'opacity') return;

      if (position > -width) {
         position = -(width * (count - 2));
         slider.style.transition = 'none';
         slider.style.marginLeft = position + 'px';
      }

      deactiveMonitorVertical.classList.remove('monitor-black_active');
      deactiveMonitorHorizontal.classList.remove('monitor-black_active');
   });
   slider.style.transition = 'margin-left 110ms';
   slider.style.marginLeft = position + 'px';
}

document.querySelector('.slider__arrow-right').onclick = function () {
   position -= width;

   slider.addEventListener('transitionend', function (event) {
      if (event.propertyName == 'opacity') return;
      if (-position >= (width * (count - 1))) {
         position = -width;
         slider.style.transition = 'none';
         slider.style.marginLeft = position + 'px';
      }

      deactiveMonitorVertical.classList.remove('monitor-black_active');
      deactiveMonitorHorizontal.classList.remove('monitor-black_active');
   });
   slider.style.transition = 'margin-left 110ms';
   slider.style.marginLeft = position + 'px';
}

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
