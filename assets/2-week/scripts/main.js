const button = document.querySelector(".show-button");
const hideAccordion = document.querySelector(".accordion");
button.addEventListener("click", () => {
  hideAccordion.classList.toggle("hidden");
});
