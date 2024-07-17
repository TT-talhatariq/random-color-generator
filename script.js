// Step 1: take all variables that you might need.

let buttons = document.querySelectorAll("button");

// Step 3: Add Logic for that.

const changeColor = (button) => {
  let btnColor = button.target.textContent;

  document.body.style.backgroundColor = btnColor;
};

// Step 2: Add event listener

buttons.forEach((button) => {
  button.addEventListener("click", changeColor);
});
