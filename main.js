var inputBox = document.querySelector(".nameInput");
var outputBox = document.querySelector(".somedogs");
var button = document.querySelector(".ntd");

button.addEventListener ("click", changeName);

function changeName(event){
  event.preventDefault();
  console.log(inputBox.value);
  console.log(outputBox.innerText);
  outputBox.innerText = inputBox.value;
}