const dropdown = document.getElementById("dropdown");
const updateOrder = document.getElementById("updateOrder");
const modal = document.querySelector(".modal");

dropdown.addEventListener("click", () => {
  const { classList } = dropdown;
  console.log(classList);
  if (classList.value.includes("is-active")) {
    console.log("yes");
    classList.remove("is-active");
  } else {
    console.log("no");
    classList.add("is-active");
  }
});

updateOrder.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.value.includes("button") ||
    e.target.classList.value.includes("modal-close")
  )
    modal.classList.remove("is-active");
});
