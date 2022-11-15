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


  // PETS

  window.addEventListener('load', () => {

    const left = document.querySelector('.left-scroll-btn');
    const right = document.querySelector('.right-scroll-btn');

    const slider = document.querySelector('.animal_card-slider')
    const cards = document.querySelectorAll('.animal_card-element');


let counter = 0;
    const cardSize = cards[0].clientWidth;

    slider.style.transform = 'TranslateX(' + `${-cardSize * counter}px)`;

    right.addEventListener('click', () => {
      if(counter >= cards.length - 7) counter = -1;
      slider.classList.add('transform_anim');
      counter++;
      slider.style.transform = 'TranslateX(' + `${-cardSize * 3 * counter}px)`;
    })


    // let sliders = [];

    // for (let i = 0; i < cards.length; i++) {
    //   sliders[i] = cards[i].querySelector('img');
    //   cards[i].remove()
    // }

    // let step = 0;
    // let offset = 0;



    // function drow() {
    //   let slide = document.createElement('div');
    //   slide.classList.add('.animal_card-element');
    //   slide.appendChild(sliders[step]);
    //   slide.style.left = offset * slider + 'px';
    //   document.querySelector('.animal_card-slider').appendChild(slide);
    //   if (step + 1 == cards.length) {
    //     step = 0;
    //   } else {
    //     step++
    //   }
    //   offset = 1
    // }
    



    
















  })