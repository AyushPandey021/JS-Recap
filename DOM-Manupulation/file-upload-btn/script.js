// Select elements
const btn = document.querySelector(".btn");
const fileInput = document.querySelector(".file-input");


btn.addEventListener("click", () => {
  fileInput.click();
});


fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
});
