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

let slides = document.querySelectorAll('.slider__slides');
let index = 1;

document.querySelector('.slider__arrow-left').onclick = function () {
   slides[index].classList.remove('slider__slide_active');
   index--;
   if (index < 0) {
      index = slides.length - 1;
   }
   slides[index].classList.add('slider__slide_active');
}

document.querySelector('.slider__arrow-right').onclick = function () {
   slides[index].classList.remove('slider__slide_active');
   index++;
   if (index > slides.length - 1) {
      index = 0;
   }
   slides[index].classList.add('slider__slide_active');
}