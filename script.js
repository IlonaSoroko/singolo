/* Header */

let menuItems = document.querySelectorAll('.header__menu-item');
let header = document.querySelector('.header-fixed');
menuItems.forEach(menuItem => {
   menuItem.onclick = function () {
      let activeMenuItems = document.querySelectorAll('.header__menu-item_active');

      activeMenuItems.forEach(activeMenuItem =>
         activeMenuItem.classList.remove('header__menu-item_active'));

      menuItem.classList.add('header__menu-item_active');
   }
})

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
   slider.style.transition = 'margin-left 100ms';
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
   slider.style.transition = 'margin-left 100ms';
   slider.style.marginLeft = position + 'px';
}
