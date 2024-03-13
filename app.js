const modalOpen = document.getElementById("open");
const modal = document.getElementById("modalShow");
const exit = document.querySelector(".exit");
modalOpen.addEventListener("click", () => {
  modal.classList.add("visible");
});
exit.addEventListener("click", () => {
  modal.classList.remove("visible");
});
