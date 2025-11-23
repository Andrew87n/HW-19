const textRef = document.querySelectorAll("input");
textRef.forEach((input, i) =>{
  input.addEventListener("change", (e) => {
    if (i === 0){
      document.body.style.backgroundColor = "red";
    } else if (i === 1){
      document.body.style.backgroundColor = "white";
    } else if (i === 2){
      document.body.style.backgroundColor = "green";
    }
  })
});

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (evt) => {
  if (evt.target.value != ""){
    outputRef.textContent = evt.target.value;
  } else {
    outputRef.textContent = "незнайомець";
  }
});

const inputRef1 = document.querySelector("#validation-input");
inputRef1.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const requiredLength = Number(event.target.dataset.length);
  const currentLength = event.target.value.length;
  inputRef1.classList.remove("valid", "invalid");
  if (currentLength === requiredLength) {
    inputRef1.classList.add("valid");
  } else {
    inputRef1.classList.add("invalid");
  }
};

const controlRef = document.querySelector("#font-size-control");
const textRef1 = document.querySelector("#text");
controlRef.addEventListener("input", (event) => {
  textRef1.style.fontSize = event.target.value + "px";
});