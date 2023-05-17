// Get all the box elements
const boxes = document.getElementsByClassName('box');

// Add event listeners for drag events
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('dragstart', dragStart);
  boxes[i].addEventListener('dragover', dragOver);
  boxes[i].addEventListener('drop', drop);
}

let sourceBox = null;
let destinationBox = null;

// Function to handle drag start event
function dragStart(event) {
  sourceBox = event.target;
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.classList.add('hide');
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();

  destinationBox = event.target;

  // Swap the boxes
  const temp = sourceBox.innerHTML;
  sourceBox.innerHTML = destinationBox.innerHTML;
  destinationBox.innerHTML = temp;

  //sourceBox.style.backgroundColor = "blue";
  const temp1= sourceBox.style.background;
  sourceBox.style.background= destinationBox.style.background;
  destinationBox.style.background= temp1;

  sourceBox.classList.remove('hide');

}

function undo(event){

  const temp = destinationBox.innerHTML;
  destinationBox.innerHTML = sourceBox.innerHTML;
  sourceBox.innerHTML = temp;


  const temp1= destinationBox.style.background;
  destinationBox.style.background= sourceBox.style.background;
  sourceBox.style.background= temp1;
}
