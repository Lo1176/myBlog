'use strict'

/** add a count after selcted presentation cards */
const cardPresentation = document.getElementsByClassName("presentation-card");
let counterCourses = document.getElementsByClassName("counter-courses");
let arrayCardSelected = document.getElementsByClassName("presentation-card border-card");
function functionSelected(event) {
    // toggle
    this.classList.toggle("border-card");
    let count = document.getElementById("counter");
    if (arrayCardSelected.length != 0) {
      counterCourses[0].classList.add("active");
      count.innerHTML = `Nombre de cours sélectionnés : ${arrayCardSelected.length}`;
      // console.log(arrayCardSelected.length)
    } 


    // addEventListener trash-card-selected
    // SORTIR C+ETTE 2EME FONCTION ET L APPELER CI DESSOUS
    const trashSelected = document.getElementById("trash-card-selected")

      trashSelected.addEventListener("click", function () {
        // clear all "border-count"
        Array.from(cardPresentation).forEach((card) => {
          card.classList.remove("border-card");

        })
        counterCourses[0].classList.remove("active");

      });
  
    // event.preventDefault();
}


// trashAllSelected();
// Array.from to transform HTMLCollection to array
Array.from(cardPresentation).forEach((card) => {
  card.addEventListener("click", functionSelected);
});



/** slider images */
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
