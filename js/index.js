// For the Home Page
const helpBtn = document.querySelector(".js-help");
const helpDiv = document.querySelector(".help-container");
const close = document.querySelector(".close");
helpBtn.addEventListener("click", () => {
  helpDiv.classList.add("show-help");
});
close.addEventListener("click", () => {
  helpDiv.classList.remove("show-help");
});
function openHelp() {
  document.getElementById("helpModal").style.display = "flex";
}
function closeHelp() {
  document.getElementById("helpModal").style.display = "none";
}