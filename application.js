'use strict'

/** add a count after selcted presentation cards */
const cardPresentation = document.getElementsByClassName("presentation-card");
let counterCourses = document.getElementsByClassName("counter-courses");
let arrayCardSelected = document.getElementsByClassName("presentation-card border-card");
function functionSelected(event) {
    // toggle
    this.classList.toggle("border-card");
    let count = document.getElementById("counter");
    // let nbOfSelectedElement;
    if (arrayCardSelected.length != 0) {
      counterCourses[0].classList.add("active");
      count.innerHTML = `Nombre de cours sélectionnés : ${arrayCardSelected.length}`;
      // console.log(arrayCardSelected.length)
    } else {
      counterCourses[0].classList.remove("active");
    }
    const emptyTrash = document.addEventListener("click", function() {
      // clear all "border-count"
    })
    // event.preventDefault();
}
// Array.from to transform HTMLCollection to array
Array.from(cardPresentation).forEach((card) => {
  card.addEventListener("click", functionSelected);
});

/** slider images */
// slider en array dans JS (idée à creuser ...)
// var slide = new Array(
//   "assets/img-carrousel-01.png",
//   "assets/img-carrousel-02.png",
//   "assets/img-carrousel-03.png"
// );
// var number = 0;

// function ChangeSlide(direction) {
//   number = number + direction;
//   if (number < 0) number = slide.length - 1;
//   if (number > slide.length - 1) number = 0;
//   document.getElementById("slide").src = slide[number];
// }

//jQuery
  // document.getElementById("slider").slick({
  //   speed: 1000,
  //   dots: true,
  //   prevArrow: '<button class="slide-img prev-arrow"></button>',
  //   nextArrow: '<button class="slide-img next-arrow"></button>'
  // });


/** https://codepen.io/Ziratsu/pen/abdoNgq */
const items = document.querySelectorAll('#slider>li>img');
const nbSlide = items.length;
const next = document.querySelector('.slide-arrow-right');
const before = document.querySelector('.slide-arrow-left');
let count = 0;

function slideNext(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);

}
next.addEventListener('click', slideNext)


function slideBefore(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);

}
before.addEventListener('click', slideBefore)

function keyPress(e){
    console.log(e);

    if(e.keyCode === 37){
        slideBefore();
    } else if(e.keyCode === 39){
        slideNext();
    }
}
document.addEventListener('keydown', keyPress)
