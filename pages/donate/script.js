// BURGER MENU

let popup = document.querySelector('.popup_tablet');
let popupOpen = document.getElementById('popup_btn');
let popupClose = document.querySelector('.cross')
let popupCloseSpan = document.querySelector('.cross_span')
let overlayTablet = document.querySelector('.overlay_open_tablet')


popupOpen.onclick = function () {
  popup.style.transform='translate(0, 0)', overlayTablet.style.display='block'
};


popupClose.onclick = function () {
  popup.style.transform='translate(0, -340px)', overlayTablet.style.display='none'
};

window.onclick = function (e) {
  if(e.target == overlayTablet || e.target == popupClose) {
    popup.style.transform='translate(0, -340px)', overlayTablet.style.display='none'
  }
  }