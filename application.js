'use strict'

/** add a count after selcted presentation cards */
const cardPresentation = document.getElementsByClassName("presentation-card");
function functionSelected(event) {
    // toggle
    this.classList.toggle('border-card');
    let count = 0;
    let nbOfSelectedElement;

    // event.preventDefault();
}
// Array.from to transform the HTMLCollection to array
Array.from(cardPresentation).forEach((card) => {
  card.addEventListener("click", functionSelected);
});

